export interface Events {
  id: number,
  name: string,
  date: Date,
  time: string,
  price: number,
  imageUrl: string,
  location?: { //? means that maybe this property is null, but when it's not null we need all of it's fields
    address: string,
    city: string,
    country:string

  }
  onlineUrl?: string
  sessions:iSession[]

}

export interface iSession{
  id: number|undefined,
  name: string,
  presenter: string,
  duration: number,
  level: string,
  abstract: string,
  voters:string[]
}
