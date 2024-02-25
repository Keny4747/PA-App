import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{


   pais!: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {

  }



  /* En el ngOnInit se captura el parámetro de la Url, en este caso el /paises:id (ver:pais.routing) */

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorCodigo( id )),
      tap(console.log)  //recibe el producto del observable y lo imprime en la consola   //tap(resp => console.log(resp))
    )
    .subscribe( (pais: Country[])=> this.pais = pais[0] )

    console.log('pais', this.pais)

  }


}
