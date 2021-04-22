import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-cantact',
  templateUrl: './update-cantact.component.html',
  styleUrls: ['./update-cantact.component.sass']
})
export class UpdateCantactComponent implements OnInit {
  submitted = false;
    updateCantactForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    cantactName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cantactPhoneNumber: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }
  updateCantact(){}
}
