import { NgModule } from  '@angular/core'
import { BrowserModule } from  '@angular/platform-browser'

import { EventsAppComponent } from  './events-app.component'
import { EventsListComponent } from  './events/events-list.component'
import { EventsThumbnailComponent } from  './events/events-thumbnail.component'
import { NavBarComponent } from  './nav/navbar.component'

import { EventService } from  './events/shared/events.service'



@NgModule({
	imports: [BrowserModule],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventsThumbnailComponent,
		NavBarComponent
	],
	providers: [EventService],
	bootstrap: [EventsAppComponent]
})
export class AppModule {

}
