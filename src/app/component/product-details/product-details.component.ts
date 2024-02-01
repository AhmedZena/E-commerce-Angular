import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../../Model/IProdcut';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsWithApiService } from '../../services/products-api.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    public prdserviceApi: ProductsWithApiService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  // ngOnInit(): IProduct {
  //   return this.prdservice.getProductByid(+this.router.url.split('/')[2]);
  // }

  // thisProduct: IProduct = this.prdservice.getProductByid(
  //   +this.router.url.split('/')[2]
  // );

  // ngOnInit(): void {
  //   this.thisProduct = this.prdservice.getProductByid(
  //     +this.router.url.split('/')[2]
  //   );
  //   console.log(this.thisProduct);
  // }

  // thisProduct: IProduct = this.prdservice.getProductByid(
  //   +this.activatedRoute.snapshot.params['prdid']
  // );

  thisProduct!: IProduct;
  ngOnInit(): void {
    // snapshot
    // this.thisProduct = this.prdservice.getProductByid(
    //   +this.activatedRoute.snapshot.params['prdid']
    // );

    // this.prdserviceApi
    //   .getPrdByID(+this.activatedRoute.snapshot.params['prdid'])
    //   .subscribe((data) => {
    //     this.thisProduct = data;
    //   });

    // subscribe
    // this.activatedRoute.params.subscribe((params) => {
    //   this.thisProduct = this.prdservice.getProductByid(+params['prdid']);
    // });

    this.activatedRoute.params.subscribe((params) => {
      let id = +params['prdId'];
      this.prdserviceApi.getPrdByID(id).subscribe((data) => {
        console.log(data);
        this.thisProduct = data;
      });
    });
  }

  prevProduct() {
    // get prev product

    this.prdserviceApi.getAllPrdsIds().subscribe((data) => {
      let prevId =
        data[data.indexOf(this.activatedRoute.snapshot.params['prdId']) - 1];
      console.log(prevId);
      if (prevId) this.router.navigate([`/product/${prevId}`]);
    });
  }

  nextProduct() {
    // get next product
    this.prdserviceApi.getAllPrdsIds().subscribe((data) => {
      // let nextId =
      //   data[data.indexOf(this.activatedRoute.snapshot.params['prdId']) + 1];
      // this.router.navigate([`/product/${nextId}`]);
      let nextId =
        data[data.indexOf(this.activatedRoute.snapshot.params['prdId']) + 1];

      if (nextId) return this.router.navigate([`/product/${nextId}`]);
      return this.router.navigate([`/product/${data[0]}`]);
    });
  }

  disablePrev() {
    // this.prdserviceApi.getAllPrds();
  }

  disableNext(): boolean {
    // return true or   false
    return false;
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
