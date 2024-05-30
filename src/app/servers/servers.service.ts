import { Injectable } from '@angular/core';
import { IServer } from '../models/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers:IServer[] =[
    {
      id:1,
      name:"Production Server",
      status :"online"
    },
    {
      id:2,
      name:"Test Server",
      status :"offline"
    },
    {
      id:3,
      name:"Development Server",
      status :"offline"
    }
  ]

  constructor() { }

  getServers()
  {
    return this.servers;
  }

  getServer(id:number) :IServer
  {
    const server:any = this.servers.find(
      (s)=>{
        return s.id ==id;
      }
    )

    return server;
  }

  updateServer(id:(number|undefined) , serverInfo:{name:string , status:string})
  {
    const server = this.servers.find(
      (s)=>{
        return s.id ==id;
      }
    )

    if(server)
      {
        server.name=serverInfo.name;
        server.status=serverInfo.status;
      }
  }
}
