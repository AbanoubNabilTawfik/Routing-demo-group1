import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { IndividualServerComponent } from './servers/individual-server/individual-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authChildGuard } from '../Guards/auth-guard.service';
import { CanDeactivateGuard } from '../Guards/can-deactivate';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from '../Guards/server.resolver.service';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'user/:id/:name',component:UserComponent},
  {  
    path:'servers',
    component:ServersComponent,
    canActivateChild:[authChildGuard],
    children:[
      { 
        path:':id/edit',
        component:EditServerComponent,
        canDeactivate:[CanDeactivateGuard]
      },
      {
         path:':id',
         component:IndividualServerComponent,
         resolve :{server:ServerResolver}
        }
    ]
  
  },
  {
      path:'not-found',
      component:ErrorPageComponent,
      data:{message:"Page Not Found from route"}
  },
  {path:'**' ,redirectTo:'/not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
