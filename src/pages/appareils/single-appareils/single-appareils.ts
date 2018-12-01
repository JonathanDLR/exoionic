import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareil';
import { AppareilsService } from '../../../services/appareils.service';


@Component({
  selector: 'page-single-appareils',
  templateUrl: 'single-appareils.html',
})
export class SingleAppareilsPage implements OnInit {

  index: number;
  appareil: Appareil;

  constructor(public viewController: ViewController, 
              public navParams: NavParams,
              public appareilsService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

}
