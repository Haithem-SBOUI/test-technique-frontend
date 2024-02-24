import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eb3-form',
  templateUrl: './eb3-form.component.html',
  styleUrls: ['./eb3-form.component.css']
})
export class Eb3FormComponent{
  formulaire!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.formulaire = this.fb.group({
      uai: [''],
      year: ['']
    });
  }

  submitForm() {
    // Handle form submission logic here
    console.log(this.formulaire.value);
    const uaiValue = this.formulaire.get('uai')?.value;
    const year = this.formulaire.get('year')?.value;
    this.router.navigate(['/eb3-chart', uaiValue, year]);
  }

}
