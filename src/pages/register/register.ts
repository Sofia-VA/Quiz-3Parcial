import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  usuarios='';
  users=[];
  us='';
  pswd='';
  no=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    this.users=this.navParams.get('usuarios');

    this.storage.keys()
    .then(keys => {
      if (keys.some(key => key == 'usuarios')){

       this.storage.get('usuarios')
       .then(users => {this.users = JSON.parse(users)});
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  clickRR()
  { 
    if (this.us.length > 0) 
    {
      if (this.pswd.length>7)
      {
        this.no=this.no++;
        this.users.push({
          us: this.us,
          pswd: this.pswd,
        });

        const alert = this.alertCtrl.create({
          title: 'Registrado',
          buttons: ['OK']
        });
        alert.present();

        this.storage.set('usuarios', JSON.stringify(this.users));
        this.navCtrl.pop();
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Introduce usuario y contraseña de más de 8 caracteres',
          buttons: ['OK']
        });
        alert.present();
      }
      
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Introduce usuario y contraseña de más de 8 caracteres',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
