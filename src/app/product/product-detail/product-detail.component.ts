import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product : Product;
  public productId :string;
  constructor(private productService:ProductService,private activatedRounte:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRounte.snapshot.paramMap.get("id");
    this.product = this.productService.getProductbyid(this.productId==="id"?1001:this.productId);
  }

}
