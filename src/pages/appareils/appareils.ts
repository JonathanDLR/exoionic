import { Component } from '@angular/core';
import { SingleAppareilsPage } from './single-appareils/single-appareils';
import { ModalController, MenuController, NavController } from 'ionic-angular';
import { AppareilsService } from '../../services/appareils.service';
import { Appareil } from '../../models/Appareil';
import { AppareilFormPage } from './appareil-form/appareil-form';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage {

    appareilsList: Appareil[];

    constructor(private modalController: ModalController,
                private appareilsService: AppareilsService,
                private menuController: MenuController,
                private navController: NavController) {}

    ionViewWillEnter() {
        this.appareilsList = this.appareilsService.appareilsList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalController.create(SingleAppareilsPage, {index: index});
        modal.present();
    }

    onToggleMenu() {
        this.menuController.open();
    }

    onNewAppareil() {
        this.navController.push(AppareilFormPage);
    }
}