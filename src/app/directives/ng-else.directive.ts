import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[NgElse]',
})
export class NgElseDirective {

    constructor(private templateRef: TemplateRef<any>, private viweContainerRef: ViewContainerRef) { }
    @Input() set ngElse(condition: boolean) {
        if (!condition) {
            this.viweContainerRef.createEmbeddedView(this.templateRef)
        } else {
            this.viweContainerRef.clear();
        }
    }
}
