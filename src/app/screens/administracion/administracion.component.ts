import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PlayerComponent } from 'src/app/pages/player/player.component';
import * as moment from 'moment';
import { CancionService } from 'src/app/services/cancion.service';
import { NgForm } from '@angular/forms';
import { Cancion } from 'src/app/models/cancion';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(public cancionService: CancionService){}

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

  addCancion(form: NgForm){
    if(form.value._id){
      this.cancionService.putCancion(form.value).subscribe(
        res => console.log(res),
        err => console.error(err),
        () => console.log('completed')
      )
    }else{
      this.cancionService.crearCancion(form.value).subscribe(
        res => {this.getCanciones();
        form.reset},
        err => console.error(err),
        () => console.log('completed')
      )
    }
  }

  deleteCancion(id: string){
    if (confirm("¿Seguro que desea eliminarlo?")){
      this.cancionService.deleteCancion(id).subscribe(
        (res) => {this.getCanciones();
        },
        (err) => console.error(err)
      )
    };
  }

  editCancion(cancion: Cancion){
    this.cancionService.selectedCancion = cancion;
  }
}
