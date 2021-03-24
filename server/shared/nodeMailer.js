const nodemailer= require("nodemailer")
const sendingMail=(data,subject,reciever)=>{
   // app.get('/sendMail',(request,response)=>
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'amiardent111@gmail.com',
              pass: 'amisha@011'
            }
          });
          
          var mailOptions = {
            from: 'amiardent111@gmail.com',
            to: reciever,
            subject: subject,
            text: data
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
module.exports={sendingMail};