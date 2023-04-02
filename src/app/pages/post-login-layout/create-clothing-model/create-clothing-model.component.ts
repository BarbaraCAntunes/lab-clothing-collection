import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClothingModelServiceService } from 'src/app/services/clothing-model-service.service';
import { Router } from '@angular/router';
import { ClothingModels } from 'src/app/class/clothing-model';
import { CollectionServiceService } from 'src/app/services/collection-service.service';

@Component({
  selector: 'app-create-clothing-model',
  templateUrl: './create-clothing-model.component.html',
  styleUrls: ['./create-clothing-model.component.css'],
})
export class CreateClothingModelComponent implements OnInit {
  clothingModelForm!: FormGroup;
  nameError = '';
  typeError = '';
  collectionError = '';
  responsavelError = '';
  bordadoError = '';
  estampaError = '';
  collections: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clothingModelService: ClothingModelServiceService,
    private router: Router,
    private collectionService: CollectionServiceService
  ) {
    this.clothingModelForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      colecao: ['', Validators.required],
      responsavel: ['', [Validators.required, this.twoWordValidator]],
      bordado: ['', Validators.required],
      estampa: ['', Validators.required],
    });
  }

  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadCollections();
  }

  loadCollections(): void {
    this.collectionService.getCollection().subscribe((data) => {
      this.collections = data;
    });
  }

  createClothingModel() {
    this.nameError = '';
    this.typeError = '';
    this.collectionError = '';
    this.responsavelError = '';
    this.bordadoError = '';
    this.estampaError = '';

    if (this.clothingModelForm.valid) {
      const clothingModel: ClothingModels = {
        id: 0,
        nome: this.clothingModelForm.value.nome || '',
        colecao: this.clothingModelForm.value.colecao || '',
        tipo: this.clothingModelForm.value.tipo || '',
        responsavel: this.clothingModelForm.value.responsavel || '',
        bordado: this.clothingModelForm.value.bordado || '',
        estampa: this.clothingModelForm.value.estampa || '',
      };
      this.clothingModelService
        .addClothingModel(clothingModel)
        .subscribe(() => {
          alert('Modelo de roupa criado com sucesso!');
          this.router.navigate(['/clothing-model']);
        });
    } else {
      this.validateFormFields();
    }
  }

  validateFormFields() {
    if (this.clothingModelForm.get('nome')?.invalid) {
      this.nameError = '❌ Nome do modelo é obrigatório.';
    }
    if (this.clothingModelForm.get('tipo')?.invalid) {
      this.typeError = '❌ Tipo do modelo é obrigatório.';
    }
    if (this.clothingModelForm.get('colecao')?.invalid) {
      this.collectionError = '❌ Coleção é obrigatório.';
    }
    if (this.clothingModelForm.get('responsavel')?.invalid) {
      if (this.clothingModelForm.get('responsavel')?.errors?.['required']) {
        this.responsavelError = '❌ Responsável pelo modelo é obrigatório.';
      } else if (
        this.clothingModelForm.get('responsavel')?.errors?.['twoWords']
      ) {
        this.responsavelError =
          '❌ O responsável deve ter pelo menos duas palavras.';
      }
    }
    if (this.clothingModelForm.get('bordado')?.invalid) {
      this.bordadoError = '❌ Informe se o modelo possui bordado.';
    }
    if (this.clothingModelForm.get('estampa')?.invalid) {
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

  cancel() {
    this.router.navigate(['/clothing-model']);
  }
}
