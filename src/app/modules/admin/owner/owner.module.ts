import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { MatListModule } from '@angular/material/list';
import { FuseCardModule } from '../../../../@fuse/components/card';
import { OwnerService } from './owner.service';
import { CommonModule } from '@angular/common';
import { OwnerCardComponent } from '../../../components/owner-card/owner-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FuseConfirmationService } from '../../../../@fuse/services/confirmation';
import { MatButtonModule } from '@angular/material/button';
import { PetFormComponent } from '../../../components/pet-form/pet-form.component';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PetTypeService } from './pettypes.service';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: OwnerComponent
    }
];

@NgModule({
    declarations: [
        OwnerComponent,
        OwnerCardComponent,
        PetFormComponent,
    ],
    imports     : [
        FuseCardModule,
        MatListModule,
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        RouterModule.forChild(exampleRoutes)
    ],
    providers: [
        OwnerService,
        PetTypeService,
        FuseConfirmationService,
    ]
})
export class OwnerModule
{
}
