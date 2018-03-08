import { Component, Input, OnChanges } from '@angular/core'

import { ISession, restrictedWords } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.htm'

})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNamesAsc) : this.visibleSessions.sort(sortByVotesDesc)
        }
    }
    // Cett efonction fait une copie du tableau des sessions dans le tableau visibleSessions
    // Le filtre ne s'applique pas sur 'session' qui reste inchang� tout le long.
    // C'est la nouvelle fa�on de filtre dans Angular 2 (contrairement � Angular 1 qui filtre avec les pipe)
    // Cette fa�on de faire est beaucoup plus performant.
    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)       
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            }
            )
        }
    }
}

function sortByNamesAsc(s1:ISession, s2:ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
}