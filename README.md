# curso-Patrones-RenderYComposicion-ReactJs-platzi



## Commits

# Composicion de componentes 
- Creamos componente TodoHeader para el encabezado y enviamos como children dos componentes
- Realizamos composicion de componentes para TodoCounter y TodoSearch, para enviar las propiedades directamente desde el AppUi y no desde React.context.

# Cambiando todo TODO-Machine por composicion de componentes
- Eliminamos TodoContext y creamos un hook useTodos.
- Se elimina AppUI y se pasa el renderizado directamente a App.
- En App hacemos uso de useTodos trayendo todas las propiedades que pasaremos a los componentes.
- pasamos las propiedades de App a TodoForm y elimina TodoContext del Form


