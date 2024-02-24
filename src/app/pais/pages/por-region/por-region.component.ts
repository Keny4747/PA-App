import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  title:string='región';

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];
  constructor(private paisService:PaisService){}


  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarRegion(this.termino)
    .subscribe((paises) =>{
      this.paises=paises;

      console.log(paises);
    },(err)=>{
      this.hayError=true;
    }
    );

  }

  sugerencias(termino:string){
    this.hayError = false;
  }
}
