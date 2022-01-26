export interface Events {
  id: number,
  name: string,
  date: string,
  time: string,
  price: number,
  imageUrl: string,
  location:Locations

}

interface Locations extends Events {
  address: string,
  city: string,
  country:string

}

//TODO  create sessions interface
/*
sessions: [
      {
        id: 1,
        name: "Using Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4, both
        how to write them, and how to get the new AI CLI to write
        them for you. Given by the famous PBD, president of Angular
        University (formerly Oxford University)`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
*/
