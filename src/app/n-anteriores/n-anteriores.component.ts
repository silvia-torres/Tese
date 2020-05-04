import { Observable, observable } from 'rxjs';
import { RevistaI } from './../models/revista.interface';
import { RevistaServiceService } from './../services/revista-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-anteriores',
  templateUrl: './n-anteriores.component.html',
  styleUrls: ['./n-anteriores.component.css']
})
export class NAnterioresComponent implements OnInit {
 
public revistas$:Observable<RevistaI[]>;
  constructor(private postSvc: RevistaServiceService) { }

  ngOnInit() {
 //   this.postSvc.getAllPosts().subscribe(res=> console.log('Revista',res));
    this.revistas$=this.postSvc.getAllPosts();
  }


  



}
