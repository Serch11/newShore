import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GryffindorServeService {

  constructor(
    private http: HttpClient
  ) { }


  getGlyffindor(tipo: string): Observable<any[]> {
    return this.http.get<any[]>(`http://hp-api.herokuapp.com/api/characters/house/${tipo}`).pipe(
      map(personajes => personajes)
    );
  }

}
