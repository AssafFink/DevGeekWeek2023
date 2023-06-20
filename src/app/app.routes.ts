import { Routes } from '@angular/router';
import { HomeComponent } from './home-area/home/home.component';
import { ProductListComponent } from './products-area/product-list/product-list.component';
import { AddProductComponent } from './products-area/add-product/add-product.component';
import { Page404Component } from './layout-area/page404/page404.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "products", component: ProductListComponent},
    { path: "new-product", component: AddProductComponent},
    // { path: "", component: HomeComponent}
    { path: "", redirectTo: "/home", pathMatch: "full"}, // full = exact empty string

    { path: "**", component: Page404Component}

];
