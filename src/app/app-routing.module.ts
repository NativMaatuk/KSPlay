import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"home/:name",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:serialNumber",component:ProductItemComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
