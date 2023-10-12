import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
    constructor(private router: Router, private productsService: ProductService) { }

    products: Product[] = [];

    ngOnInit(): void {
        this.getAllProducts();
    }

    redirectPageProduct(id: number) {
        this.router.navigate(['products', id]);
        /* this.router.navigateByUrl(`/products/${id}`); */
    }

    getAllProducts() {
        this.productsService.getProducts().subscribe({
            next: (res) => {
                console.log(res);
                this.products = res;
            },
            error: (err) => {
                console.error('[ERROR] getAllProducts', err)
                alert('erro na requisição')
            },
            complete: () => {
                console.log("[COMPLETE] getAllProducts")
            }
        })
    }

}
