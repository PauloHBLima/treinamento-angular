import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighLigthInput]'
})
export class HighLigthInputDirective {
    @Input() highLigthColor: string = 'blue';
    @Input() defaultColor: string = 'white';
    @Input() text: string = 'Teste';


    constructor() {}

    @HostBinding('style.backgroundColor') backgroundColor!: string;
    @HostBinding('style.innerText') elementText: string = this.text;

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = this.highLigthColor;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = this.defaultColor;
    }
}
