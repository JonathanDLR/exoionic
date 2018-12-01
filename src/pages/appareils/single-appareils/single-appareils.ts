import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-single-appareils',
  templateUrl: 'single-appareils.html',
})
export class SingleAppareilsPage implements OnInit {

  appareil: {
    name: string,
    description: string[]
  };

  constructor(public viewController: ViewController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.appareil = this.navParams.get('appareil');
  }

  dismissModal() {
    this.viewController.dismiss();
  }

}
