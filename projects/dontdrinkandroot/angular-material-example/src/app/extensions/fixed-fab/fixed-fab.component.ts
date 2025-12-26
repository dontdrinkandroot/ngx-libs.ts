import {ChangeDetectionStrategy, Component, signal} from "@angular/core";
import {DdrMatFabFixedDirective} from "@dontdrinkandroot/ngx-material-extensions";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
    selector: 'app-fixed-fab',
    templateUrl: 'fixed-fab.component.html',
    imports: [
        DdrMatFabFixedDirective,
        MatFabButton,
        MatIcon,
        MatList,
        MatListItem
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedFabComponent
{
    protected entries = signal<string[]>([]);

    protected addEntry()
    {
        this.entries.update(entries => [
            ...entries,
            'Entry ' + (entries.length + 1)
        ]);
    }
}
