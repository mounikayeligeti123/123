import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  data: any;
  isError:boolean;
  constructor(private formBuilder: FormBuilder,private router: Router, private authService: AuthService) { }
  loginForm: FormGroup;
  submitted  =  false;

    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
 
  get f() { return this.loginForm.controls; }

    login(){
      console.log(this.loginForm.value);
      console.log(this.loginForm.value);
      this.submitted = true;
      if(this.loginForm.invalid){
        return;
      }
      console.log('===')
      this.authService.login(this.loginForm.value)
      .then(
        response => {
     
        this.data = response;
        this.data = response;
console.log(this.data)
          if (this.data.login_status == 'Success') {
         this.router.navigate(['/dashboard'])

          } else {
            this.isError = true;
          }
        })
      }
     

  
  

}
