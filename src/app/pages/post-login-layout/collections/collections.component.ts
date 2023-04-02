import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from '../../../services/collection-service.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.listCollection();
  }

  collection: any[];

  constructor(private collectionService: CollectionServiceService) {
    this.collection = [];
  }

  listCollection() {
    this.collectionService.getCollection().subscribe((data) => {
      this.collection = data;
    });
  }
}
