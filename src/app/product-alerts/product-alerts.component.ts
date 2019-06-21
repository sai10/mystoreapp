import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({ // Component Decorator : indicates following class is a Component. It indicates the metadata, template url and styling of the component.
  selector: 'app-product-alerts', // Selector is used to identify the component when rendered as a HTML element by the page.
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// includes an exported class which handles the functionality of the component.
export class ProductAlertsComponent{

  @Input() product; // A property named product is defined, which will be passed in from the components parent
  // The new product alert component takes a product as input from the product list. With that input, it shows or hides the "Notify Me" button, based on the price of the product. The Phone XL price is over $700, so the "Notify Me" button appears on that product.

  @Output() notify = new EventEmitter();
}