enum ResourceLoaderStatus {
  QUEUED = 'queued',
  RUNNING = 'running',
  COMPLETE = 'complete',
  FAILED = 'failed',
}


export interface ResourceLoadHandlers {
  onEnqueue?(): void,
  onLoadStart?(): void,
  onLoadProgress?(): void,
  onLoadComplete?(): void,
  onLoadFail?(): void,
}

class ResourceLoader {
  url: string;
  status: ResourceLoaderStatus;

  constructor(url: string) {
    this.url = url;
    this.status = ResourceLoaderStatus.QUEUED;
  }

  start = ():void => {
    console.log('run job');
  }

  public addHandlers(handlers:ResourceLoadHandlers):void {
    console.log(handlers);
  }
}

export default ResourceLoader;

