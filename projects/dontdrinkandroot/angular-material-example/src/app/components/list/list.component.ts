import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {faker} from "@faker-js/faker/locale/en";

@Component({
    templateUrl: 'list.component.html',
    imports: [
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent
{
    protected avatars = [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
    ];
}
