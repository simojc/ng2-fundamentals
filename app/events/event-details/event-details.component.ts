
import { Component, OnInit } from '@angular/core'
import { EventService } from  '../shared/event.service'
import { ActivatedRoute } from  '@angular/router'

@Component({
	// Aucun sélecteur, car on va l'utiliser comme un enfant d'un aute component, donc pas besoin de sélecteur
	templateUrl: 'app/events/event-details/event-details.component.html',
	styles:[`
		.container {padding-left:20px; padding-right:20px;}
		.event-image {height: 100px;}
	`]

})
export class EventDetailsComponent implements OnInit {

	event:any
	constructor(private eventService: EventService, private route:ActivatedRoute)  {
		//this.eventService = eventService
	}

	ngOnInit() {
			console.log(this.route.snapshot.params['id'])
			this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
			console.log(this.route.snapshot.params['id'])
	}
}
