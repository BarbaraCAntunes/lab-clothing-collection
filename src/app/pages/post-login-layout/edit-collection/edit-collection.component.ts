import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionServiceService } from '../../../services/collection-service.service';
import { Collections } from 'src/app/class/collections';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.css'],
})
export class EditCollectionComponent implements OnInit {
  collectionId!: number;
  collection!: Collections;
  collectionForm!: FormGroup;
  nameError = '';
  responsavelError = '';
  estacaoError = '';
  marcaError = '';
  orcamentoError = '';
  anoLancamentoError = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private collectionService: CollectionServiceService
  ) {
    this.collection = {
      id: 0,
      colecao: '',
      responsavel: '',
      estacao: '',
      marca: '',
      orcamento: '',
      anoLancamento: '',
    };

    this.collectionForm = this.fb.group({
      colecao: ['', Validators.required],
      responsavel: ['', [Validators.required, this.responsavelValidator]],
      estacao: ['', Validators.required],
      marca: ['', Validators.required],
      orcamento: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      anoLancamento: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.collectionId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loadCollection();
  }

  loadCollection() {
    this.collectionService
      .getCollectionById(this.collectionId)
      .subscribe((data) => {
        this.collection = data;
        this.collectionForm.patchValue(this.collection);
      });
  }

  editCollection() {
    if (this.collectionForm.valid) {
      this.collection = { ...this.collection, ...this.collectionForm.value };
      this.collectionService.updateCollection(this.collection).subscribe(() => {
        alert('Coleção atualizada com sucesso!');
        this.router.navigate(['/collections']);
      });
    } else {
      this.validateForm();
    }
  }

  validateForm(): void {
    this.nameError = this.collectionForm.get('colecao')?.hasError('required')
      ? 'Nome da coleção é obrigatório.'
      : '';
    this.responsavelError = this.collectionForm
      .get('responsavel')
      ?.hasError('required')
      ? 'Responsável pela coleção é obrigatório.'
      : '';
    this.estacaoError = this.collectionForm.get('estacao')?.hasError('required')
      ? 'Estação é obrigatório.'
      : '';
    this.marcaError = this.collectionForm.get('marca')?.hasError('required')
      ? 'Marca é obrigatório.'
      : '';
    this.orcamentoError = this.collectionForm
      .get('orcamento')
      ?.hasError('required')
      ? 'Orçamento é obrigatório.'
      : '';
    this.anoLancamentoError = this.collectionForm
      .get('anoLancamento')
      ?.hasError('required')
      ? 'Ano de lançamento é obrigatório.'
      : '';
  }

  responsavelValidator(control: any): { [key: string]: boolean } | null {
    if (!control.value || !control.value.trim()) {
      return null;
    }
    const responsavelParts = control.value.trim().split(' ');
    if (responsavelParts.length < 2) {
      return { nomeInvalido: true };
    }
    return null;
  }
  deleteCollection() {
    if (confirm('Tem certeza de que deseja excluir esta coleção?')) {
      this.collectionService
        .deleteCollection(this.collectionId)
        .subscribe(() => {
          alert('Coleção excluída com sucesso!');
          this.router.navigate(['/collections']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/collections']);
  }
}
