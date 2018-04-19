export class EventListCardModel {
  constructor(
    public eventId: number,
    public title: string,
    public holiday: string,
    public date: string,
    // public time: string,
    public city: string,
    public owner: string,
    public picture: string,
    public description: string, // field for EventInfo
    public rate: number
  ) {
  }
}
