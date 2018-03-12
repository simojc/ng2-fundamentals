
import { Component, OnInit } from '@angular/core'
import { AuthService } from './user/auth.service'

//Le path � @angular/core � est d�fini dans "systmejs.congig.js" comme correspondant � 'npm:@angular/core/bundles/core.umd.js',
// � npm: � est mapp� au dossier "node_modules" tel que d�fini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'events-app',
	template: `
	<nav-bar> </nav-bar>
	<router-outlet> </router-outlet>	
	`
})
export class EventsAppComponent implements OnInit  {

    constructor(private auth: AuthService)  {

    }

    ngOnInit() {
        this.auth.checkAuthenticationStatus()
    }


}
