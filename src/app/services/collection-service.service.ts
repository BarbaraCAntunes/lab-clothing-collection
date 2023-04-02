import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collections } from '../class/collections';

@Injectable({
  providedIn: 'root',
})
export class CollectionServiceService {
  private collectionUrl = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient) {}

  getCollection(): Observable<any[]> {
    return this.http.get<any[]>(this.collectionUrl);
  }

  getCollectionById(id: number): Observable<Collections> {
    return this.http.get<Collections>(`${this.collectionUrl}/${id}`);
  }

  updateCollection(collection: Collections): Observable<any> {
    return this.http.put<any>(
      `${this.collectionUrl}/${collection.id}`,
      collection
    );
  }

  deleteCollection(id: number): Observable<any> {
    return this.http.delete<any>(`${this.collectionUrl}/${id}`);
  }
}
