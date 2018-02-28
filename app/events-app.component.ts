
import { Component } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-app',
	template: '<events-list> </events-list>'
}) 
export class EventsAppComponent {

}