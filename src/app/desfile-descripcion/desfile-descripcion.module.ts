import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesfileDescripcionPage } from './desfile-descripcion.page';

const routes: Routes = [
  {
    path: '',
    component: DesfileDescripcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesfileDescripcionPage]
})
export class DesfileDescripcionPageModule {}
