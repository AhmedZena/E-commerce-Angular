import { Routes } from '@angular/router';
import { ProductsParentComponent } from './component/products-parent/products-parent.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { MainComponent } from './component/main/main.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { GroupRoutesComponent } from './component/group-routes/group-routes.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { UserTemplateFormComponent } from './component/user/user-template-form/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './component/user/user-reactive-form/user-reactive-form.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductsDashboardComponent } from './component/admin/products-dashboard/products-dashboard.component';
import { LoginComponent } from './component/auth/login/login.component';
import { logedInGuard } from './Gaurds/loged-in.guard';
export const routes: Routes = [
  {
    path: '',
    component: GroupRoutesComponent,
    children: [
      { path: 'aboutus', component: AboutUsComponent, title: 'About Us' },
      {
        path: 'products',
        component: ProductsParentComponent,
        title: 'Products',
      },
      {
        path: 'product/:prdId',
        component: ProductDetailsComponent,
        title: 'Product Details',
        canActivate: [logedInGuard],
      },
      { path: 'home', component: MainComponent, title: 'Home' },
      { path: 'contactus', component: ContactUsComponent, title: 'Contact Us' },
      {
        path: 'userTemplateForm',
        component: UserTemplateFormComponent,
        title: 'User Template Form',
      },
      {
        path: 'userReactiveForm',
        component: UserReactiveFormComponent,
        title: 'User Reactive Form',
      },
      {
        path: 'admin/insertproduct',
        component: AddProductComponent,
        title: 'Add Product',
      },
      {
        path: 'admin/products',
        component: ProductsDashboardComponent,
        title: 'Products Dashboard',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  // { path: 'aboutus', component: AboutUsComponent, title: 'About Us' },
  // { path: 'products', component: ProductsParentComponent, title: 'Products' },
  // { path: 'products/:id', component: ProductsListComponent, title: 'Product' },
  // { path: '', component: MainComponent, title: 'Home' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
