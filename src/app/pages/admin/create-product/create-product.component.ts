import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/interfaces/product.interface';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
    private formBuilder = inject(FormBuilder);
    private productService = inject(ProductService);
    private activatedRoute = inject(ActivatedRoute);

    productId: number = 0;

    productForm = this.formBuilder.group({
        id: [0],
        name: [""],
        price: [""],
        image: [""],
        description: [""],
    });

    /* submitForm() {
        this.productService.create(this.productForm.value as Product).subscribe({
            next: (res) => {
                this.productForm.reset();
            },
            error: (err) => console.error("[Error]: submitForm: ", err),
        })
    } */
    submitForm() {
        if (this.productId) {
            this.editProduct();
        } else {
            this.createProduct();
        }
    }

    getProduct() {
        const id = this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.productService.getOne(id).subscribe({
                next: (res) => {
                    this.productForm.controls['name'].setValue(res.name);
                    this.productForm.get('price')?.setValue(res.price);
                    this.productForm.get('image')?.setValue(res.image);
                    this.productForm.get('description')?.setValue(res.description);
                    this.productForm.get('id')?.setValue(res.id);
                    this.productId = res.id;
                },
            })
        }
    }

    createProduct() {
        this.productService.create(this.productForm.value as Product).subscribe({
            next: (res) => {
                this.productForm.reset();
            },
            error: (err) => console.error("[Error]: submitForm: ", err),
        })
    }

    editProduct() {
        this.productService.edit(this.productForm.value as Product).subscribe({
            next: (res) => {
                console.log(res);
                this.productForm.reset();
            }
        })
    }

    deleteProduct(){
        this.productService.destroy(this.productId).subscribe({
            
        });
    }
}
