# Instalación del repositorio

## Descarga del repositorio

Cualquier repositorio de cualquier plataforma, podés descargarlo en tu
computadora con los siguientes pasos.

> *Nota: es importante tener `git` instalado, y accesible desde una consola
> para realizar estos pasos. Si no lo tenés, buscá en Google como instalar Git
> en tu sistema operativo.*

> *Nota: Para probar que ya lo tenés instalado ejecutá en la consola `git
> version`, la respuesta esperada es algo parecido a lo siguiente:*
> ```git version 2.31.1 ```
> *En cambio de no tenerlo instalado saldrá una respuesta parecida a `comando
> git no encontrado`.*

 - Copiá el link del repositorio en donde estás (en este caso es
    https://github.com/nourthe/trainee-experience)
 - En la consola, escribí `git clone <link del repositorio>`, por ejemplo en
    este caso sería: `git clone https://github.com/nourthe/trainee-experience`

## Ejecución

Para ejecutar el repositorio solo necesitas ejecutar un servidor de pruebas en
la carpeta del repositorio `src`. Ahí es donde se encuentra el `index.html` que
se va a encargar de todo.

Necesitás si o si utilizar un servidor de pruebas, abrir `index.html` en tu
navegador no va a funcionar por que utiliza módulos de ECMAScript 6 que no
funcionan de esa forma.

Si no tenés ningún servidor local instalado, pero si tenés Node.js instalado,
que será casi indispensable para un programador FrontEnd, podés ejecutar `npm
install` adentro de este repositorio para instalar automáticamente mi servidor
recomendado `reaload`. Este actualiza la página cada vez que detecta que
guardes un cambio en el código fuente.

Luego para ejecutar este servidor `reload`, solo tenés que ejecutar `npm start`
adentro de este mismo repositorio.


## Actualización

> Antes de actualizar, es recomendable hacer un backup de la carpeta de trabajo
> src/js/util mientras el proyecto Trainee Experience esté en fase de pruebas.
En el caso de que salga una actualización de Trainee Experience, para
instalarla podés ejecutar `git pull`.
