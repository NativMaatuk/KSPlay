import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  discount;

  constructor(private cart:CartService,private router:Router,private products:ProductsService) { }

  ngOnInit(): void {
    this.items=this.cart.getCart();
    this.discount=this.products.getDiscounted();
  }
  getTotal(){
    return this.cart.getTotal();
  }

  emptyCart(){
    if (this.cart.isEmpty()) return;
    this.cart.emptyCart();
    alert("Items bought");
    this.router.navigate(['/home']);
  }

  addItem(serialNumber){
    this.cart.addItem(serialNumber);
  }
  removeItem(serialNumber){
    this.cart.removeItem(serialNumber);
  }

  getTotalItems(){
    let res=0;
    for (let tmp of this.items)
      res+=tmp[1];
    return res;
  }

  isDiscounted(serialNumber){
    for (let tmp of this.discount)
      if (tmp.serialNumber==serialNumber)
        return true;
    return false;
  }
}
