import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../components/interfaces/pais-interface';
import { CountryV2 } from '../../components/interfaces/paisV2-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: CountryV2;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id})=> this.paisService.getPaisPorAlpha(id) ),
          tap(console.log)
        )
        .subscribe( pais => this.pais = pais);
    /*Otra forma de hacerlo
    this.activatedRoute.params
      .subscribe( ({id}) => {
        console.log(id);

        this.paisService.getPaisPorAlpha( id )
          .subscribe( pais =>{
            console.log(pais);
          });

      })*/

  }

}
