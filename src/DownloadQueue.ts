import ResourceLoader, {ResourceLoadHandlers} from './ResourceLoader';


class DownloadQueue {
  _queue: Map<string, ResourceLoader>;

  constructor() {
    this._queue = new Map<string, ResourceLoader>();
  }


  public load(url:string, handlers?:ResourceLoadHandlers):ResourceLoader {
    let loader = this._queue.get(url);
    if (!loader) {
      loader = new ResourceLoader(url);
      this._queue.set(url, loader);
    }

    if (handlers) {
      loader.addHandlers(handlers);
    }
    this._processQueue();

    return loader;
  }


  public get queueLength():number {
    return this._queue.size;
  }


  /**
   * Traverse the queue, scanning for enqueued jobs.
   * If there are job(s) to be processed and the max number
   * of active jobs has not been reached, activate as many
   * jobs as possible.
   * @private
   */
  private _processQueue():void {
    console.log(this._queue);
  }
}

export default DownloadQueue;
