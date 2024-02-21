import { Component, OnInit, Type, inject } from '@angular/core';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductsService } from '../../services/products.service';
// router link
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Logout</h4>
      <button
        type="button"
        class="btn-close"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <p>
        <strong
          >Are you sure you want to logout
          <span class="text-primary"
            >"if you logout you will be redirected to login page"</span
          >
          profile?</strong
        >
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="modal.dismiss('cancel click')"
      >
        Cancel
      </button>
      <button type="button" class="btn btn-danger" (click)="logout()">
        Ok
      </button>
    </div>
  `,
})
export class NgbdModalConfirm {
  modal = inject(NgbActiveModal);
  private userAuthService = inject(UserAuthService);
  private router = inject(Router);

  logout() {
    this.modal.close();
    this.userAuthService.logout();
    this.router.navigate(['login']);
  }
}

const Modals: { [name: string]: Type<any> } = {
  focusFirst: NgbdModalConfirm,
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImgStyleDirective, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private modalService = inject(NgbModal);
  isUserLoggedIn: boolean = false;
  public imgLogo =
    'https://w7.pngwing.com/pngs/734/817/png-transparent-sanchey-informatica-computing-data-computer-others.png';

  constructor(
    private prdservice: ProductsService,
    private userAuthService: UserAuthService
  ) {
    this.userAuthService.user.subscribe((res) => {
      this.isUserLoggedIn = res;
    });
  }

  get lastproductClicked(): string {
    let lastclickedId = this.prdservice.getLastId();
    return lastclickedId ? `/product/${lastclickedId}` : '/product/1';
  }

  open(name: string) {
    this.modalService.open(Modals[name]);
  }
}
