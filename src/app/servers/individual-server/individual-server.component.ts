import { Component, OnInit } from '@angular/core';
import { IServer } from '../../models/server.model';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-individual-server',
  templateUrl: './individual-server.component.html',
  styleUrl: './individual-server.component.scss'
})
export class IndividualServerComponent implements OnInit {
  
  server:IServer|undefined;

  constructor(
        private serversService:ServersService,
        private activatedRoute:ActivatedRoute,
        private router:Router
      )
  {

  }

  ngOnInit(): void {
   
    // let id:number= this.activatedRoute.snapshot.params['id'];
    // this.server=this.serversService.getServer(id);

    // this.activatedRoute.params.subscribe((params:Params)=>{
    //   this.server=this.serversService.getServer(+params['id']);
    // })

    this.activatedRoute.data.subscribe((data:Data)=>{
      this.server=data["server"]
    })

  

  }

  onEdit()
  {
    // this.router.navigate(['edit',{id:1}])
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute,queryParamsHandling:'preserve'})
  }
 
}
