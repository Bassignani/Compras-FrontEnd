import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { EditComponent } from './components/user/edit/edit.component';
import { ListComponent } from './components/user/list/list.component';
import { ShowComponent } from './components/user/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EditComponent,
    ListComponent,
    ShowComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //USER
      {path: 'register', component:RegisterComponent},
      {path: 'login', component:LoginComponent},
      {path: 'user/edit', component:EditComponent},
      {path: 'user/show', component:ShowComponent},
      {path: 'register', component:RegisterComponent},

      //ERROR
      {path: '**', component:PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
