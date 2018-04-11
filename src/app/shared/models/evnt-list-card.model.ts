export class EventListCardModel {
  constructor(
    public eventId: number,
    public title: string,
    public date: string,
    public city: string,
    public owner: string,
    public picture: string,
    public rate: number
  ) {
  }
}
