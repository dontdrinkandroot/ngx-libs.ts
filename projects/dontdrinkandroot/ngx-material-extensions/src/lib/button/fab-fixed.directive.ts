import {Directive, ElementRef, inject, OnInit} from "@angular/core";

@Directive({
    selector: '[ddrMatFabFixed]',
})
export class DdrMatFabFixedDirective implements OnInit
{
    private element = inject(ElementRef);

    private isInitialized = false;

    /**
     * @override
     */
    public ngOnInit()
    {
        if (this.isInitialized) {
            return;
        }

        // Check if container already exists
        const existingContainer = this.element.nativeElement.parentElement?.querySelector('.ddr-mat-fab-fixed-container');
        if (existingContainer && existingContainer.contains(this.element.nativeElement)) {
            this.isInitialized = true;
            return;
        }

        const container = document.createElement('div');
        container.classList.add('ddr-mat-fab-fixed-container');
        this.element.nativeElement.parentElement.insertBefore(container, this.element.nativeElement);
        container.appendChild(this.element.nativeElement);

        this.isInitialized = true;
    }
}
