import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  thoughts = {
    id: '1',
    content: 'Apredendo Angular',
    authorship: 'Dev',
    model: '',
  };
  constructor() {}

  ngOnInit(): void {}

  createThoughts() {
    alert('Novo pensamento criado!');
  }

  cancel() {}
}
