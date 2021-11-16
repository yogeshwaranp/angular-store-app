import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Product,productsSample} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetail: Product | undefined;

  constructor(private route:ActivatedRoute ) { 
    
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    this.productDetail = productsSample.find(product => product.id === id);
  }

}