
import { Component } from '@angular/core'
//Le path � @angular/core � est d�fini dans "systmejs.congig.js" comme correspondant � 'npm:@angular/core/bundles/core.umd.js',
// � npm: � est mapp� au dossier "node_modules" tel que d�fini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-app',
	template: `
	<nav-bar> </nav-bar>
	<events-list> </events-list>
	`
})
export class EventsAppComponent {

}
