export class Quote {
  public showDetails: boolean;
  public upvotes: number;
  public downvotes: number;
  constructor(public id: number, public name: string, public author: string, public publisher: string, public completeDate: Date) {
    this.showDetails = false;
    this.upvotes = 0;
    this.downvotes = 0;
  }
}

