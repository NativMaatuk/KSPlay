import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string;
  discounted;
  newProducts;

  constructor(private route:ActivatedRoute,private products:ProductsService,private cart:CartService) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['name'];
    this.discounted=this.products.getDiscounted();
    this.newProducts=this.products.getNew();
  }

  addItem(serialNumber){
    this.cart.addItem(serialNumber);
  }

}
