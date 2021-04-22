import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  Addcantactt(cantactData: any) {
    let cantacts = JSON.parse(localStorage.getItem('cantact') || '[]');
    cantacts.push(cantactData);
    localStorage.setItem('cantact', JSON.stringify(cantacts))
  }
  // get all cantactt ( used in list cantactts compounents)
  GetAllcantactts() {
    let cantacts = JSON.parse(localStorage.getItem('cantact') || '[]');
    return cantacts;
  }
  // get cantactt by index (used in update-cantactt compounents)
  getcantacttByindex(index: string | number) {
    let cantacts = JSON.parse(localStorage.getItem('cantact') || '[]');
    let cantacttData = cantacts[index];
    return cantacttData ;
  }
  // Update cantactt by index (used in update-cantactt compounents)
  updatecantacttDataByIndex(updateCantactData: any, index: any) {
    let cantacts = JSON.parse(localStorage.getItem('cantact') || '[]');
    cantacts.splice(index, 1,updateCantactData);
    localStorage.setItem('cantact', JSON.stringify(cantacts));
  }
  DeletecantacttById(i: any) {
    let cantacts = JSON.parse(localStorage.getItem('cantact') || '[]');
    cantacts.splice(i, 1);
    localStorage.setItem('cantact', JSON.stringify(cantacts))
  }
}
