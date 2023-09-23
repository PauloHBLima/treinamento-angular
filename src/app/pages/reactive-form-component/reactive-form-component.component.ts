import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cpfValidator } from 'src/app/validators/cpf.validator';

@Component({
    selector: 'app-reactive-form-component',
    templateUrl: './reactive-form-component.component.html',
    styleUrls: ['./reactive-form-component.component.scss']
})
/* formGroup = inject(FormGroup) --- versão 15/16*/
/* constructor(private formGroup: FormGroup) {} */

export class ReactiveFormComponentComponent implements OnInit {
    minLength: number = 9;
    maxLength: number = 100;
    emailRegExp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    cadastroForm: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(this.minLength),
            Validators.maxLength(this.maxLength),
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern(this.emailRegExp)
        ]),
        age: new FormControl(0),
        cpf: new FormControl('',[Validators.required, cpfValidator]),
        gender: new FormControl(''),
        news: new FormControl(false),
    });

    ngOnInit(): void { };

    submit() {
        console.log("submitForm: ", this.cadastroForm.value);
        this.cadastroForm.reset();
    }


}


