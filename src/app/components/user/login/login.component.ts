import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { IdentityService } from 'src/app/services/identity.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public status:  string|undefined;
  public error: string|undefined;
  public user: User;
  public loginForm: FormGroup;
  public page_title: string;
  public token: any;

  constructor(
    private _userService: UserService,
    private _identityService: IdentityService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.page_title = "Login";
    this.user =  new User(1,1,'','','','','','','','','','','','');
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user = this.loginForm.value;
    this._userService.login(this.user).subscribe(
      response => {
        if (response.status == "success") {
          console.log(response);
          this.status = response.status;
          this._identityService.setToken(response.access_token);
          this._identityService.setIdentity(response.user);
          this.loginForm.reset();
          this.router.navigate([ '' ]);
        }else{
          this.status = response.status;
          console.log(response);
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    )
  }

}
