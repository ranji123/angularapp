import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product: Product;
  constructor(
    private route: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.product = this.productService.getter();
  }

  public goToList(): void {
    this.route.navigate(['/']);
  }

  public addProduct(): void {
    if (this.product.id === undefined) {
      this.productService.addProduct(this.product).subscribe((data) => {
        this.product = data;
        alert('Add Product Success');
      });
    } else {
      this.productService.updateProduct(this.product).subscribe((data) => {
        this.product = data;
        alert('Update Product Success');
      });
    }
  }

}