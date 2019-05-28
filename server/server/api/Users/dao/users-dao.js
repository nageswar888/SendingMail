import models from '../../../models';
import Promise from 'bluebird';

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
    console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
      models.User.create({
        name:_body.name,
        mail: _body.mail
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
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
