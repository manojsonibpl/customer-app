import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { BackgrounddirectiveDirective } from './directive/backgrounddirective.directive';
import { CustomdatePipe } from './pipes/customdate.pipe';

@NgModule({
  declarations: [
    ProductDetailComponent, 
    ProductSearchComponent, 
    BackgrounddirectiveDirective, 
    CustomdatePipe
],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductDetailComponent,
    ProductSearchComponent
  ]
})
export class ProductModule { }
