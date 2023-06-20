import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        const observable = this.http.get<ProductModel[]>(environment.productsUrl);
        const products = await firstValueFrom(observable);
        return products;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {
        const formData = ProductModel.convertToFormData(product);
        const observable = this.http.post<ProductModel>(environment.productsUrl, formData);
        const addedProduct = await firstValueFrom(observable);
        return addedProduct;
    }

}
