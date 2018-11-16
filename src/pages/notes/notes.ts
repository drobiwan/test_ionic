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
  notes: string[] = [];
  note: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    // this.dataToStore = {
    //   subject: '',
    //   url: '',
    //   note: '',
    //   images: ''
    // }
  }

  ionViewDidLoad() {
    this.storage.set('bike', this.note);
    this.insurances = [
      {
        name: 'Vehicle Body',
        description: 'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget',
        date: new Date(), 
        ValidUpto:'3 years from the date of issue.',
        price:5000
      },
      {
        name: 'Engine',
        description: 'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget',
        date: new Date(),
        ValidUpto: '3 years from the date of issue.',
        price: 1500
      },
      {
        name: 'Tyres',
        description: 'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget',
        date: new Date(),
        ValidUpto: '3 years from the date of issue.',
        price: 500
      },
      {
        name: 'Suspension',
        description: 'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget',
        date: new Date(),
        ValidUpto: '3 years from the date of issue.',
        price: 250
      }
    ]
    this.dataService.getData().then((notes) => {
      if (notes) {
        this.services = [notes];
        console.log(this.services);
      }
    }); 
  }

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }
  public async get(settingName){
    return await this.storage.get(`setting:${ settingName }`);
  }
  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }


  setData() {
    this.storage.set('note', 'value 111');
  }

  getData() {
    this.storage.get('note').then((data) => {
    });
  }

  addNote() {
    this.navCtrl.push(NotePage);
  }

  deleteNote(item) {
    var index = this.notes.indexOf(item, 0);

    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }

  deleteNoteModal(id) {
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
            this.deleteNote(id);
            console.log('Confirm delete note');
          }
        }
      ]
    });
  }

}
