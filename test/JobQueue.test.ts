import JobQueue from '../src/JobQueue';
import Job from '../src/Job';


describe('test job_queue', (): void => {
  test('add_job', (): void => {
    const queue = new JobQueue();
    const job = new Job();
    queue.add(job);
    expect(queue.queueLength).toBe(1);
  });
});
