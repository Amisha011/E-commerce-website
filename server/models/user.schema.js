const mongoose= require ("mongoose");
const uniqueValidator=require(`mongoose-unique-validator`);

const Schema=mongoose.Schema;
const userSchema=new Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        phoneNumber:{type:Number},
        password:{type:String},
        image:{String},
        userType:{type:String,default:"user"}
    },
    { timestamps: true }
)
userSchema.plugin(uniqueValidator);
module.exports=mongoose.model('User',userSchema);