import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/interfaces/product.interface';

export type Sort = 'asc' | 'desc';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private baseUrl: string = `${environment.API_BASE_URL}/product`;

    constructor(private http: HttpClient) { }

    getProducts(limit?: number, page?: number, sort?: Sort): Observable<Product[]> {
        let _limit, _page, _sort;

        _limit = limit ?? 10;
        _page = page ?? 1;
        _sort = sort ?? 'asc';

        let params = new HttpParams().appendAll({_limit,_page, _sort});

        return this.http.get<Product[]>(this.baseUrl, { params });
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product); //store
    }

    getOne(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }

    edit(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
    }

    destroy(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}/${id}`)
    }
}
