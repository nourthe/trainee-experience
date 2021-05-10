/**
 * @class       : app
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : martes abr 27, 2021 00:11:01 -03
 * @description : Módulo App de Trainee Experience.
 *    Será documentado en próximas versiones.
 */

import { PageTitle, Copyright } from './page_components.js';

import { Editor } from './editor.js';

import {
  Chapter,
  MenuChapters
} from './chapters.js'

const {
  Card,
  CardActions,
  CardContent,
  Container,
    } = window['MaterialUI'];

const {
    BrowserRouter: Router,
    Switch,
    Route
      } = ReactRouterDOM;

const e = React.createElement;


class Page extends React.Component {

  render() {
    return (
      e(Router, null,
        e('div', { className: 'root' },
          e(PageTitle, null, 'Proyecto Edu'),
          e('br'),
          e(Container, { maxWidth: 'sm' },
            e(Switch, null,
              e(Route, { path: "/chapter/:chapter" },
                e(Chapter),
              ),
              e(Route, { path: "/editor" },
               e(Editor)
              ),
              e(Route, { path: "/" },
                e(MenuChapters),
              ),
            ),
            e(Card, null,
              e(CardContent, null,
                this.props.children
              ),
              e(CardActions)
            )
          ),
          e(Copyright)
        )
      )
    );
  }
}

class App extends React.Component {
  render() {
    return React.createElement(Page);
  }
}

export { App }
