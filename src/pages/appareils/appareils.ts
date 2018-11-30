import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleAppareilsPage } from './single-appareils/single-appareils';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage {
    
    constructor(private navCtrl: NavController) {}

    onLoadAppareil(name: string) {
        this.navCtrl.push(SingleAppareilsPage, {appareilName: name});
    }
}