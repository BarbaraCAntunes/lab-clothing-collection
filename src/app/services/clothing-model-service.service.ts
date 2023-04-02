import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClothingModels } from '../class/clothing-model';

@Injectable({
  providedIn: 'root',
})
export class ClothingModelServiceService {
  private clothingModelUrl = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient) {}

  getClothingModel(): Observable<any[]> {
    return this.http.get<any[]>(this.clothingModelUrl);
  }

  getClothingModelById(id: number): Observable<ClothingModels> {
    return this.http.get<ClothingModels>(`${this.clothingModelUrl}/${id}`);
  }

  addClothingModel(clothingModel: ClothingModels): Observable<ClothingModels> {
    return this.http.post<ClothingModels>(this.clothingModelUrl, clothingModel);
  }

  updateClothingModel(
    id: number,
    clothingModel: ClothingModels
  ): Observable<ClothingModels> {
    return this.http.put<ClothingModels>(
      `${this.clothingModelUrl}/${id}`,
      clothingModel
    );
  }

  deleteClothingModel(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.clothingModelUrl}/${id}`);
  }
}
