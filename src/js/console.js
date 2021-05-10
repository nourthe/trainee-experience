/**
 * @class       : console
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : Monday May 10, 2021 14:28:55 -03
 * @description : console
 */

const e = React.createElement;
const {
  Chip,
  Snackbar
} = window['MaterialUI'];


const TEConsoleController = {
  alert: () => {}
}

function TEConsole(texto, tipo) {
  let type = tipo? tipo : 'info';
  TEConsoleController.alert(texto, tipo);
}

function TEConsoleComponent () {
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [type, setType] = React.useState(undefined);

  TEConsoleController.alert = (text, type) => {
    setMessageInfo({message: text});
    setType(type);
    setOpen(true);
  };
  const handleClick = () => { setOpen(false) };

  return (
    e(Snackbar, {open: open},
      e(Alert, {severity: type, onClick: handleClick},
        messageInfo ? messageInfo.message : '')
    )
  );
}

function Alert (props) {
  const colors = {
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
    success: '#4CAF50'
  }
  const style = {
    backgroundColor: colors[props.severity],
    color: 'white',
    padding: '18pt',
    fontWeight: 'bold',
  }
  return (
    e(Chip, {style, onDelete: props.onClick, label: props.children })
  )
}

export { TEConsole, TEConsoleComponent };


