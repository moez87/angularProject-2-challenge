import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cantact',
  templateUrl: './add-cantact.component.html',
  styleUrls: ['./add-cantact.component.sass']
})
export class AddCantactComponent implements OnInit {
  submitted = false;
    addCantactForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    cantactName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cantactPhoneNumber: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }
  saveCantact(){

    this.submitted = true;
    if (this.addCantactForm.invalid) {
      return;
    }
  }

}
