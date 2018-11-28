import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios='';
  r=RegisterPage;
  users=[];
  us="";
  pswd="";
  us1='';
  pswd1='';
  index='';


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  clickR()
  {
    this.navCtrl.push(this.r,{usuarios:this.users});
  }
  clickLI()
  {
    if (this.us1.length> 0) 
    {
      if (this.pswd1.length>7)
      {
        let index=this.users.findIndex(user=> user.us==this.us1 && user.pswd==this.pswd1);
        console.log(index);
        if (index >= 0) {
          if (this.us1==this.us)
          {
          if (this.pswd1==this.pswd)
          {
            const alert = this.alertCtrl.create({
              title: 'Log In Exitoso',
              buttons: ['OK']
            });
            alert.present();
          }
          else
          {
            
          
            const alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: 'No estás registrado',
              buttons: ['OK']
            });
            alert.present();

          }
        }else
        {
            const alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: 'No estás registrado',
              buttons: ['OK']
            });
            alert.present();
          }
    

      
         }
          console.log(this.us1);
          console.log(this.us);
          console.log(this.pswd);
          console.log(this.pswd1);
          
        
        
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
