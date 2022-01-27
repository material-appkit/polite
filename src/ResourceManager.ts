import ResourceLoader, {ResourceLoaderOptions} from './ResourceLoader';


class ResourceManager {
  _queue: Map<string, ResourceLoader>;

  constructor() {
    this._queue = new Map<string, ResourceLoader>();
  }


  public load(url:string, options?:ResourceLoaderOptions):ResourceLoader {
    let loader = this._queue.get(url);
    if (!loader) {
      loader = new ResourceLoader(url, options || {});
      this._queue.set(url, loader);
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

export default ResourceManager;
