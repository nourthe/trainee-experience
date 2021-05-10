/**
 * @class       : dom
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : Monday May 10, 2021 14:28:48 -03
 * @description : dom
 */

const e = React.createElement;
import ejercicios from '../../util/dom.js';

const dom = [
  {
    slug: 'ejercicio1',
    name: 'ejercicio1',
    statement: `Hay un objeto invisible con id 'ejercicio1'. La functión
          'ejercicio1_mostrarObjeto()' debe mostrar el objeto con ese id.`,
    tags: [
      'getElementById',
      'visibility'
    ],
    test: () => {
      ejercicios.ejercicio1();
    },
    element: e('div',
      {style: {visibility: 'hidden', background: 'chocolate', padding: '4pt'}, id: 'ejercicio1'},
      e('b', null, 'Felicitaciones'),
      ', Si estás viendo esto, es porque resolviste correctamente el ejercicio 1.'
    ),
    clue: `Recuerda que puedes encontrar un objeto por su id usando document.getElementById('id')`
  },
  {
    slug: 'ejercicio2',
    name: 'ejercicio2',
    statement: `Hay un objeto invisible con id 'ejercicio1'. La functión
          'ejercicio1_mostrarObjeto()' debe mostrar el objeto con ese id.`,
    tags: [
      'getElementById',
      'visibility'
    ],
    element: e('div', {style: {visibility: 'hidden'}, id: 'ejercicio1'}, e('b', null, 'Felicitaciones'), 'Si estás viendo esto, es porque resolviste correctamente el ejercicio 1.'),
    clue: `Recuerda que puedes encontrar un objeto por su id usando document.getElementById('id')`
  },
];

export default dom;
