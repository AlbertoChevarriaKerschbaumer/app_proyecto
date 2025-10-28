import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.page.html',
  styleUrls: ['./enfermeria.page.scss'],
  standalone: true,
  imports: [IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EnfermeriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
