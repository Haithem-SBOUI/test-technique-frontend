import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eb2-form',
  templateUrl: './eb2-form.component.html',
  styleUrls: ['./eb2-form.component.css']
})
export class Eb2FormComponent {
  formulaire!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.formulaire = this.fb.group({
      uai: [''],
      choix: ['']
    });
  }


  submitForm() {
    console.log(this.formulaire.value);
    const uaiValue = this.formulaire.get('uai')?.value;
    const choix = this.formulaire.get('choix')?.value;
    this.router.navigate(['/eb2-table', uaiValue, choix]);
  }

}
