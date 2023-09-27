import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodosLosPaises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private paises: TodosLosPaises[] = [];
  constructor(private http: HttpClient) { }

  getPaises(){

    const url=`https://restcountries.com/v3.1/all`;

    this.http.get( url ) .subscribe( paises => {

    } )
  }


}
