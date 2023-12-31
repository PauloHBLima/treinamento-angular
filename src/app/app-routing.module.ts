import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SimpleFormComponent } from './pages/simple-form/simple-form.component';
import { ReactiveFormComponentComponent } from './pages/reactive-form-component/reactive-form-component.component';
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'error', component: NotFoundComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductComponent },
    { path: 'teste', component: FirstComponentComponent },
    { path: 'forms-module', component: SimpleFormComponent },
    {path: 'reactive-forms', component: ReactiveFormComponentComponent},
    { path: "admin", children: [{ path: "create-product", component: CreateProductComponent }] },
    { path: "**", redirectTo: "/error" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
