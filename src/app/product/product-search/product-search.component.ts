import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
//import { CustomcitizenPipe } from 'src/app/customer/pipes/customcitizen.pipe';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  public products : Array<Product>;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getProducts();
  }

}
