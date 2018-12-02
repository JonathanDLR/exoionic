import { Component } from '@angular/core';
import { AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private alertController: AlertController,
              private menuController: MenuController) {}

  onToggleLights() {
    let alert = this.alertController.create({
      title: 'Etes vous certain de vouloir allumer?',
      subTitle: 'Cette action allumera ou éteindra toutes les lumières',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('OK')
        }
      ]
    });
    alert.present();
  }

  onToggleMenu() {
    this.menuController.open();
  }
}
