import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';
import { BgYellowDirective } from './directives/bg-yellow.directive';
import { HightLigthMouseDirective } from './directives/hight-ligth-mouse.directive';
import { HighLigthInputDirective } from './directives/high-ligth-input.directive';
import { NgElseDirective } from './directives/ng-else.directive';
import { OnlyLettersDirective } from './directives/only-letters.directive';

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
    CreateProductComponent,
    BgYellowDirective,
    HightLigthMouseDirective,
    HighLigthInputDirective,
    NgElseDirective,
    OnlyLettersDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
