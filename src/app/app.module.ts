import { RevistaServiceService } from './services/revista-service.service';
import{ FormsModule} from '@angular/forms';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocemosComponent } from './conocemos/conocemos.component';
import { NAnterioresComponent } from './n-anteriores/n-anteriores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LineamientosComponent } from './lineamientos/lineamientos.component';
import { AdminModule } from './admin/admin.module'


import { LoginComponent } from './admin/login/login.component';


import{AuthService} from './auth/auth.service.service';
import { AdministradorComponent } from './administrador/administrador.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ActualizaRevistaComponent } from './actualiza-revista/actualiza-revista.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NewPostComponent } from './upload-file/new-post/new-post.component';
import { ModalComponent } from './shared/modal/modal.component';
import { EditPostComponent } from './upload-file/edit-post/edit-post.component';
import { PostComponent } from './upload-file/post/post.component';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ConocemosComponent,
    NAnterioresComponent,
    EditorialComponent,
    ContactanosComponent,
    LineamientosComponent,
    AdministradorComponent,
    LoginComponent,
    UploadFileComponent,
    ActualizaRevistaComponent,
    NewPostComponent,
    ModalComponent,
    EditPostComponent,
    PostComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[ModalComponent],
  providers: [
    {provide:StorageBucket,useValue: 'gs://revistatecnocultura-ef63f.appspot.com'},
    RevistaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
