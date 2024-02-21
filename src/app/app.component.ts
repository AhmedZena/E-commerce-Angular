import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { FooterComponent } from './component/footer/footer.component';
// import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsParentComponent } from './component/products-parent/products-parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SideMenuComponent,
    FooterComponent,
    ProductsParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular';
}
