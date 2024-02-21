import { Component } from '@angular/core';
import { ProductsParentComponent } from '../products-parent/products-parent.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductsParentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
