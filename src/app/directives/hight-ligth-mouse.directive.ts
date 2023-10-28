import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHightLigthMouse]'
})
export class HightLigthMouseDirective {

    constructor(/* private elementRef: ElementRef, private renderer: Renderer2 */) { }

    @HostBinding('style.backgroundColor') backgroundColor!: string;

    @HostListener('mouseenter') onMouseOver() {
        this.backgroundColor = 'green';
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = 'white';
    }

}
