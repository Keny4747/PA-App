import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
          tap(pais => console.log('Datos del país:', pais)) // Agrega este console.log para verificar los datos recibidos
        )
        .subscribe(
          pais => {
            console.log('País asignado:', pais); // Agrega este console.log para verificar si el país se asigna correctamente
            this.pais = pais;
          },
          error => console.error('Error al obtener el país:', error)
        );
    }



}
