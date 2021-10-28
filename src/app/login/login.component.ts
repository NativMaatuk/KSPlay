import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private users:UsersService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.emptyCart();
  }

  onSubmit(form){
    if (this.users.searchUser(form.value.name,form.value.password))
      this.router.navigate(['home',form.value.name]);
    else
      alert("Invalid Username or Password");
  }

}