import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { IServer } from '../../models/server.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../../Guards/can-deactivate';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.scss'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server?: IServer;
  serverName: any = "";
  serverStatus: any = "";
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe((query: Params) => {
      console.log("params", query);
      this.allowEdit = query['allowEdit'] == "1" ? true : false;
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log("fragment", fragment)
    });



    this.server = this.serversService.getServer(1);
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<Boolean> {
    //your business logic 
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server?.name || this.serverStatus !== this.server?.status) && !this.changesSaved) {
      return confirm("Are you sure you want to discard this changes ?")
    }
    else {
      return false;
    }
  }


  onUpdateServer() {
    this.serversService.updateServer(
      this.server?.id,
      { name: this.serverName, status: this.serverStatus }
    );

    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }



}
