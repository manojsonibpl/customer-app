import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';
import { CustomcitizenPipe } from 'src/app/customer/pipes/customcitizen.pipe';
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

public customers : Array<Customer>;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(result=>{
      console.log(JSON.stringify(result));
      this.customers = result;
      this.customerService.customers = this.customers;
    });
  }
}
