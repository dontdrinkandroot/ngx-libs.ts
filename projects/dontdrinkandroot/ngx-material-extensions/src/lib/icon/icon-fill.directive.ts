import {booleanAttribute, computed, Directive, input} from '@angular/core';

/**
 * Sets the FILL axis of the Material Symbols variable font on an icon element.
 *
 * Usage: `<mat-icon ddrMatIconFill>star</mat-icon>` or bind dynamically
 * with `[ddrMatIconFill]="isFilled()"`.
 */
@Directive({
    selector: '[ddrMatIconFill]',
    host: {
        '[style.font-variation-settings]': '$fontVariationSettings()'
    }
})
export class DdrMatIconFillDirective
{
    public $fill = input(true, {alias: 'ddrMatIconFill', transform: booleanAttribute});

    protected readonly $fontVariationSettings = computed(() => this.$fill() ? '\'FILL\' 1' : '\'FILL\' 0');
}