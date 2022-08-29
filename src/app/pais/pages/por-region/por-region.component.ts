import { Component, OnInit } from '@angular/core';
import { CountryV2 } from '../../components/interfaces/paisV2-interface';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../components/interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent  {

  resgiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: CountryV2[] = [];

  constructor(private paisService: PaisService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string){
    if( region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( (paises) =>{
        this.paises = paises;
      }, (err) =>{
        this.paises = [];
      } );


    //TODO: cargar el llamdo al servicio 
  }

}



