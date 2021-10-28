import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
// item.category.indexOf(show)!=-1
  
  constructor(private products:ProductsService,private cart:CartService) { }
  @Input() show:string;
  arr;
  discount;
  ngOnInit(): void {
    this.arr = this.products.getProducts();
    this.discount = this.products.getDiscounted();
  }
  setShow(show){
    this.show=show;
  }

  addItem(serialNumber){
    this.cart.addItem(serialNumber);
  }

  isDiscounted(serialNumber){
    for (let tmp of this.discount)
      if (tmp.serialNumber==serialNumber)
        return true;
    return false;
  }

}
