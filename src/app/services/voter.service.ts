import { Injectable } from '@angular/core';
import { iSession } from '../events/event.model';

@Injectable()
export class VoterService {

  constructor() { }

  deleteVoter(session:iSession,voterName:string) {
    session.voters= session.voters.filter((voter) => {
      voter !== voterName
    })

  }
  

  addVoter(session:iSession,voterName:string) {
    session.voters.push(voterName)

  }


  userHasVoted(session:iSession,voterName:string):boolean {

    //some : returns a boolean whether there is or is not at least one element that matches a specific condition,
    return session.voters.some(voter=>{
      voter === voterName ;
    })

  }
}
