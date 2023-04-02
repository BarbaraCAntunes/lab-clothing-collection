import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrcamentoServiceService } from 'src/app/services/orcamento-service.service';

@Component({
  selector: 'app-content-dashbord',
  templateUrl: './content-dashbord.component.html',
  styleUrls: ['./content-dashbord.component.css'],
})
export class ContentDashbordComponent implements OnInit {
  orcamentos: any[];

  constructor(
    private orcamentosService: OrcamentoServiceService,
    private router: Router
  ) {
    this.orcamentos = [];
  }

  ngOnInit() {
    this.orcamentosService.getOrcamentos().subscribe((data) => {
      this.orcamentos = data
        .sort((a, b) => b.orcamento - a.orcamento)
        .slice(0, 5);
    });
  }
}
