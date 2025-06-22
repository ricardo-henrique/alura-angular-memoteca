import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  thought: Thought = {
    content: '',
    authorship: '',
    model: '',
  };
  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThoughts() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listar_pensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listar_pensamento']);
  }
}
