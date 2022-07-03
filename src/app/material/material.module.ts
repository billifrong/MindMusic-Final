import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
