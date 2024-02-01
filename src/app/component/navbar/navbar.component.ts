import { Component, OnInit } from '@angular/core';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductsService } from '../../services/products.service';
// router link
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImgStyleDirective, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public imgLogo =
    'https://w7.pngwing.com/pngs/734/817/png-transparent-sanchey-informatica-computing-data-computer-others.png';

  constructor(public prdservice: ProductsService) {}

  get lastproductClicked(): string {
    let lastclickedId = this.prdservice.getLastId();
    // console.log(lastclickedId);
    return lastclickedId ? `/product/${lastclickedId}` : '/product/1';
  }
}
