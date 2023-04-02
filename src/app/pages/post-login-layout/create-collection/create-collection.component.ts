import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Collections } from 'src/app/class/collections';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css'],
})
export class CreateCollectionComponent implements OnInit {
  nameError = '';
  responsavelError = '';
  estacaoError = '';
  marcaError = '';
  orcamentoError = '';
  anoLancamentoError = '';

  collectionForm: FormGroup;

  constructor(private router: Router, private http: HttpClient) {
    this.collectionForm = new FormGroup({
      colecao: new FormControl('', Validators.required),
      responsavel: new FormControl('', [
        Validators.required,
        this.twoWordsValidator,
      ]),
      estacao: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      orcamento: new FormControl('', Validators.required),
      anoLancamento: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  registerNewCollection() {
    this.nameError = '';
    this.responsavelError = '';
    this.estacaoError = '';
    this.marcaError = '';
    this.orcamentoError = '';
    this.anoLancamentoError = '';

    if (this.collectionForm.valid) {
      const newCollection: Collections = {
        id: 0,
        colecao: this.collectionForm.value.colecao || '',
        responsavel: this.collectionForm.value.responsavel || '',
        estacao: this.collectionForm.value.estacao || '',
        marca: this.collectionForm.value.marca || '',
        orcamento: this.collectionForm.value.orcamento || '',
        anoLancamento: this.collectionForm.value.anoLancamento || '',
      };

      this.saveCollection(newCollection);
    } else {
      this.validateFormFields();
    }
  }

  validateFormFields() {
    if (this.collectionForm.get('colecao')?.invalid) {
      this.nameError = '❌ Nome da coleção é obrigatório.';
    }
    if (this.collectionForm.get('responsavel')?.invalid) {
      if (this.collectionForm.get('responsavel')?.errors?.['required']) {
        this.responsavelError = '❌ Responsável pela coleção é obrigatório.';
      } else if (this.collectionForm.get('responsavel')?.errors?.['twoWords']) {
        this.responsavelError =
          '❌ O responsável deve ter pelo menos duas palavras.';
      }
    }
    if (this.collectionForm.get('estacao')?.invalid) {
      this.estacaoError = '❌ Estação é obrigatório.';
    }
    if (this.collectionForm.get('marca')?.invalid) {
      this.marcaError = '❌ Marca é obrigatório.';
    }
    if (this.collectionForm.get('orcamento')?.invalid) {
      this.orcamentoError = '❌ Orçamento é obrigatório.';
    }
    if (this.collectionForm.get('anoLancamento')?.invalid) {
      this.anoLancamentoError = '❌ Ano de lançamento é obrigatório.';
    }
  }

  twoWordsValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().split(' ').length < 2) {
      return { twoWords: true };
    }
    return null;
  }

  saveCollection(newCollection: Collections) {
    this.http
      .post('http://localhost:3000/colecoes', newCollection)
      .subscribe(() => {
        alert('Coleção criada com sucesso!');
        this.router.navigate(['/collections']);
      });
  }

  cancel() {
    this.router.navigate(['/collections']);
  }
}
