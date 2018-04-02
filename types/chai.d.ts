/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
import Assertion = Chai.Assertion;

declare namespace Chai { // tslint:disable-line
  export interface Assertion {
    (message?: string): Assertion;
  }
}
