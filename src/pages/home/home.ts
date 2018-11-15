import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
 
import { NotesPage } from '../../pages/notes/notes';
 
@Component({
  templateUrl: 'home.html'
})

export class HomePage {

  username: string;
  password: string;
 
  readonly APP_USERNAME: string = 'login';
  readonly APP_PASSWORD: string = 'password';
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
  }
 
  login() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Username or password entered incorrect',
      buttons: ['OK']
    });
 
    if (this.username == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
      this.navCtrl.push(NotesPage);
    } else {
      alert.present();
    }

    this.username = '';
    this.password = '';
  }
 
}
