
import { Component, Input } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-thumbnail',
	templateUrl: 'app/events/events-thumbnail.component.html',
	styles:[`
		.pad-left {margin-left: 10px;}
		.well div {color: #bbb;}
	`]
})
export class EventsThumbnailComponent {

	@Input() event:any

}
