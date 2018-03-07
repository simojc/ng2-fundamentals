import { Component, Input, OnInit } from '@angular/core'

import { ISession, restrictedWords } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.htm'

})
export class SessionListComponent  {
   @Input() sessions:ISession[]
}