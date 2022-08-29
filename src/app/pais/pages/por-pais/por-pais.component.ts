import { Component, OnInit } from '@angular/core';
import { Country } from '../../components/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';
import { CountryV2 } from '../../components/interfaces/paisV2-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }  
    `
  ]
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  paises: CountryV2[] = [];
  
  paisesSugeridos: CountryV2[] = [];
  mostrarSugerencias: boolean = false;

  
  buscar( termino: string){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) =>{
        this.paises = paises;
      }, (err) =>{
        this.hayError = true;
        this.paises = [];

      } );
  }

  sugerencia (termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    if(this.termino==''){
      this.paisesSugeridos=[]; 
      this.mostrarSugerencias=false; 
      return;
    }
    this.paisService.buscarPais( termino )
        .subscribe( 
          paises => this.paisesSugeridos = paises.splice(0,5),
          (err) => this.paisesSugeridos = []
        );
  }

  buscarSugerido(termino: string){
    this.buscar( termino );
  }



}
