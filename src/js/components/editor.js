/**
 * @class       : editor
 * @author      : nahuel (nahuel@$HOSTNAME)
 * @created     : domingo abr 25, 2021 17:53:37 -03
 * @description : editor
 */

const {
  Button,
    } = window['MaterialUI'];

const e = React.createElement;

let myCodeMirror = null;

const startCode = `// Ejecutá Javascript desde tu navegador, Lean xD
alert('Hola Mundo!');
console.log('Estoy vivo.');
`;

class Editor extends React.Component{

  componentDidMount () {
    myCodeMirror = CodeMirror(document.getElementById('codeEditor'), {
      value: startCode,
      mode:  "javascript",
      theme: "3024-night"
    });
  }

  runCode(){
    eval(myCodeMirror.getValue());
    console.log(lista);
  }


  render() {
    return (
      e('div', null,
        e('div', { id: 'codeEditor'} ),
        e(Button, { onClick: this.runCode, variant: 'contained', color: 'secondary' }, 'PROBAR')
      )
    );
  }
}

export { Editor }

