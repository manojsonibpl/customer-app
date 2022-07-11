import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomcitizenPipe } from './pipes/customcitizen.pipe';
import { HighlightDirectiveDirective } from './directive/highlight-directive.directive';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CustomerDetailComponent,
    CustomerSearchComponent,
    CustomcitizenPipe,
    HighlightDirectiveDirective,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerDetailComponent,
    CustomerSearchComponent,
    AddressComponent
  ]
})
export class CustomerModule { }
