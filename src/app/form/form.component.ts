import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Form } from '../form';
import { Enum } from '../enum';
import { Constants } from '../app.config';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: Form = {
    id: Number(localStorage.getItem('generatorId')) || 1,
    itemName: '',
    enum: {
        label: '',
        id: '',
        symbol: '',
        decimals: 3,
        integer: false
    },
    quantity: null,
    price: 0,
    perishable: false,
    validDate: null,
    fabrication: new Date()
  };
  msgs: Message[] = [];

  dataAtual: Date;
  formRegister: FormGroup;
  enums: Array<{label: String, value: Enum }>;
  lista: Array<Form>;
  generator: any;
  id: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.formRegister = fb.group(this.form);
    this.enums = Constants['enums'];
    this.dataAtual = new Date();
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')){
      this.formRegister.patchValue({
        id: Number(this.route.snapshot.paramMap.get('id'))
      });
      this.lista = JSON.parse(localStorage.getItem('listaForm'));
      var index = this.existeNaLista(this.formRegister.get('id').value);
      if(this.lista.length > 0 && index > -1){
        this.formRegister.patchValue(this.lista[index]);
        this.formRegister.patchValue({
          validDate: this.lista[index].validDate ? new Date(this.lista[index].validDate) : null,
          fabrication: this.lista[index].fabrication ? new Date(this.lista[index].fabrication) : new Date()
        });
      }
    }
  }

  submit(){
    this.lista = localStorage.getItem('listaForm') ? JSON.parse(localStorage.getItem('listaForm')) : [];
    var index = this.existeNaLista(this.formRegister.get('id').value);
    if(index > -1){
      this.lista[index] = this.formRegister.value;
    } else {
      this.lista.push(this.formRegister.value);
      this.generator = Number(localStorage.getItem('generatorId'));
      this.generator = Number(this.generator) + 1;
      localStorage.setItem('generatorId', this.generator);
    }
    localStorage.setItem('listaForm', JSON.stringify(this.lista));
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Sucesso', detail: (index > -1 ? 'Item Atualizado' : 'Item Cadastrado')});
  }

  existeNaLista(id){
    return this.lista.indexOf(this.lista.filter(item => item && item.id == id)[0]);
  }


}
