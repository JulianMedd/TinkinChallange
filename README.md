# RECIPES APP - TINKIN CHALLENGE

Aplicacion encomendada por una ONG con la misión de promover la preservación de la cultura andida.
Con la función de ayudar a los usuarios a encontrar y por que no a elaborar las recetas tradicionales andinas para que esta cultura perdure.
El proyecto aun esta en proceso ya que faltan funcionalidades de la misma aplicaciones. no obstantes al ingresar podras visualizar un listado con las recetas y poder buscar alguna en particular.

![image](https://github.com/JulianMedd/TinkinChallange/blob/main/src/assents/screenApp.jpg)

***

## Instalación | Clonación repositorio

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

    $ git clone https://github.com/JulianMedd/TinkinChallange\
    $ cd ../path/to/the/file
    $ npm install

#### tecnologias usadas

##### `React js`
    $ npx install create-react-app myApp

##### `sass`
    $ npm install node-sass --save

para los estilos de los componentes se utilizo sass, y se creo un archivo por cada componente en su respectivas carpetas.

#### Correr la app

    $ npm start

corre la aplicacion en la consola abre [http://localhost:3000](http://localhost:3000) en el browser.

***

## Components

##### `Header`

componente utilizado en la parte superior de la app, en ella solo se encuentra el logo de tinkin.

##### `Image`

Contiene la imagen principal de la app ubicada en el lado izquierdo de la app.

##### `RecipesContainer`

es el componente contenedor que alverga todos los otros componentes relacionados con las recetas y la busquedas.

##### `SearchContainer`

Contiene el titulo "Kitchen Recipes", el input para la busqueda y el boton para el filtrado. Estos se podrian realizarce en componentes separados. tambien hace uso del context con 2 funciones que toman los "value" del input y el filtrado.

##### `RecipesListContainer`

En este componente se evalua la busqueda/filtrado con la información recibida por el context.
Ya que no se trabajo con un backend o base de datos, se implemento en una const un listado de recetas hardcodeada con valores estáticos.
El resultado lo guarda en un array y devuelve un componente "RecipesList" pasandole como parametro este array.


##### `RecipesList`

recibe como parametro un array de recetas, el cual itera mediante .map, y devuelve un componente "Recipe" por cada receta, una por una.

##### `Recipe`

toma una receta y la muestra visualmente con su nombre, review y su opción cooked before.

##### `StartsReviews`

toma la info review de cada receta y evalua cuantas estrella tiene y las colorea dependiendo el numero de estrellas.

##### `AddBtn`

componente boton utilizado en un futuro para agregar una receta.

## Conlucion

Para este proyecto decidi hacer los componentes que crei necesarios para realizar las funciones que implemente, es cierto que si quisiera agregar mas funciones tambien deberia crear más componentes, ej: el boton de "cooked before". Tambien en el caso de que la App cresca o si buscan agregar y modificar recetas, como estaba previsto en el challenge avanced.

Muchas gracias por la oportunidad.
