enum ResourceLoaderStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  COMPLETE = 'complete',
  FAILED = 'failed',
}


export interface ResourceLoaderOptions {
  onLoadStart?(): void,
  onLoadProgress?(): void,
  onLoadComplete?(): void,
  onLoadFail?(): void,
  onAbort?(): void,
}

class ResourceLoader {
  options: ResourceLoaderOptions;
  status: ResourceLoaderStatus;
  src: string | null;
  abortController: AbortController | null;
  input: RequestInfo;
  request: Promise<Response> | null;

  constructor(input: RequestInfo, options:ResourceLoaderOptions) {
    this.input = input;
    this.options = options || {};
    this.status = ResourceLoaderStatus.PENDING;
    this.src = null;
    this.abortController = null;
    this.request = null;
  }

  public load():void {
    switch (this.status) {
      case ResourceLoaderStatus.LOADING:
      case ResourceLoaderStatus.COMPLETE:
        return;
      default:
        this.loadInit();
    }
  }

  private reset():void {
    if (this.abortController) {
      this.abortController.abort();

      if (this.options.onAbort) {
        this.options.onAbort();
      }
    }

    if (this.request) {
      this.request = null;
    }

    if (this.src) {
      URL.revokeObjectURL(this.src);
    }
  }

  // private handleLoadProgress(): void {
  //   console.log('load progress');
  // }
  //
  // private handleLoadComplete(): void {
  //   console.log('load complete');
  // }

  private loadInit():void {
    this.reset();
    this.status = ResourceLoaderStatus.LOADING;

    this.abortController = new AbortController();
    const fetchOptions:RequestInit = {
      signal: this.abortController.signal,
    };


    this.request = fetch(this.input, fetchOptions);
  }
}

export default ResourceLoader;

