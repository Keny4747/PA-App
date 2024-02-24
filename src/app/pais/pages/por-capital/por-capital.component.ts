import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  title:string='capital';

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];
  constructor(private paisService:PaisService){}


  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino)
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
