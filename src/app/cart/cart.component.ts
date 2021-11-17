import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartservice.getItems();

  checkOutform = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit() {}

  onSubmit() {
    this.cartservice.clearCart();
    console.warn('your data has been saved', this.checkOutform.value);
    this.checkOutform.reset();
  }
}
