import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public status:  string|undefined;
  public user: User;
  public registerForm: FormGroup;
  public page_title: string;

  constructor(
     private _userService:  UserService,
     private formBuilder:  FormBuilder,
     private router: Router,
  ) { 
    this.registerForm = this.formBuilder.group({
      empresa_id: [''],
      name: ['',Validators.required],
      secondname: [''],
      lastname: ['',Validators.required],
      dni: ['',Validators.required],
      cuil: [''],
      direccion: [''],
      telefono: [''],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      password_confirmation: ['',[Validators.required,Validators.minLength(8)]],
    });
    this.user = new User(1,1,'','','','','','','','','','','','');
    this.page_title = "Registro de Usuario";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.registerForm.value.empresa_id === '' ) {
      this.registerForm.removeControl('empresa_id');
    }
    if (this.registerForm.value.secondname === '' ) {
      this.registerForm.removeControl('secondname');
    }
    if (this.registerForm.value.cuil === '' ) {
      this.registerForm.removeControl('cuil');
    }
    if (this.registerForm.value.direccion === '' ) {
      this.registerForm.removeControl('direccion');
    }
    if (this.registerForm.value.telefono === '' ) {
      this.registerForm.removeControl('telefono');
    }
    this.user = this.registerForm.value;  
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == "success"){
            this.status = response.status;
            this.registerForm.reset();  
        }else{
            this.status = "error";
        }    
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    )
  }

}
