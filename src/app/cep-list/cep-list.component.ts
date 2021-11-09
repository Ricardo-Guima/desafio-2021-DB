import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ceps, ceps } from '../ceps';

import { ViaCepService } from '../via-cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  cep: any | undefined;

  constructor(private route: ActivatedRoute, private viaCep: ViaCepService) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const numeroCepFromRoute = String(routeParams.get('numeroCep'));

    // Find the product that correspond with the id provided in route.
    //this.cep = ceps.find((cep) => cep.cep === numeroCepFromRoute);
    this.viaCep.getCep(numeroCepFromRoute).subscribe((cep) => (this.cep = cep));
  }
}
