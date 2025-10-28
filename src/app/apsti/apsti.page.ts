import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-apsti',
  templateUrl: './apsti.page.html',
  styleUrls: ['./apsti.page.scss'],
  standalone: true,
  imports: [IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ApstiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
