import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Output() searchedProduct = new EventEmitter<string>();
    product: string = "";

    searchProduct(): void {
       /*  alert('pesquisando o produto' + this.product); */
        console.log('SearchComponent, searchProduct(): ', this.product)
        this.product = '';
    }

    emitProduct() {
        this.searchedProduct.emit(this.product);
    }
}
