# curso-Patrones-RenderYComposicion-ReactJs-platzi

# Render Props
-El término "render prop" se refiere a una técnica para compartir código entre componentes de React utilizando un accesorio cuyo valor es una función.

# HOC -> High Order Components
- Son funciones dentro de otras funciones 
- la funcion mas interna retorna un componente
- 

-----------

## Commits

# Composicion de componentes 
- Creamos componente TodoHeader para el encabezado y enviamos como children dos componentes
- Realizamos composicion de componentes para TodoCounter y TodoSearch, para enviar las propiedades directamente desde el AppUi y no desde React.context.

# Cambiando todo TODO-Machine por composicion de componentes
- Eliminamos TodoContext y creamos un hook useTodos.
- Se elimina AppUI y se pasa el renderizado directamente a App.
- En App hacemos uso de useTodos trayendo todas las propiedades que pasaremos a los componentes.
- pasamos las propiedades de App a TodoForm y elimina TodoContext del Form

# Render Props
- cambiamos TodoList al estilo Render props.
- enviamos las funciones al componente y en este realiamos los condicionales

# Ejemplo de Render props y RenderFunctions
- Pasamos las propiedades a TodoList por Render props y Render Funcions
- las Render functions es por medio de children.

# React.Children y React.cloneElement
- React.Children.toArray: Permite que el contenedor de dos o mas componentes React, sean tratados como Array.
- React.cloneElement : Nos permite clonar 1 componente del contenedor y pasarle una o mas propiedades
-> En nuestro caso los componentes <TodoSearch> y <TodoCounter> reciben la propiedad loading
- como estos 2 componentes estan dentro de un componente padre llamado <TodoHeader>, Nosotros podemos enviarle esa propiedad al <TodoHeader> y utilizar React.Children para iterar los dos componentes hijos como un array y React.cloneElement para enviarle la propiedad loading.
- Estas herramientas no son muy populares pero existen.

# Notificando cambios StrorageEventListener (utilzanco Hight Order Component)

- Creamos un nuevo componente llamado ChangeAlert.
- Luego lo agregamos despues del componente createTodoButton.
- Se crea componente withStoraengeListener.
- withStoraengeListener sera HOC.
- lo importamos en ChangeAlert.
- En App importamos el resultado del componente ChangeAlert.
- se Crea un estado en la segunda funcion del HOC.
- En este estado vamos a guardar si hubo cambios en nuestra aplicacion.
- Creamos un addEvenListener de window que escuhce los cambios en storage
- si el cambio es en el storage de nuestra aplicacion , cambiamos el estado.
- Creamos en useLocalStorage un estado para para recargar useEffect cada vez que tengamos un cambio en storage y sincronizar todas las ventanas de la aplicación.
- Se crea funcion sincronizeItem para para retornar el control del estado de sincronización. 
- sincronizeItem se utiliza para cuando le demos al boton para sincronizar , este active el useEffect y por ende recarge lapagina denuevo.