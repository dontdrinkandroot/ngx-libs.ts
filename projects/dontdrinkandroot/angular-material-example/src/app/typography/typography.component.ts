import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatCardModule} from "@angular/material/card";

@Component({
    templateUrl: 'typography.component.html',
    imports: [
        MatCardModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyComponent
{
}
