import { Component } from '@angular/core';
import { SingleAppareilsPage } from './single-appareils/single-appareils';
import { ModalController } from 'ionic-angular';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage {

    appareilsList = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litre',
                'Temps de lavage: 2h',
                'Conso: 173Kwh/an'
            ]
        },
        {
            name: 'TV',
            description: [
                'Dimensions: 40 pouces',
                'Conso: 22Kwh/an'
            ]
        },
        {
            name: 'Ordi',
            description: [
                'Marque: MSI',
                'Conso: 500Kwh/an'
            ]
        }
    ];
    
    constructor(private modalController: ModalController) {}

    onLoadAppareil(appareil: {name: string, description: string[]}) {
        let modal = this.modalController.create(SingleAppareilsPage, {appareil: appareil});
        modal.present();
    }
}