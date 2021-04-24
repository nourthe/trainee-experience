/**
 * @class       : page_components
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : viernes abr 23, 2021 17:30:15 -03
 * @description : page_components
 */

const {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Icon,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  Typography
    } = window['MaterialUI'];

const e = React.createElement;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function PageTitle (props) {
  const classes = useStyles();

  return e(AppBar, { position: 'static' } ,
    e(Toolbar, null,
      e(IconButton, { edge: 'start', className: classes.menuButton, color: 'inherit', 'aria-label': 'menu' },
        e(Icon, null, 'menu')
      ),
      e(Typography, null, props.children),
    )
  );
}

class Page extends React.Component {

  render() {
    return e('div', { className: 'root' },
      e(PageTitle, null, 'Proyecto Edu'),
      e('br'),
      e(Container, { maxWidth: 'sm' },
        e(Card, null,
          e(CardContent, null,
            this.props.children
          ),
          e(CardActions)
        )
      ),
      e(Copyright)
    );
  }
}

class App extends React.Component {
  render() {
    return e(Page, null, e(ExampleButton));
  }
}

class ExampleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      Button,
      {
        onClick: () => this.setState({ liked: true }),
        variant: 'contained',
        color: 'secondary'
      },
      'Like'
    );
  }
}

function Copyright () {
  return e(Typography, { variant: "body2", color: "textSecondary", align: "center" },
    'Copyright © ',
    e(Link, { color: "inherit", href: "https://github.com/nourthe"},
      'nourthe'
    ),
    '  ',
    new Date().getFullYear(),
    '.'
  );
}


export { App, Page, PageTitle, ExampleButton }

