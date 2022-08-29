import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../components/interfaces/pais-interface';
import { CountryV2 } from '../../components/interfaces/paisV2-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  constructor(private paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  capitales: CountryV2[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe( (capitales)=>{
        this.capitales = capitales;
      }, (err) =>{
        this.hayError = true;
        this.capitales = [];
      });
  }

  sugerencia( termino: string ){
    this.hayError = false;
    // TODO: crear sugerencia
  }

}
