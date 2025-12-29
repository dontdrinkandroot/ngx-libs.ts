import {ChangeDetectionStrategy, Component, forwardRef, input, signal} from "@angular/core";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";

@Component({
    selector: 'labeled-slider',
    standalone: true,
    imports: [
        MatSliderModule,
        FormsModule
    ],
    templateUrl: './labeled-slider.html',
    styleUrl: './labeled-slider.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabeledSlider),
            multi: true
        }
    ],
    host: {
        "[class.horizontal]": "$horizontal()",
        "[class.compact]": "$compact()",
        "[title]": "$label()"
    }
})
export class LabeledSlider implements ControlValueAccessor
{
    /* Inputs */
    public $label = input.required<string>({alias: 'label'});
    public $min = input<number>(0, {alias: 'min'});
    public $max = input<number>(100, {alias: 'max'});
    public $step = input<number>(1, {alias: 'step'});
    public $disabled = input<boolean>(false, {alias: 'disabled'});
    public $horizontal = input<boolean>(false, {alias: 'horizontal'});
    public $compact = input<boolean>(false, {alias: 'compact'});

    protected readonly $value = signal<number | null>(null);

    private onChange: (value: number | null) => void = () => {
    };

    private onTouched: () => void = () => {
    };

    /** @override */
    public writeValue(value: number | null): void
    {
        this.$value.set(value);
    }

    /** @override */
    public registerOnChange(fn: (value: number | null) => void): void
    {
        this.onChange = fn;
    }

    /** @override */
    public registerOnTouched(fn: () => void): void
    {
        this.onTouched = fn;
    }

    /** @override */
    public setDisabledState(isDisabled: boolean): void
    {
        // We use the disabled input signal, but we might need to handle this if it's used via Reactive Forms
    }

    protected onModelChange(): void
    {
        this.onChange(this.$value());
    }

    protected onBlur(): void
    {
        this.onTouched();
    }
}
