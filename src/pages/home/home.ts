import { MyprofilePage } from './../myprofile/myprofile';
import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,public alert: AlertController,public platform: Platform) {

  }
 
    profile():void{
  this.navCtrl.push(MyprofilePage)
    }
  }

