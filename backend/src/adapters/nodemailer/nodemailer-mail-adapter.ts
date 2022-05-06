import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a20f46384508e",
      pass: "b7699d7c63f8dc"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
    
    
    async sendMail({subject, body}: SendMailData){
        
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Rafael Massaro <rafaelmassaro9@gmail.com>',
            subject,
            html: body,
        });
    }
}