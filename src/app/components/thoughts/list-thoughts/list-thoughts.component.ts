import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts = [
    // {
    //   content: 'Passo informações para o componente filho',
    //   authorship: 'componente pai',
    //   model: 'modelo1',
    // },
    // {
    //   content: 'Minha propriedade é decorada com @input()',
    //   authorship: 'Componente filho',
    //   model: 'modelo2',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
