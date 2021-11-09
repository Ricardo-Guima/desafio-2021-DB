import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ceps } from '../ceps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cep: Ceps | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getCep(cep: string) {
    this.router.navigate(['ceps', cep]);
  }
}
