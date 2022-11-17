const nodemailer = require('nodemailer')
const msg = {
    from : 'XXX',
    to : 'YYY',
    subject : 'Nodemailer Test',
    text : 'Great work' 
}
nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'SENDER EMAIL',
        pass : 'SENDER 16 digit app password- enable by doing 2 step authentication in gmail'
    },
    port : 465,
    host : 'smtp.gmail.com'
})
.sendMail(msg , (err) => {
    if(err) {
        return console.log('Error', err)
    } else {
        return console.log('Email sent')
    }
})