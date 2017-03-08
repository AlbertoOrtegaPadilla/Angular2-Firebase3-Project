import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validateUrl} from "../shared/validators/validateUrl";

@Component({
  selector: 'app-formulario-oferta',
  templateUrl: './formulario-oferta.component.html',
  styleUrls: ['./formulario-oferta.component.css']
})
export class FormularioOfertaComponent implements OnInit, OnChanges {
  
  form:FormGroup;

  @Input()
  initialValue:any;

  constructor(private fb:FormBuilder) { 

    this.form = this.fb.group({
            codigo: ['',Validators.required],
            descripcion: ['',Validators.required],
            precio: ['',[Validators.required]]
        });
  }

  ngOnChanges(changes:SimpleChanges) {
        if (changes['initialValue']) {
            this.form.patchValue(changes['initialValue'].currentValue);
        }
    }

    ngOnInit() {

    }

    isErrorVisible(field:string, error:string) {

        return this.form.controls[field].dirty
                && this.form.controls[field].errors &&
                this.form.controls[field].errors[error];

    }


    reset() {
        this.form.reset();
    }


    get valid() {
        return this.form.valid;
    }

    get value() {
        return this.form.value;
    }

}
