import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Thought } from './thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly api = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.api);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.api, thought);
  }

  update(thought: Thought): Observable<Thought> {
    const url = `${this.api}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.api}/${id}`;
    return this.http.delete<Thought>(url);
  }

  findById(id: number): Observable<Thought> {
    const url = `${this.api}/${id}`;
    return this.http.get<Thought>(url);
  }
}
