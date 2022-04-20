import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//User Components
import { EditComponent } from './components/user/edit/edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ShowComponent } from './components/user/show/show.component';

//Error Components
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

const routes: Routes = [
  //USER
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user/edit/:id', component:EditComponent},
  {path: 'user/show/:id', component:ShowComponent},
  {path: 'register', component:RegisterComponent},

  //ERROR
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
