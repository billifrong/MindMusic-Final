import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  selectedCancion: Cancion = {
    Nombre:'',
    Artista:'',
    Duracion:'',
    Fecha:0,
    Imagen:'',
    Musica:'',
    Favorito:0
  };
  canciones!: Cancion[];

  URL_API = 'http://localhost:3000/api/canciones';

  constructor(private http: HttpClient) {
  }

  getCanciones(){
    return this.http.get<Cancion[]>(this.URL_API);
  }

  crearCancion(cancion: Cancion){
    return this.http.post(this.URL_API, cancion);
  }

  putCancion(cancion: Cancion){
    return this.http.put(`${this.URL_API}/${cancion._id}`, cancion);
  }

  deleteCancion(_id: string){
     return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
