import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { IServer } from "../app/models/server.model";
import { ServersService } from "../app/servers/servers.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class ServerResolver implements Resolve<IServer>
{
    constructor(private serverService:ServersService)
    {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServer> | Promise<IServer> |IServer{
        
        return this.serverService.getServer(+route.params["id"]);
    }

    
}


// export const PostResolver :ResolveFn<IServer> = (
//     route: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot,
//     serverService :ServersService =inject(ServersService)
// ) :Observable<IServer> | Promise<IServer> |IServer =>{

//     return serverService.getServer(+route.params["id"]);
// }