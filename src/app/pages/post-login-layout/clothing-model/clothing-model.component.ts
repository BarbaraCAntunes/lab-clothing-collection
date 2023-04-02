import { Component, OnInit } from '@angular/core';
import { ClothingModelServiceService } from 'src/app/services/clothing-model-service.service';

@Component({
  selector: 'app-clothing-model',
  templateUrl: './clothing-model.component.html',
  styleUrls: ['./clothing-model.component.css'],
})
export class ClothingModelComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.listClothingModel();
  }

  clothingModel: any[];

  constructor(private clothingModelService: ClothingModelServiceService) {
    this.clothingModel = [];
  }

  listClothingModel() {
    this.clothingModelService.getClothingModel().subscribe((data) => {
      this.clothingModel = data;
    });
  }
}
