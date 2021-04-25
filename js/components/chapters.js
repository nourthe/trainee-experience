/**
 * @class       : chapters
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : domingo abr 25, 2021 10:41:38 -03
 * @description : chapters
 */

import { Exercises } from './exercises.js'

const {
  Box,
  Button,
  Card,
  CardContent,
  CardActions
} = window['MaterialUI'];

const {
  Link,
  useParams
} = ReactRouterDOM;

const e = React.createElement;

const chapters = [
  {
    slug: 'dom',
    name: 'DOM',
    description: `Aprenderás a controlar el DOM con Javascript.`
  },
  {
    slug: 'api',
    name: 'API Rest',
    description: `Aprenderás a usar una API externa desde Javascript.`
  },
];

function MenuChapterComponent (props) {
  return (
    e(Box, { m: 3, p: 2, component: Card },
      e(CardContent, null,
        e('h3', null, props.chapter.name),
        e('p', null, props.chapter.description),
      ),
      e(CardActions, null,
        e(Button, {variant: 'contained', color: 'primary', component: Link, to: `/chapter/${props.chapter.slug}`}, 'Ingresar'),
        e(Button, {variant: 'contained', color: 'default' }, 'Mas info.')
      )
    )
  );
}

function Chapter () {
  const { chapter: slug } = useParams();
  let chapter = null;
  chapters.forEach((c) => {
    if (c.slug == slug) {
      chapter = c;
    }
  });
  if (chapter != null) {
    return (
      e(Box, { m: 3, p: 2, component: Card },
        e(CardContent, null,
          e('h2', null, chapter.name),
          e('h5', null, chapter.description),
        ),
        e(Exercises, { chapter: slug })
      )
    );
  }
  else {
    return 'Ocurrió un error';
  }
}

class MenuChapters extends React.Component {

  getMenuItemsList() {
    let list = [];
    chapters.forEach((chapter) => {
      list.push(e(MenuChapterComponent, { chapter, key: chapter.slug }))
    });
    return list;
  }

  render() {
    return (
      e('nav', {},
        e('div', {},
          this.getMenuItemsList()
        )
      ));
  }
}



export { MenuChapters, Chapter };
