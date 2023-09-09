import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/interfaces/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    constructor(private router: Router) { }
    products: Product[] = [
        { id: 1, title: 'Angular', price: '10.10' },
        { id: 2, title: 'Javascript', price: '20.20' },
        { id: 3, title: 'Typescript', price: '30.30' },
    ];

    redirectPageProduct(id: number) {
        this.router.navigate(['products', id]);
        /* this.router.navigateByUrl(`/products/${id}`); */
    }
}
