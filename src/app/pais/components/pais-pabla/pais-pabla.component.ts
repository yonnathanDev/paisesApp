import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';
import { CountryV2 } from '../interfaces/paisV2-interface';

@Component({
  selector: 'app-pais-pabla',
  templateUrl: './pais-pabla.component.html',
  styleUrls: ['./pais-pabla.component.css']
})
export class PaisPablaComponent {

  constructor() { }

  @Input() paises: CountryV2[] = [];


}
