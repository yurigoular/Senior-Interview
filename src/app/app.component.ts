import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router  , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Senior Sistemas - Entrevista';
  items = [
    {
      label: 'Formulario'
    },
    {
      label: 'Listagem'
    }
  ]
  panelItems = [
    {
      label: 'Formulário',
      routerLink: ['/form'],
      queryParams: {id: null}
    },
    {
      label: 'Listagem',
      routerLink: ['/list']
    }
  ]

  private dados: MenuItem[];

  constructor(private router: Router){}

  ngOnInit(){
    var that = this;
    this.router.events.subscribe((url:any) => {
        if(!url.url){return;}
        var Rota = url.url.split('/');
        that.items = [];
        Rota.forEach(item => {  
          var obj = {label: '', routerLink: ''};
          switch(item){
            case 'list':
              obj.label = 'Listagem';
              obj.routerLink = '/' + item;
              break;
            case 'form':
              obj.label = 'Formulário';
              obj.routerLink = '/' + item;
              break;
            default:
              obj.label = item;
              obj.routerLink = url.url;
              break;
          }
          if(obj.label){
            that.items.push(obj);
          }
        });
    });
    this.dados = [];
  }
  
}
