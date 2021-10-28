import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users=[
    {name:"admin",password:"admin"},
    {name:"user",password:"user"}
  ];
  constructor() { }

  searchUser(email,password){
    for (let tmp of this.users)
      if (tmp.name==email && tmp.name==password){
        return tmp;
      }
    return null;
  }
}
