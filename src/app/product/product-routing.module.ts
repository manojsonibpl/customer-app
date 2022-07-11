import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';

// const routes: Routes = [
//   {
//       path: '',
//       children: [
//           { path: 'productdetail', component: ProductDetailComponent },
//           { path: 'productsearch', component: ProductSearchComponent }
//       ]
//   }
// ];


const routes: Routes = [

  { path: 'productsearch', component: ProductSearchComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
