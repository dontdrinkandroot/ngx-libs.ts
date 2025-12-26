import {ChangeDetectionStrategy, Component, effect, signal} from "@angular/core";
import {DdrMatFilterComponent} from "@dontdrinkandroot/ngx-material-extensions";
import {faker} from "@faker-js/faker/locale/en";
import {MatList, MatListItem, MatListItemAvatar, MatListItemLine, MatListItemTitle} from "@angular/material/list";

type Person = {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    imports: [
        DdrMatFilterComponent,
        MatList,
        MatListItem,
        MatListItemLine,
        MatListItemTitle,
        MatListItemAvatar
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent
{

    protected filterValue = signal<string | null>(null);

    protected filteredPersons = signal<Person[]>([]);

    constructor()
    {
        const numPersons = 50;
        const persons: Person[] = [];
        for (let i = 0; i < numPersons; i++) {

            const sex = faker.person.sexType();
            const firstName = faker.person.firstName(sex);
            const lastName = faker.person.lastName();
            const name = `${firstName} ${lastName}`;
            const email = faker.internet.email({firstName, lastName});

            persons.push({
                id: i,
                name: name,
                email: email,
                avatar: faker.image.avatarGitHub()
            });
        }

        effect(() => {
            const filterValue = this.filterValue();
            this.filteredPersons.set(
                persons.filter(
                    person => filterValue === null
                        || person.name.toLowerCase().includes(filterValue.toLowerCase())
                        || person.email.toLowerCase().includes(filterValue.toLowerCase())
                )
            );
        });
    }
}
