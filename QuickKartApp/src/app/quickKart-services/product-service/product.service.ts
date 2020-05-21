import { Injectable } from '@angular/core';
import { IProduct } from '../../quickKart-interfaces/product';
import { ICategory } from '../../quickKart-interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[];
  categories: ICategory[];
  constructor() { }

  getProducts() {
    this.products = [
      { "ProductId": "P101", "ProductName": "Lamborghini Gallardo Spyder", "CategoryId": 1, "Price": 18000000, "QuantityAvailable": 10 },
      { "ProductId": "P102", "ProductName": "Ben Sherman Mens Necktie Silk Tie", "CategoryId": 2, "Price": 1847, "QuantityAvailable": 20 },
      { "ProductId": "P103", "ProductName": "BMW Z4", "CategoryId": 1, "Price": 6890000, "QuantityAvailable": 10 },
      { "ProductId": "P104", "ProductName": "Samsung Galaxy S4", "CategoryId": 3, "Price": 38800, "QuantityAvailable": 100 }
    ]
    return this.products;
  }

  getProductCategories() {
    this.categories = [
      { "CategoryId": 1, "CategoryName": "Motors" },
      { "CategoryId": 2, "CategoryName": "Fashion" },
      { "CategoryId": 3, "CategoryName": "Electronics" }
    ]
    return this.categories;
  }
}
