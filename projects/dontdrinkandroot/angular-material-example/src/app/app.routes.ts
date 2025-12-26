import {Routes} from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {ButtonComponent} from "./components/button/button.component";
import {CardComponent} from "./components/card/card.component";
import {ListComponent} from "./components/list/list.component";
import {FilterComponent} from "./extensions/filter/filter.component";
import {FixedFabComponent} from "./extensions/fixed-fab/fixed-fab.component";
import {SidenavComponent} from "./extensions/sidenav/sidenav.component";

export const routes: Routes = [
    {
        path: 'typography',
        title: 'Typography',
        component: TypographyComponent
    },
    {
        path: 'components',
        children: [
            {
                path: 'button',
                title: 'Button',
                component: ButtonComponent
            },
            {
                path: 'card',
                title: 'Card',
                component: CardComponent
            },
            {
                path: 'list',
                title: 'List',
                component: ListComponent
            }
        ]
    },
    {
        path: 'extensions',
        children: [
            {
                path: 'filter',
                title: 'Filter',
                component: FilterComponent
            },
            {
                path: 'fixed-fab',
                title: 'Fixed Fab',
                component: FixedFabComponent
            },
            {
                path: 'sidenav',
                title: 'Sidenav',
                component: SidenavComponent
            }
        ]
    }
];
