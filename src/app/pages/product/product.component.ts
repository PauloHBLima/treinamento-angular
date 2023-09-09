import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    id!: number;
    nome: string = '';
    preco: number = 0

    constructor(private activateRoute: ActivatedRoute){

    }
    ngOnInit(): void {
        /* this.activateRouter.snapshot.params[id]; */
        this.id = this.activateRoute.snapshot.params['id'];

        this.nome = this.activateRoute.snapshot.queryParams['nome'];
    }
}
