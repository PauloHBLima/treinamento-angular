import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.scss']
})
/* formGroup = inject(FormGroup) --- versão 15/16*/
/* constructor(private formGroup: FormGroup) {} */

export class ReactiveFormComponentComponent implements OnInit {
    cadastroForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        age: new FormControl(0),
        gender: new FormControl(''),
        news: new FormControl(false),
    });

    ngOnInit(): void {};
    }

