
import { Component, OnInit } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"

import { EventService } from  './shared/event.service'

import { ToastrService } from  '../common/toastr.service'

@Component({

	template: `
			<div>
				<h1> Upcomming Angular 2 Events </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let evt of events"  class="col-md-5">
							<events-thumbnail  (click)="handlethumbnailClick(evt.name)" [event]="evt"> </events-thumbnail>
						</div>
					</div>
			</div>
		 `
})
export class EventsListComponent implements OnInit {
	events:any[]
	//eventService
	constructor(private eventService: EventService, private toastr: ToastrService)  {
		//this.eventService = eventService
	}
	ngOnInit() {
			this.events = this.eventService.getEvents()
	}
	
	handlethumbnailClick(eventName) {
		//toastr.success(eventName)
		this.toastr.success(eventName)
		//'Vous avez cliqué sur: ' +
	}
}
