const jwt = require(`jsonwebtoken`);
const bcrypt = require("bcryptjs");
const User = require("../models/user.schema");
const {sendingMail} = require("../shared/nodeMailer");
const { request, response } = require('express');
const signUp = async (request, response, next) => {
    const { name, email, phoneNumber, password } = request.body;
    console.log("body : ", request.body);
    try {
        const isExist = await User.findOne({ email });
        if (isExist) {
            return response.status(400).json("User ,already exist");
        }
        const user = new User(request.body);
        console.log("User : ", user)
        const hashedPassword = await bcrypt.hash(user.password, 11);
        console.log("hashed pass", hashedPassword);
        user.password = hashedPassword;
        await user.save();

        const token = await generateToken(user);
        console.log("token", token)
        user.password = undefined;
        response.status(201).json({ user, token });
        sendingMail("signup successfull", "Book store signUp", user.email);

    }
    catch (error) {
        console.log(error);
        return response.status(500).json("something went wrong...!!")
    }

}


//login api
const login = async (request, response) => {
    const { email, password } = request.body;
    console.log("body", request.body);
    try {
        console.log("hello")
        const user = await findByCredentials(email, password, response);
        console.log("user", user);
        const token = await generateToken(user);
        user.password = undefined;
        response.status(200).json({ user, token });
    } catch (error) {
        console.log("error", error);
        return response.status(422).json("something went wrong");
    }
}

//generate token
const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user._id.toString() }, "newuser");
    return token;
}
//hash password
const hashPassword = async (user) => {

    const hashedPassword = await bcrypt.hash(user.password, 8);

    return hashPassword;

};
//finsding user
const findByCredentials = async (email, password, response) => {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
        return response.status(404).json({ error: "invalid user" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return response.status(404).json({ error: "invaid user !!" })
    }
    return user;
};


exports.signUp = signUp;
exports.login = login;