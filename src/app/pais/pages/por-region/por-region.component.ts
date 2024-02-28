import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  title:string='región';

  regiones: string [] = ['africa','americas','asia', 'europe', 'oceania'];
  regionActiva:string ='';

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];
  constructor(private paisService:PaisService){}

  getClaseCSS (region:string):string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region:string){
    this.regionActiva=region;

    this.hayError=false;
    this.termino=region;

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
