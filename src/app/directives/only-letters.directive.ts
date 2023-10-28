import { Directive, HostListener } from '@angular/core';
import { PATTERNS } from '../constants/patterns.constant';

@Directive({
  selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {
    onlyLetterRegex = PATTERNS.ONLY_LETTERS_WITH_SPACE_CHAR;

    @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
        if(!this.onlyLetterRegex.test(event.key)){
            event.preventDefault();
            console.log('preventDefault')
        }
    }


}
