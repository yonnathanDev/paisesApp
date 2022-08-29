import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe, tap } from 'rxjs';
import { Country } from '../components/interfaces/pais-interface';
import { CountryV2 } from '../components/interfaces/paisV2-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlV3: string = 'https://restcountries.com/v3.1';
  private apiUrlV2: string = 'https://restcountries.com/v2';
  
  get httpParams() {
    // Esto es lo mismo que se encuentra en el return
    // const httpParams = new HttpParams()
    //   .set('fields','name,capital,alpha2Code,flag,population');

    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<CountryV2[]> {
    const url = `${ this.apiUrlV2 }/name/${ termino }`;
    return this.http.get<CountryV2[]>( url, {params: this.httpParams} );
  }

  buscarCapital( termino: string): Observable<CountryV2[]>{
    const url = `${ this.apiUrlV2 }/capital/${ termino }`;
    return this.http.get<CountryV2[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( id: string ):Observable<CountryV2>{
    const url = `${ this.apiUrlV2 }/alpha/${ id }`;
    return this.http.get<CountryV2>(url);
  }

  buscarRegion( id : string ):Observable<CountryV2[]>{
    const url = `${ this.apiUrlV2 }/regionalbloc/${ id }`;
    return this.http.get<CountryV2[]>(url, {params: this.httpParams})
            .pipe(
              tap( console.log )
            )
  }

}
