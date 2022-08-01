import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { iSession } from '../events/event.model';

@Injectable()
export class VoterService {



  constructor(private http: HttpClient) { }

  deleteVoter(session: iSession, eventId: number, voterName: string) {

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    this.http.delete(url)
    .pipe(catchError(this.handleError('deleteVoter', {})))
    .subscribe();
    // session.voters = session.voters.filter((voter) => {
    //   voter !== voterName
    // })

  }


  addVoter(session: iSession, eventId: number, voterName: string): void {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    const options = { headers: new HttpHeaders({ 'Content-Type': '/application/json' }) }
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter', {})))
      .subscribe();

  }


  userHasVoted(session: iSession, voterName: string): boolean {
    //some : returns a boolean whether there is or is not at least one element that matches a specific condition,
    return session.voters.some(voter => voter === voterName)

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
