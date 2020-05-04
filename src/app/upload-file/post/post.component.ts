import { RevistaI } from './../../models/revista.interface';
import { Observable } from 'rxjs';
import { RevistaServiceService } from './../../services/revista-service.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
  public revista$: Observable<RevistaI>;
  constructor(private route:ActivatedRoute, private postSvc:RevistaServiceService,private  authService:  AuthService) { }

  ngOnInit() {
    const idRevista= this.route.snapshot.params.id;
    this.revista$=this.postSvc.getOnePost(idRevista);
  }

}
