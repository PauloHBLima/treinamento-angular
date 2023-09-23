import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

type Estados = { uf: string };
type Bebidas = { nome: string; preco: string };

@Component({
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
    public estadosDoSul: Array<Estados> = [];
    public bebidas: Bebidas[] = [];

    constructor() {
        this.estadosDoSul = [{ uf: "pr" }, { uf: "sc" }, { uf: "rs" }];
    }

    ngOnInit(): void {
        this.bebidas = [
            { nome: "Coca Cola Lata", preco: "R$ 4,50" },
            { nome: "coca cola 1l", preco: "R$ 9,00" },
            { nome: "CoCa COLA 2L", preco: "R$ 14,00" },
        ];
    }

    submitForm(form: NgForm) {
        if (form.valid) {

            console.log('Form value ', form);
        } else {
            alert('sai pra lá')
            form.reset();
        }
    }
}
