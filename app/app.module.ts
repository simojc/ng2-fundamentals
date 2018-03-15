import  './rxjs-extentions'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
	EventsListComponent,
	EventsThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventResolver,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    DurationPipe,
    VoterService,
    LocationValidator
    
} from './events/index'

import {
    ToastrService,
    CollapsibleWellComponent,
    JQ_TOKEN,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index'

//import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { EventsAppComponent } from  './events-app.component'
import { NavBarComponent } from  './nav/navbar.component'
import { Error404Component } from  './errors/404.component'

import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'

declare let jQuery : Object

@NgModule({
	imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules } )
			],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventsThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
        DurationPipe
      
	],
	providers: [
        EventService,
        { provide: JQ_TOKEN, useValue: jQuery},
		ToastrService,
        EventListResolver,
        AuthService,
        EventResolver,
        VoterService,
		{
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
		],
	bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
	if (component.isDirty)
	 		return window.confirm('you have not saved this event, do you really want to cancel?')
	return true
}
