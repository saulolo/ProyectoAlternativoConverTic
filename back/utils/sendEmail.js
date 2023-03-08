const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3e76db99cd1fb7",
          pass: "c08ac2f712987b"
        }
      });
      const mensaje={
        from: "ConverTic Shop Store <noreply@converticshop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
      }
      
      await transport.sendMail(mensaje)
}

module.exports= sendEmail;