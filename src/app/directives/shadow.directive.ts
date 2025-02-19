import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[shadow]', 
    standalone: true
})

export class CardShadow {
    private readonly elementRef = inject(ElementRef); 
    
    @HostListener('mouseenter') 
    enter() {
        this.elementRef.nativeElement.style.boxShadow = '10px 5px 5px grey'; 
    }

    @HostListener('mouseleave') 
    leave() {
        this.elementRef.nativeElement.style.boxShadow = 'none'; 
    }
}