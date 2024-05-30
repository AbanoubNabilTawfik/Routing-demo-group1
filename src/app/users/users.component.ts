import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users=[
    {
      id:1,
      name:"Abanoub Nabil"
    },
    {
      id:2,
      name:"Mohamed Safwat"
    },
    {
      id:3,
      name:"Ahmed Baiomy"
    }
  ]

}
