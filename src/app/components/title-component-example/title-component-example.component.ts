import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-component-example',
  templateUrl: './title-component-example.component.html',
  styleUrls: ['./title-component-example.component.scss']
})
export class TitleComponentExampleComponent {
    @Input() title: string = '';
    @Input() subTitle?: string = '';
}
