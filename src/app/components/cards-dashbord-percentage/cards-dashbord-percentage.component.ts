import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from 'src/app/services/collection-service.service';

@Component({
  selector: 'app-cards-dashbord-percentage',
  templateUrl: './cards-dashbord-percentage.component.html',
  styleUrls: ['./cards-dashbord-percentage.component.css'],
})
export class CardsDashbordPercentageComponent implements OnInit {
  collections: any[] = [];
  budgetAverage: number = 0;
  currentBudgetAverage: number = 0;
  percentage: number = 0;
  description: string = '';

  constructor(private collectionService: CollectionServiceService) {}

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections() {
    this.collectionService.getCollection().subscribe(
      (data) => {
        this.collections = data;
        this.calculateBudgetAverage();
      },
      (error) => {
        console.error('Error loading collections:', error);
      }
    );
  }

  calculateBudgetAverage() {
    let totalBudget = 0;
    let numOfCollections = 0;

    for (let i = 0; i < this.collections.length; i++) {
      const budget = parseFloat(this.collections[i].orcamento);
      if (!isNaN(budget)) {
        totalBudget += budget;
        numOfCollections++;
      }
    }
    this.budgetAverage = parseFloat(
      (totalBudget / numOfCollections).toFixed(2)
    );

    this.checkForNewCollectionAndUpdate();
  }

  checkForNewCollectionAndUpdate() {
    const storedBudgetAverage = localStorage.getItem('currentBudgetAverage');

    if (storedBudgetAverage) {
      this.currentBudgetAverage = +storedBudgetAverage;
      this.calculatePercentage();
      this.updateDescription();
    } else {
      this.currentBudgetAverage = this.budgetAverage;
      localStorage.setItem(
        'currentBudgetAverage',
        this.budgetAverage.toString()
      );
    }
  }

  calculatePercentage() {
    const percentage =
      ((this.budgetAverage - this.currentBudgetAverage) /
        this.currentBudgetAverage) *
      100;
    this.percentage = parseFloat(percentage.toFixed(2));
  }

  updateDescription() {
    const latestUpdate = this.collections.reduce((max, curr) =>
      new Date(max.updatedAt) > new Date(curr.updatedAt) ? max : curr
    );
    this.description = `Última atualização: ${new Date(
      latestUpdate.updatedAt
    ).toLocaleDateString()}`;
  }
}
