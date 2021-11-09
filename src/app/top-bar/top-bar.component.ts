import { Component, Injectable, Input, Output } from '@angular/core';
import { Ceps } from '../ceps';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class TopBarComponent {
  @Input() ceps: Ceps[] | undefined;

  public findAll() {
    return this.ceps;
  }
}
