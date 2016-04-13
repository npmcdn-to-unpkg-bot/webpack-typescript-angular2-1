import 'angular2/bundles/angular2-polyfills.min';
import 'angular2/bundles/angular2.dev';
import 'angular2/bundles/router.dev';
import 'angular2/bundles/http.dev';
import 'rxjs/bundles/Rx.min';

//import {provide} from 'angular2/core';
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';

//bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
bootstrap(App);