
import { Injectable } from '@angular/core'

import { Subject, Observable } from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from './user.model'

@Injectable()
export class AuthService {

    public currentUser: IUser

    constructor(private http: Http) { }
   
    loginUser(userName: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        let loginInfo = { username: userName, password: password }

       // let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(resp => {
            if (resp) {
                this.currentUser = <IUser>resp.json().user
            }
        }).catch(error => {
            return Observable.of(false)
        })
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}