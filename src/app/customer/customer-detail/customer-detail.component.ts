import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { City } from 'src/app/model/city';
import { MustMatch } from 'src/app/helper/must-match.validators';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public customer: Customer;
  public custmerId: string = "1001";
  countryList: Country[] = [
    new Country('IND', 'India'),
    new Country('USA', 'USA'),
    new Country('OTH', 'England')
  ];

  cityList: City[] = [
    new City('JBP', 'Jabalpur'),
    new City('BPL', 'Bhopal'),
    new City('IND', 'Indore'),
    new City('NDA', 'Noida')
  ];

  stateList: State[] = [
    new State('MP', 'Madhya Pradesh'),
    new State('UP', 'Uttar Pradesh'),
    new State('OTH', 'Other')
  ];

  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private activatedRounte: ActivatedRoute) {
    //   this.customerForm = new FormGroup({
    //     id: new FormControl('',Validators.required),
    //     firstname: new FormControl('',Validators.required),
    //     lastname: new FormControl('',Validators.required),
    //     email: new FormControl(''),
    //     password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    //     confirmpassword: new FormControl('',Validators.required),
    //     address: new FormGroup({
    //       houseno: new FormControl('',Validators.required),
    //       street: new FormControl(''),
    //       city: new FormControl('',Validators.required),
    //       state: new FormControl(''),
    //       country: new FormControl(''),
    //       pincode: new FormControl(''),
    //     })
    //   }
    // //   , {
    // //     validator: MustMatch('password', 'confirmPassword')
    // // }
    // );
    // }

    this.customerForm = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmpassword: new FormControl('',Validators.required),
      address: new FormGroup({
        houseno: new FormControl('',Validators.required),
        street: new FormControl(''),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        country: new FormControl('',Validators.required),
        pincode: new FormControl('',Validators.required),
      })
    }
    );
  }



  ngOnInit(): void {
    var id = this.activatedRounte.snapshot.paramMap.get("id");
    if (id) {
      this.custmerId = id;
    }
    this.customer = this.customerService.getCustomerbyid(this.custmerId === "id" ? 1001 : this.custmerId);

    this.customerForm.patchValue(this.customer)
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      return;
    }
    alert(JSON.stringify(this.customerForm.value));
    console.log(this.customerForm.value);
  }
}
