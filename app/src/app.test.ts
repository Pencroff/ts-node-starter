/**
 * Created by Sergey Daniloff on 02.04.2018.
 */

import { expect } from 'chai';
import { App } from './app';

describe('app', () => {
  let app: App;
  beforeEach(() => {
    app = new App();
  });
  it('should be instantiated', (done) => {
    expect(app).to.be.instanceof(App);
    done();
  });
});
