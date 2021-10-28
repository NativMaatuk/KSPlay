import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  serialNumber;
  product;
  discount;
  constructor(private router:Router ,private route:ActivatedRoute,private products:ProductsService,private cart:CartService) { }

  ngOnInit(): void {
    this.serialNumber = this.route.snapshot.params['serialNumber'];
    this.product = this.products.getBySerial(this.serialNumber);
    this.discount = this.products.getDiscounted();
    if (this.product==null)
      this.router.navigate(['/404']);
  }

  addItem(){
    this.cart.addItem(this.serialNumber);
  }

  isDiscounted(serialNumber){
    for (let tmp of this.discount)
      if (tmp.serialNumber==serialNumber)
        return true;
    return false;
  }
}
