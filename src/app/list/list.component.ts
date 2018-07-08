import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import {ConfirmationService} from 'primeng/api';
import {Router} from "@angular/router";
import { Message } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ConfirmationService]
})
export class ListComponent implements OnInit {
  dados: Form[] = [];
  columns: Array<{}> = [];
  tempDelete: Object;
  msgs: Message[] = [];
 

  constructor(private confirmationService: ConfirmationService, private route: Router) {
    this.columns = [{
      descricao: 'Nome do Item',
      campo: 'itemName',
    },{
      descricao: 'Unidade de Medida',
      campo: 'enum',
      template: 'enum'
    },{
      descricao: 'Quantidade',
      campo: 'quantity',
      template: 'quantidade',
    },{
      descricao: 'Preço',
      campo: 'price',
      template: 'valor',
    },{
      descricao: 'Produto Perecível',
      campo: 'perishable',
      template: 'boolean',
    },{
      descricao: 'Data de Validade',
      campo: 'validDate',
      template: 'data',
    },{
      descricao: 'Data de Fabricação',
      campo: 'fabrication',
      template: 'data',
    }]
   }

  ngOnInit() {
    this.getDados();
  }

  getDados(){
    this.dados = JSON.parse(localStorage.getItem('listaForm')) || [];
  }

  editDados(id:number){
    this.route.navigate(['form/',id]);
  }

  incDados(){
    this.route.navigate(['form']);
  }

  deleteDados(id:number){
    this.confirmationService.confirm({
      header: "Confirmação de Exclusão",
      message: "Voce deseja excluir esse item?",
      accept: () =>{
        this.dados = this.dados.filter(item => item.id !== id);
        localStorage.setItem('listaForm', JSON.stringify(this.dados));
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Sucesso', detail: ('Item Excluído')});
      }
    });
    
  }

}
