/**
 * @class       : main
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : viernes abr 23, 2021 14:47:34 -03
 * @description : main
 */
'use strict';
import { App } from './components/page_components.js';

const init = function () {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
}

document.addEventListener("DOMContentLoad", init());
