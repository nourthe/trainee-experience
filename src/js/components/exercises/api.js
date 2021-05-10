/**
 * @class       : api
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : Monday May 10, 2021 14:28:48 -03
 * @description : api
 */

const e = React.createElement;

const api = [
  {
    slug: 'ejercicio1',
    name: 'ejercicio1',
    statement: `Hay un objeto invisible con id 'ejercicio1'. La functión
          'ejercicio1_mostrarObjeto()' debe mostrar el objeto con ese id.`,
    tags: [
      'getElementById',
      'visibility'
    ],
    element: e('div', {style: {visibility: 'hidden'}, id: 'ejercicio1'}, '<b>Felicitaciones</b> Si estás viendo esto, es porque resolviste correctamente el ejercicio 1.'),
    clue: `Recuerda que puedes encontrar un objeto por su id usando document.getElementById('id')`
  },
];

export default api;
