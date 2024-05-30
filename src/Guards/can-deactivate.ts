import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export interface CanComponentDeactivate
{
    canDeactivate :() => Observable<boolean> | Promise<Boolean> | boolean ;
}

@Injectable({
    providedIn:"root"
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{
    canDeactivate(
                   component: CanComponentDeactivate, 
                   currentRoute: ActivatedRouteSnapshot, 
                   currentState: RouterStateSnapshot, 
                   nextState: RouterStateSnapshot): any {

        return component.canDeactivate();

    }
   
    
}

// export const canDeactivateGuard :CanDeactivateFn<CanComponentDeactivate> =(component:CanComponentDeactivate)=>{
//     return component.canDeactivate();
// }