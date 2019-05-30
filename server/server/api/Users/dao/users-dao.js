import models from '../../../models';
import Promise from 'bluebird';
const nodemailer = require("nodemailer");


export class usersDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.User.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static createNew(_body) {
   // console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
     /* models.User.create({
        name:_body.name,
        mail: _body.mail
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));*/

        console.log("------request came");
        let user = (_body);
        //console.log(user)
        sendMail(user, info => {
          console.log('this msg has been sent and id is ',$info.messageId)
          res.send(info);
        });
      })
      async function sendMail(user, callback) {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
           // type: 'OAuth2',
             mail: 'knageswar.edu@gmail.com',
            password: 9951506361

          }
        });

        let mailOptions = {
          from: 'Nageswar',
          to: user.mail,
          subject: "welcome to restaurant management",
          html: "<h1> $(user.name)</h1><br/>" +
            "<h4>thank you for registering</h4>"

        };

        let info = await transporter.sendMail(mailOptions);

        callback(info)

      }

    //});
  }

  static delete(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.User.destroy({where: {id: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getByEmail(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.User.findAll({where: {mail: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
