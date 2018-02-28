
import { Component, Input, Output, EventEmitter } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-thumbnail',
	templateUrl: 'app/events/events-thumbnail.component.html'
}) 
export class EventsThumbnailComponent {
	
	@Input() event:any
	
	logFoo() {
		console.log("Nourriture")
	}
}