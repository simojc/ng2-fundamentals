
import { Component } from '@angular/core'
//Le path � @angular/core � est d�fini dans "systmejs.congig.js" comme correspondant � 'npm:@angular/core/bundles/core.umd.js',
// � npm: � est mapp� au dossier "node_modules" tel que d�fini tjrs dans "systmejs.congig.js"
@Component({
	selector: 'nav-bar',
	templateUrl: 'app/nav/navbar.component.html',
  styles:[`
		.nav.navbar-navbar {font-size: 15px;}
    #searchForm {margin-right: 100px;}
		@media (max-width: 1200px) {#searchForm {display:none}}
		li > a.active { color: #F97924; }
	`]
})
export class NavBarComponent {

}
