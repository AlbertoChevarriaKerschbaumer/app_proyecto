import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonIcon, RouterLink],
})
export class HomePage {
  constructor() {

    addIcons({ heart });
  }


  
}