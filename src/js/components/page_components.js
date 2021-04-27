/**
 * @class       : page_components
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : viernes abr 23, 2021 17:30:15 -03
 * @description : page_components
 */

const {
  AppBar,
  Icon,
  IconButton,
  Link: Anchor,
  makeStyles,
  Toolbar,
  Typography
    } = window['MaterialUI'];

const { Link } = ReactRouterDOM;

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
      e(IconButton, { edge: 'start', className: classes.menuButton, color: 'inherit', 'aria-label': 'home' , component: Link, to: '/' },
          e(Icon, null, 'home')
        ),
      e(Typography, null, props.children),
    )
  );
}

function Copyright () {
  return e(Typography, { variant: "body2", color: "textSecondary", align: "center" },
    'Copyright © ',
    e(Anchor, { color: "inherit", href: "https://github.com/nourthe"},
      'nourthe'
    ),
    '  ',
    new Date().getFullYear(),
    '.'
  );
}


export { PageTitle, Copyright }

