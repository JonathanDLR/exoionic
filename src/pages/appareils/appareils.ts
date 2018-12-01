import { Component } from '@angular/core';
import { SingleAppareilsPage } from './single-appareils/single-appareils';
import { ModalController } from 'ionic-angular';
import { AppareilsService } from '../../services/appareils.service';
import { Appareil } from '../../models/Appareil';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage {

    appareilsList: Appareil[];

    constructor(private modalController: ModalController,
                private appareilsService: AppareilsService) {}

    ionViewWillEnter() {
        this.appareilsList = this.appareilsService.appareilsList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalController.create(SingleAppareilsPage, {index: index});
        modal.present();
    }
}