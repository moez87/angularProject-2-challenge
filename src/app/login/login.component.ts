import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    Password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  submitted : boolean = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
