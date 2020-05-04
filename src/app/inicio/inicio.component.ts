import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { RevistaI } from './../models/revista.interface';
import { RevistaServiceService } from './../services/revista-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public revistas$:Observable<RevistaI[]>;

  constructor(private postSvc: RevistaServiceService) { }

  ngOnInit() {
     this.revistas$=this.postSvc.getAllPosts();
  }

}
