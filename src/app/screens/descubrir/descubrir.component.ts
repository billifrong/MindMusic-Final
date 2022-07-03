import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PlayerComponent } from 'src/app/pages/player/player.component';
import * as moment from 'moment';
import { CancionService } from 'src/app/services/cancion.service';
import { NgForm } from '@angular/forms';
import { Cancion } from 'src/app/models/cancion';

@Component({
  selector: 'app-descubrir',
  templateUrl: './descubrir.component.html',
  styleUrls: ['./descubrir.component.scss']
})
export class DescubrirComponent implements OnInit{

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

  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  currentTime = '00:00';
  duration = '00:00';
  seek = 0;

  streamObserver(Musica: string){
    return new Observable(observer =>{

      this.audioObj.src = Musica;
      this.audioObj.load();
      this.audioObj.play();


      const handler = (event: Event) =>{
        console.log(event)
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      }

      this.addEvent(this.audioObj, this.audioEvents, handler)

    return () =>{
      this.audioObj.pause();
      this.audioObj.currentTime = 0;

      this. removeEvent(this.audioObj, this.audioEvents, handler);
    }
    } )
  }

  addEvent(obj: any, events: any, handler: any){
    events.forEach((event: any) => {
      obj.addEventListener(event, handler);
    })
  }

  removeEvent(obj: any, events: any, handler: any){
    events.forEach((event: any) => {
      obj.removeEventListener(event, handler);
    })
  }

  setSeekTo(ev: any){
    this.audioObj.currentTime = ev.target.value
  }

  setVolume(ev: any){
    this.audioObj.volume = ev.target.value;
  }

  openFile(Musica: string){
    this.streamObserver(Musica).subscribe(event=>{})
  }

  play(){
    this.audioObj.play();
  }

  pause(){
    this.audioObj.pause();
  }

  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

  timeFormat(time: number, format="mm:ss"){
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
