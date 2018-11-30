import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-single-appareils',
  templateUrl: 'single-appareils.html',
})
export class SingleAppareilsPage implements OnInit {

  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('appareilName');
  }

}
