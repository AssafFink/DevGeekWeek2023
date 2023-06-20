import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public product = new ProductModel();

    constructor(
        private title: Title, 
        private prodService: ProductsService,
        private router: Router) { } // DI

    ngOnInit(): void {
        this.title.setTitle("DevGeekWeek | New"); // Side-Effect
    }

    @ViewChild("imageInputBox")
    public imageInputBox: ElementRef<HTMLInputElement>;

    async send(): Promise<void> {
        try {
            this.product.image = this.imageInputBox.nativeElement.files[0];
            console.log(this.product);
            const addedProduct = await this.prodService.addProduct(this.product);
            console.log(addedProduct);
            alert("Product has been successfully added. ID: " + addedProduct.id);
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            alert(err.message);
        }

    }

}
