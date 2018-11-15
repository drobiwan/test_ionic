import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
 
import { NotesPage } from '../../pages/notes/notes';
 
@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;
 
  readonly USERNAME: string = 'login';
  readonly PASSWORD: string = 'password';
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
 
  login() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Username or password entered incorrect',
      buttons: ['OK']
    });
 
    if (this.username == this.USERNAME && this.password == this.PASSWORD) {
      this.navCtrl.push(NotesPage);
      this.navCtrl.setRoot(NotesPage);
    } else {
      alert.present();
    }

    this.username = '';
    this.password = '';
  }
 
}
