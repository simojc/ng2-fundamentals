import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
  
 import  { AppModule } from  './app.module'
 
 platformBrowserDynamic().bootstrapModule(AppModule)   
	// Pour dire à l'application que nous voulons utiliser 
	// ce module pour boostrapper nottre application
	// On bootstrap une fois ici, pour bne pas avoir à le refaire pour chaque component