
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../quickKart-interfaces/product';
import { ICategory } from '../quickKart-interfaces/category';
import { ProductService } from '../quickKart-services/product-service/product.service';



@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products: IProduct[];
  categories: ICategory[];
  filteredProducts: IProduct[];
  showMsgDiv: boolean = false;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();

    this.categories = this._productService.getProductCategories();

    if (this.products == null) {
      this.showMsgDiv = true;
    }

    this.filteredProducts = this.products;
  }
  searchProductByCategory(categoryId: string) {
    this.filteredProducts = this.products;

    if (categoryId == "0") {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.filteredProducts.filter(prod => prod.CategoryId.toString() == categoryId);
    }
  }

}
