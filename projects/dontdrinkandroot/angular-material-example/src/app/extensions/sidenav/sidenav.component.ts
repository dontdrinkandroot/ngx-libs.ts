import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {DdrMatSidenavService} from "@dontdrinkandroot/ngx-material-extensions";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
    templateUrl: './sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatSlideToggle
    ]
})
export class SidenavComponent
{
    private readonly sidenavService = inject(DdrMatSidenavService);

    protected stayOpenOnLargeScreen = this.sidenavService.stayOpenOnLargeScreen;
}
