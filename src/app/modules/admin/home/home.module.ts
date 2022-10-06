import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MapComponent } from '../../../map/map.component';
import { HomeComponent } from './home.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwitterTimelineComponent } from '../../../components/twitter-timeline/twitter-timeline.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        MapComponent,
        TwitterTimelineComponent
    ],
    imports     : [
        CommonModule,
        NgxTwitterWidgetsModule,
        FormsModule,
        MatProgressBarModule,
        MatButtonModule,
        RouterModule.forChild(exampleRoutes)
    ],
})
export class HomeModule
{
}
