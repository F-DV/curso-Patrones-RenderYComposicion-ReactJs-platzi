# curso-Patrones-RenderYComposicion-ReactJs-platzi

# Render Props
-El término "render prop" se refiere a una técnica para compartir código entre componentes de React utilizando un accesorio cuyo valor es una función.

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