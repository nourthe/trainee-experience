/**
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : domingo abr 25, 2021 12:53:11 -03
 * @description : exercises
 */

const e = React.createElement;

import dom from './exercises/dom.js';
import api from './exercises/api.js';
import { TEConsoleComponent } from '../console.js';


const {
  Box,
  Button,
  Card,
  CardContent,
  CardActions
} = window['MaterialUI'];

const exercisesList = {
  dom,
  api
};

function ExerciseComponent (props) {
  const { exercise } = props;
  return (
    e(Box, { m: 3, p: 2, component: Card },
      e(CardContent, null,
        e('h3', null, exercise.name),
        e('p', null, exercise.statement),
        exercise.element,
      ),
      e(CardActions, null,
        e(Button, {onClick: exercise.test, variant: 'contained', color: 'primary' }, 'Probar'),
        e(Button, {variant: 'contained', color: 'secondary' }, 'Pista')
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
      e(TEConsoleComponent),
      e('h3', null, props.chapter.name),
      e('p', null, props.chapter.description),
      exerciseComponents
    )
  );
}

export { Exercises };
