import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'error', component: NotFoundComponent },
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: 'teste', component: FirstComponentComponent},
    { path: "**", redirectTo: "/error" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
