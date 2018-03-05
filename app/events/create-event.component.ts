
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({

	template: `
	<h1> Nouvel événement </h1>
      <hr>
  <div class="col-md-6">
      <h3>  [Create Event Form will go here]  </h3>
	     <br/>
       <br/>
       <button type="submit" class="btn btn-primary"> Enregistrer </button>
       <button type="button" class="btn btn-default" (click)="cancel()"> Annuler </button>
  </div>
	`
})
export class CreateEventComponent {
 isDirty:boolean = false
  constructor(private router:Router)  {

	}

  cancel() {
    this.router.navigate(['/events'])

  }
}
