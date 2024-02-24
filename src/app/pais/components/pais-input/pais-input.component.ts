import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Input()title:string='';

  @Output() onEnter:EventEmitter<string> =new EventEmitter();
  @Output() onDebounce:EventEmitter<string> =new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino:string='';

  ngOnInit(): void {
    /* ngOnInit: se dispara una sola vez */

    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(event:any){
    this.debouncer.next(this.termino);


  }
}
