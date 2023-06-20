import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../products.service';
import { ProductModel } from '../product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];

    constructor(private title: Title, private prodService: ProductsService) { } // DI

    async ngOnInit(): Promise<void> {
        try {
            this.title.setTitle("DevGeekWeek | Products"); // Side-Effect
            this.products = await this.prodService.getAllProducts();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    // ngOnInit(): void {
    //     this.title.setTitle("DevGeekWeek | Products"); // Side-Effect
    //     this.prodService.getAllProducts().then(products => {
    //         console.log(products);
    //     }).catch(err => {
    //         alert(err.message);
    //     });
    // }

}
