import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
    title: string = 'First Component';
    pageTitle: string = 'Ta vindo do pai'
    subTitle: string = 'Sub do pai';
    name: string = 'Paulo'


    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Testando o titulo')
    }
    handleProduct(product: string) {
        alert(`Pesquisando produto: ${product}`)
    }
}
