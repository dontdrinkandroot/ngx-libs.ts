import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
    templateUrl: './card.component.html',
    imports: [
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent
{
}
