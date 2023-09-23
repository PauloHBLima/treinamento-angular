import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TitleComponentExampleComponent } from './components/title-component-example/title-component-example.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroReactiveFormsComponent } from './components/cadastro-reactive-forms/cadastro-reactive-forms.component';
import { SimpleFormComponent } from './pages/simple-form/simple-form.component';
import { ReactiveFormComponentComponent } from './pages/reactive-form-component/reactive-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TitleComponentExampleComponent,
    SearchComponent,
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    CadastroReactiveFormsComponent,
    SimpleFormComponent,
    ReactiveFormComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
