import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrcamentoServiceService {
  private orcamentoUrl = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient) {}

  getOrcamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.orcamentoUrl);
  }
}
