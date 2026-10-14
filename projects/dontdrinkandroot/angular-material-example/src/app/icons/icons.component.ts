import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {DdrMatIconFillDirective} from "@dontdrinkandroot/ngx-material-extensions";

@Component({
    imports: [
        MatCard,
        MatCardContent,
        MatIcon,
        DdrMatIconFillDirective
    ],
    templateUrl: 'icons.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent
{
}