import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];    // [product,amount]
  private total:number = 0;

  constructor(private products:ProductsService) { }

  getCart(){
    return this.cart;
  }
  getTotal(){
    return this.total;
  }

  emptyCart(){
    this.cart=[];
    this.total=0;
  }

  addItem(serialNumber){
    let item = this.searchCart(serialNumber);
    if (item==null)
      this.cart.push([this.products.getBySerial(serialNumber),1]);
    else
      item[1]++;
    this.total+=this.cart[this.cart.length-1][0].price;
  }

  removeItem(serialNumber){
    let item = this.searchCart(serialNumber);
    this.total-=this.cart[this.cart.length-1][0].price;
    if (item==null)
      return;
    else if (item[1]>1)
      item[1]--;
    else
        this.cart.splice(this.getIndex(item),1);
  }

  isEmpty(){
    return this.total==0;
  }

  searchCart(serialNumber){
    for (let tmp of this.cart)
      if (tmp[0].serialNumber==serialNumber)
        return tmp;
    return null;
  }

  private getIndex(tmp){
    for (let ind=0;ind<this.cart.length;ind++)
      if (this.cart[ind]==tmp)
        return ind;
    return -1;
  }
}
