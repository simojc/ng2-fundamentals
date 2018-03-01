
import { Component } from '@angular/core'
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-list',
	template: `
		<div>
			<h1> Upcomming Angular 2 Events </h1>
			<hr>
			<events-thumbnail  #thumbnail [event]="event1"> </events-thumbnail>
		</div>
	 `
})
export class EventsListComponent {
	event1 = {
		id:1,
		name:'Claude fermat Connect',
		date:'9/26/2036',
		time:'10:00 am',
		price:599.99,
		imageUrl:'\app\assets\images\angularconnect-shield.png',
		location:{
			address: '200 Chemin Ste-Foy',
			city: 'Quebec',
			stateProvince:'Quebec',
			country: 'Canada'
		}
	}

}
