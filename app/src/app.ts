/**
 * Created by Sergey Daniloff on 02.04.2018.
 */

import * as moment from 'moment';

export class App {
  public run(): void {
    console.log(moment().format('[[]L[]]'), 'App run!');
  }
}
