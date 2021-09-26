import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchValidator } from '../tools/match-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {  

  @Output()
  mainForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: [''],
    codePostal: [''],
    ville: [''],
    pays: [''],
    telephone: [''],
    email: ['', Validators.email],
    civilite: [''],
    identifiant: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
    },{
    validator: MatchValidator('password', 'passwordConfirm')
  });

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    console.warn(this.mainForm.value);
  }

  ngOnInit(): void {

  }

}
