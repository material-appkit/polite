enum JobStatus {
  QUEUED = 'queued',
  RUNNING = 'running',
  COMPLETE = 'complete',
  FAILED = 'failed',
}

class Job {
  id: number | undefined;
  status: JobStatus;

  constructor() {
    this.id = undefined;
    this.status = JobStatus.QUEUED;
  }

  run = ():void => {
    console.log('run jobs');
  }
}

export default Job;

