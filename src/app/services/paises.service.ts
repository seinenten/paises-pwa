import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisInterface } from '../interfaces/paises.interface';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private paises: PaisInterface[] = [];

  constructor(private http: HttpClient) { }

  getPaises(): Observable<PaisInterface[]>{

    if( this.paises.length > 0 ){
      return of( this.paises );
    }

    const url=`https://restcountries.com/v2/lang/es`;

    return this.http.get<PaisInterface[]>(url)
      .pipe(
        tap(paises => {
          this.paises = paises;
        })
      );

  }

  getPaisPorId(id: string): Observable<PaisInterface | undefined> {
    if (this.paises.length > 0) {
      const pais = this.paises.find(p => p.alpha3Code === id);
      return of(pais);
    }

    return this.getPaises().pipe(
      switchMap(paises => {
        const pais = this.paises.find(p => p.alpha3Code === id);
        return of(pais);
      })
    );
  }
  


}
