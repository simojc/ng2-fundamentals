
import { Component } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"

import { EventService } from  './events/shared/events.service'

@Component({
	selector: 'events-list',
	template: `
			<div>
				<h1> Upcomming Angular 2 Events </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let evt of events"  class="col-md-5"> 
							<events-thumbnail  [event]="evt"> </events-thumbnail>
						</div>
					</div>		
			</div>
		 `
	 
})
export class EventsListComponent {
	//eventService 
	contructor(private EventService: EventService) {
		
		//this.eventService = eventService
		
	}

}
