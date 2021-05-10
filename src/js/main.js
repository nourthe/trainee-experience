/**
 * @class       : main
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : viernes abr 23, 2021 14:47:34 -03
 * @description : Código base de la applicación Trainee-Experience.
 */

/** Le digo al motor de Javascript que quiero usar javascript de una forma un
 * poco más restringida de lo normal. */
'use strict';

/** Como estamos en un módulo de javascript puedo importar elementos de
 * src/components/app.js de esta forma
 * */
import { App } from './components/app.js'; // Importo la clase App

/** Declaro la función `init` que carga la página. */
const init = function () {
  ReactDOM.render(
    React.createElement(App), // Renderizo `App`, que esta definida en app.js.
    document.getElementById('app') // En el div #app que cree en el html.
  );
}

/** Ejecuto `init()` cuando el sitio termine de cargar. */
document.addEventListener("DOMContentLoad", init());
