import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
    imports: [
        MatCard,
        MatCardContent,
        MatButtonModule
    ],
    templateUrl: 'button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent
{
}
