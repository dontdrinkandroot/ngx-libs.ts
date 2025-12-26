import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {delay, filter, map} from "rxjs";
import {
    DdrMatSidenavContainerComponent,
    DdrMatSidenavToggleComponent,
    DdrMatToolbarFixedTopDirective
} from "@dontdrinkandroot/ngx-material-extensions";
import {SwUpdate} from "@angular/service-worker";
import {toSignal} from "@angular/core/rxjs-interop";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app',
    imports: [
        DdrMatToolbarFixedTopDirective,
        DdrMatSidenavContainerComponent,
        DdrMatSidenavToggleComponent,
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        RouterLinkActive,

    ],
    templateUrl: 'app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App
{
    protected title

    constructor(
        swUpdate: SwUpdate,
        private readonly router: Router,
        private readonly titleService: Title
    )
    {

        if (swUpdate.isEnabled) {
            swUpdate.versionUpdates.subscribe((event) => {
                switch (event.type) {
                    case 'VERSION_READY':
                        document.location.reload();
                        break;
                }
            });
        }

        this.title = toSignal(
            this.router.events
                .pipe(
                    filter(event => event instanceof NavigationEnd),
                    /* Delay 50 ms */
                    delay(50),
                    map(() => this.titleService.getTitle())
                ),
            {initialValue: 'Ddr Material Extensions'}
        );
    }
}
