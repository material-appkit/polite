/**
 * @jest-environment jsdom
 */

import ResourceManager from '../src/ResourceManager';
import ResourceLoader, {ResourceLoaderOptions} from "../src/ResourceLoader";

import {IMAGE_URLS} from "./constants";


describe('test job_queue', (): void => {
  test('add_job', (): void => {
    const queue = new ResourceManager();

    const loadHandlers:ResourceLoaderOptions = {
      onLoadStart: () => {
        console.log('load start');
      },
      onLoadProgress: () => {
        console.log('load progress');
      },
      onLoadComplete: () => {
        console.log('load complete');
      },
      onLoadFail: () => {
        console.log('load fail');
      },
    }

    const loaderA:ResourceLoader = queue.load(IMAGE_URLS[0], loadHandlers);

    expect(queue.queueLength).toBe(1);
    expect(loaderA.input).toBe(IMAGE_URLS[0]);
    expect(queue.queueLength).toBe(1);

    const loaderB:ResourceLoader = queue.load(IMAGE_URLS[0], loadHandlers);
    expect(queue.queueLength).toBe(1);
    expect(loaderA).toBe(loaderB);
  });
});
