import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothingModelServiceService } from 'src/app/services/clothing-model-service.service';
import { CollectionServiceService } from 'src/app/services/collection-service.service';

@Component({
  selector: 'app-edit-clothing-model',
  templateUrl: './edit-clothing-model.component.html',
  styleUrls: ['./edit-clothing-model.component.css'],
})
export class EditClothingModelComponent implements OnInit {
  editClothingModelForm!: FormGroup;
  clothingModelId!: number;
  collections: any[] = [];
  nameError = '';
  typeError = '';
  collectionError = '';
  responsavelError = '';
  bordadoError = '';
  estampaError = '';

  constructor(
    private formBuilder: FormBuilder,
    private clothingModelService: ClothingModelServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private collectionService: CollectionServiceService
  ) {
    this.editClothingModelForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      colecao: ['', Validators.required],
      responsavel: ['', [Validators.required, this.twoWordValidator]],
      bordado: ['', Validators.required],
      estampa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.clothingModelId = this.route.snapshot.params['id'];
    this.loadCollections();
    this.loadClothingModelData();
  }

  loadCollections(): void {
    this.collectionService.getCollection().subscribe((data) => {
      this.collections = data;
    });
  }

  loadClothingModelData() {
    this.clothingModelService
      .getClothingModelById(this.clothingModelId)
      .subscribe((clothingModel) => {
        this.editClothingModelForm.patchValue(clothingModel);
      });
  }

  editClothingModel() {
    this.nameError = '';
    this.typeError = '';
    this.collectionError = '';
    this.responsavelError = '';
    this.bordadoError = '';
    this.estampaError = '';

    if (this.editClothingModelForm.valid) {
      this.clothingModelService
        .updateClothingModel(
          this.clothingModelId,
          this.editClothingModelForm.value
        )
        .subscribe(() => {
          alert('Modelo de roupa editado com sucesso!');
          this.router.navigate(['/clothing-model']);
        });
    } else {
      this.validateFormFields();
    }
  }

  validateFormFields() {
    if (this.editClothingModelForm.get('nome')?.invalid) {
      this.nameError = '❌ Nome do modelo é obrigatório.';
    }
    if (this.editClothingModelForm.get('tipo')?.invalid) {
      this.typeError = '❌ Tipo do modelo é obrigatório.';
    }
    if (this.editClothingModelForm.get('colecao')?.invalid) {
      this.collectionError = '❌ Coleção é obrigatório.';
    }
    if (this.editClothingModelForm.get('responsavel')?.invalid) {
      if (this.editClothingModelForm.get('responsavel')?.errors?.['required']) {
        this.responsavelError = '❌ Responsável pelo modelo é obrigatório.';
      } else if (
        this.editClothingModelForm.get('responsavel')?.errors?.['twoWords']
      ) {
        this.responsavelError =
          '❌ O responsável deve ter pelo menos duas palavras.';
      }
    }
    if (this.editClothingModelForm.get('bordado')?.invalid) {
      this.bordadoError = '❌ Informe se o modelo possui bordado.';
    }
    if (this.editClothingModelForm.get('estampa')?.invalid) {
      this.estampaError = '❌ Informe se o modelo possui estampa.';
    }
  }

  twoWordValidator(control: any) {
    const words = control.value.trim().split(' ');
    if (words.length < 2) {
      return { twoWords: true };
    }
    return null;
  }

  deleteClothingModel() {
    this.clothingModelService
      .deleteClothingModel(this.clothingModelId)
      .subscribe(() => {
        alert('Modelo de roupa excluído com sucesso!');
        this.router.navigate(['/clothing-model']);
      });
  }

  cancel() {
    this.router.navigate(['/clothing-model']);
  }
}
