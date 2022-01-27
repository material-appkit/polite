import ResourceLoader from "../src/ResourceLoader";

import {IMAGE_URLS} from "./constants";


describe('Test ResourceLoader Operations', (): void => {
  test('load_resource', (): void => {
    const loader = new ResourceLoader(IMAGE_URLS[0], {
      onLoadStart: () => {
        console.log('load start');
      },
      onLoadComplete: () => {
        console.log('load complete');
      },
    });

    expect(loader.input).toBe(IMAGE_URLS[0]);

    loader.load();
  });
});
