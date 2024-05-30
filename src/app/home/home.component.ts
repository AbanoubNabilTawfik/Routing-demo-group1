import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private router:Router,private authService:AuthService)
  {

  }

  onLoadServers(id:number)
  {
    //navigate to servers page
    this.router.navigate(
                      ['/servers',id,'edit'],
                      {
                        queryParams:{allowEdit:'1'},
                        fragment:'loading'
                      }
                    )
  }

  login()
  {
   this.authService.login();
  }

  logout()
  {
   this.authService.logout();
  }
}
