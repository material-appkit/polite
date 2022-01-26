import Job from './Job';


class JobQueue {
  _enqueuedJobs: Array<Job>;

  constructor() {
    this._enqueuedJobs = [];
  }

  public play():void {
    console.log('play queue');
  }

  public stop():void {
    console.log('stop queue');
  }

  public pause():void {
    console.log('pause queue');
  }

  public add(job:Job):void {
    this._enqueuedJobs.push(job);
  }

  public get queueLength():number {
    return this._enqueuedJobs.length;
  }
}

export default JobQueue;
