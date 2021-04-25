/**
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : domingo abr 25, 2021 12:53:11 -03
 * @description : exercises
 */

const e = React.createElement;

const {
  Box,
  Button,
  Card,
  CardContent,
  CardActions
} = window['MaterialUI'];

const exercisesList = {
  dom: [
    {
      slug: 'ejercicio1',
      name: 'ejercicio1',
      statement: `Hay un objeto invisible con id 'ejercicio1'. La functión
          'ejercicio1_mostrarObjeto()' debe mostrar el objeto con ese id.`,
      tags: [
        'getElementById',
        'visibility'
      ],
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
      clue: `Recuerda que puedes encontrar un objeto por su id usando document.getElementById('id')`
    },
  ],

  api: [
    {
      slug: 'ejercicio1',
      name: 'ejercicio1',
      statement: `Hay un objeto invisible con id 'ejercicio1'. La functión
          'ejercicio1_mostrarObjeto()' debe mostrar el objeto con ese id.`,
      tags: [
        'getElementById',
        'visibility'
      ],
      clue: `Recuerda que puedes encontrar un objeto por su id usando document.getElementById('id')`
    },
  ]
};

function ExerciseComponent (props) {
  const { exercise } = props;
  return (
    e(Box, { m: 3, p: 2, component: Card },
      e(CardContent, null,
        e('h3', null, exercise.name),
        e('p', null, exercise.statement),
      ),
      e(CardActions, null,
        e(Button, {variant: 'contained', color: 'primary' }, 'Ingresar'),
        e(Button, {variant: 'contained', color: 'default' }, 'Mas info.')
      )
    )
  );
}

function Exercises (props) {
  const exercises = exercisesList[props.chapter];
  let exerciseComponents = [];
  exercises.forEach((exercise) => {
    exerciseComponents.push(
      e(ExerciseComponent, { exercise, key: exercise.slug })
    );
  });
  return (
    e('div', null,
      e('h3', null, props.chapter.name),
      e('p', null, props.chapter.description),
      exerciseComponents
    )
  );
}

export { Exercises };
