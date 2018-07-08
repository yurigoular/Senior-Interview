import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Constants } from '../app.config';

@Component({
  selector: 'app-generate-list',
  templateUrl: './generate-list.component.html',
  styleUrls: ['./generate-list.component.css']
})
export class GenerateListComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() config: Object = {};
  @Output('getDados') getDados: EventEmitter<any> = new EventEmitter();
  @Output('editDados') editDados: EventEmitter<any> = new EventEmitter();
  @Output('incDados') incDados: EventEmitter<any> = new EventEmitter();
  @Output('deleteDados') deleteDados: EventEmitter<any> = new EventEmitter();
  _dados:any[] = [];

  @Input() get dados(): any[] {
    return this._dados;
  }
  set dados(val: any[]) {
    this._dados = val;
  }
  Constants: object = Constants;

  constructor() { 
  }

  ngOnInit(){
  }

}
