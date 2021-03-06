import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsComponent } from '../../tabs/tabs-component/tabs.component';
//import { HomeComponent } from '../../home/home-component/home.component';

@Component({
  templateUrl: 'slides.html'
})
export class SlidesComponent {
  constructor(public nav: NavController) {}

  slides = [
    {
      title: "Herzlich Willkommen",
      description: "Diese App stellt ihnen stets aktuelle Informationen bereit, über die Partei",
      description1: "-Deutsche Mitte-",
      image: "assets/img/ica-slidebox-img-6.png",
    },
    {
      title: "Zum Kennenlernen",
      description: "Schauen sie gern in unseren online Stammtisch vorbei. Oder kommen sie persönlich zu unseren Stammtischtreffen in jeder größeren Stadt",
      description1: " www.dm-stammtisch.de",
      image: "assets/img/ica-slidebox-img-4.png",
    },
    {
      title: "SCHREIBEN SIE MIT UNS GESCHICHTE!!!",
      description: "Sind Sie Zuschauer - oder Teil der notwendigen und überfälligen Veränderung?",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Wir haben nur diese eine Chance",
      description: "Machen Sie mit !",
      description1: "Kommen Sie in die Deutsche Mitte",
      image: "assets/img/ica-slidebox-img-7.png",
    },
    {
      title: "Inoffizielle App",
      description: "Verantwortlich für diese App ist ausschließlich der Entwickler, nicht die Partei",
      image: "assets/img/ica-slidebox-img-2.png",
    },
  ];
  openPage() {
    this.nav.setRoot(TabsComponent);
  }
}
