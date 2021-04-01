import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  submitted:any;

    registerForm: FormGroup = new FormGroup({
    UserName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    PasswordConfirmation: new FormControl('',[Validators.required,Validators.minLength(8)]),
 
  });

  constructor (private router :Router) { }

  ngOnInit(): void {
  }

  register(){
    this.submitted=true;
    if (this.registerForm.invalid)
    {
     return; 
    }
    
    let users= JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.registerForm.value);
    localStorage.setItem('users',JSON.stringify(users));
    this.registerForm.reset();
    this.router.navigateByUrl('/login')

    
  }

}
