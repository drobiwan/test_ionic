import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NotePage } from '../../pages/note/note';


@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    this.dataToStore = {
      subject: '',
      url: '',
      note: '',
      images: ''
    }
  }

  setData() {
    this.storage.set();
  }

  getData() {
    this.storage.get().then((data) => {
    });
  }

  addNote() {
    this.navCtrl.push(NotePage);
  }

  deleteConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete note',
      subTitle: 'Do you want to delete this note ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel delete note');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Confirm delete note');
          }
        }
      ]
    });
  }

}
