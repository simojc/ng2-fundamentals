
import { Component, Input } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-thumbnail',
	templateUrl: 'app/events/events-thumbnail.component.html',
	styles:[`
		.thumbnail {min-height: 201px;}
		.pad-left {margin-left: 10px;}
		.well div {color: #bbb;}		
	`]
})
export class EventsThumbnailComponent {

	@Input() event:any
	
	getStartTimeStyle(): any {
		if (this.event && this.event.time === '8:00 am')			
			return {color: '#003300', 'font-weight': 'bold'}
		return {}
		
		// On peut assi utiliser des classe de style pour faire la même chose et utiliser dans le template ngClass à la place de ngStyle.
	}

}


