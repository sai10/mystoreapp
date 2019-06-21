import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  onNotify(){
    window.alert("Notification will be sent when available");
  }
  share() {
    window.alert('The product has been shared!');
  }
}


