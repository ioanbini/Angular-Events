import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { iSession } from '../../event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: iSession[] | any = [];

  @Input() filterBy!: string;

  @Input() sortBy!: string;

  visibleSessions: iSession[] = [];

  /*so now we are passing the value filterBy to this component , but we also need to take action on that value
   and we need to  change what sessions are being showed when this filterBy property itself changes its value
   , so to achieve that we will use the ngOnChanges lifecycle hook method that is going to be called every time that one of the 
   input variables of this component gets a new value , so we will be able to react whenever our filterBy value changes, and also the ngOnChanges can be called before any of the other data is set ! 
   
   */

  constructor() { }

  //nothing changes until we get the correct action in this implementation clicking into the buttons in the event's details page
  ngOnChanges(changes: SimpleChanges): void {
    // if we actually have sessions we want to filter them 
    if (this.sessions) {
      // actualy i dont have to pass in the setting because its availabe on the class but it does make the method itself stateless
      this.filterSessions(this.filterBy);
      // we will also sort our sessions 
      //sort(): mutating method : it doesnt create a new copy of the array and leaves the original arrary unsorted ! 
      //it is actually sorts the array in place ,but you have to pass in an comparison function
      this.sortBy === 'name' ? this.visibleSessions.sort
        (sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)

    }


  }

  private filterSessions(filter: string) {
    if (filter === 'all') {
      //slice : starting from the 1st (0) element of the sessions array will create a complete duplicate of the array with all the same elements !
      this.visibleSessions = this.sessions.slice(0)

    } else {
      //filter : creates a brand-new array and we will pass a little lambda expression

      this.visibleSessions = this.sessions.filter((session: iSession) => {
        //we will return every session that it's level propery value , converted to lowercase will match the filter value
        // so everything that returns true will be included into the new array 
        return session.level.toLocaleLowerCase() === filter;
      })

    }
  }



}

//statles functions , there is not need to be members of the class


function sortByNameAsc(s1: iSession, s2: iSession) {
  // return 0 ,1 or -1 ! This just compares any given two values and tells the array's sorting method
  // how those two values should be in relationship to each other .
  if (s1.name > s2.name) {
    return 1
  } else if (s1.name === s2.name) {
    return 0
  } else return -1


}

function sortByVotesDesc(s1: iSession, s2: iSession) {
  //here will have an array of voters so will compare the length or the arrays
   return s2.voters.length - s1.voters.length
}
