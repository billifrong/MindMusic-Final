import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PlayerComponent } from 'src/app/pages/player/player.component';
import * as moment from 'moment';
import { CancionService } from 'src/app/services/cancion.service';
import { NgForm } from '@angular/forms';
import { Cancion } from 'src/app/models/cancion';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  constructor(public cancionService: CancionService){}

  filterPost = '';

  ngOnInit(): void {

    this.getCanciones();
  }

  getCanciones(){
    this.cancionService.getCanciones().subscribe(
      res => this.cancionService.canciones = res,
      err => console.error(err),
      () => console.log('completed')
    )
  }
}
