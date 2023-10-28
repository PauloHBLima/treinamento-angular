import { Component } from '@angular/core';
import { MenuLinks } from 'src/interfaces/header.components';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menus: MenuLinks[] = [
        {rota: '/', texto: 'home'},
        {rota: '/products', texto: 'products'},
        {rota: '/test', texto: 'Página teste'},
        { rota: '/forms-module', texto: "Exemplo Forms Module"},
        {rota: '/reactive-forms', texto: 'exemplo reactive-forms'},
        {rota: '/admin/create-product', texto: 'Criar produtos - admin'},
    ]

}
