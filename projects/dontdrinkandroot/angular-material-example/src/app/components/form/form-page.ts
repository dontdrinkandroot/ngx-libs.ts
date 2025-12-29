import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatButtonModule
    ],
    templateUrl: 'form-page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPage
{
}
