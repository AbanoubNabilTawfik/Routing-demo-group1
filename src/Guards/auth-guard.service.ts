import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../app/services/auth.service";
import { Injectable, inject } from "@angular/core";


// export class AuthGuard implements CanActivate ,CanActivateChild
// {
//     constructor(private authService:AuthService)
//     {

//     }
   
//     canActivate(
//            route: ActivatedRouteSnapshot, 
//            state: RouterStateSnapshot): boolean | Observable<boolean> |Promise<boolean>{
//         return this.authService.isAuthenticated();
//     }

//     canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> |Promise<boolean> {
//         return this.canActivate(childRoute,state);
//     }



// }
@Injectable({
    providedIn:"root"
})
class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }

    canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
       return this.canActivate();
    }
}

export const authGuardGuard :CanActivateFn =(route,state)=>{
    return inject(AuthGuard).canActivate();
}

export const authChildGuard :CanActivateChildFn =(route,state)=>{
    return inject(AuthGuard).canActivateChild();
}