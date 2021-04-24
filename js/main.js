/**
 * @class       : main
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : viernes abr 23, 2021 14:47:34 -03
 * @description : main
 */
'use strict';
import { App } from './components/page_components.js';

const e = React.createElement;

const init = function () {
  const app = document.getElementById('app');
  ReactDOM.render(e(App), app);
}

document.addEventListener("DOMContentLoad", init());
