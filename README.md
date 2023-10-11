# Ejercicio React

## Ejercicio
### Diseño
![UI](/ejercicio.jpg?raw=true)
* Los valores con bordes (Monto Total y Plazo) son inputs de numeros y deberían modificar el slider al cambiar de valor.
* Los textos Obtené Crédito y Ver detalle de cuotas son botones.
  * Obtené Créidto debería abrir un modal con el texto "¡Crédito solicitado con éxito!".
  * Ver detalle de cuotas debería abrir un modal con el detalle de las cuotas.
* La font utilizada es Montserrat (agregarla al html).

### Implementación
1. Maquetar el diseño provisto creando los componentes que crea necesarios.
2. Implementar la siguiente funcionalidad:
    1. Utilizar la libreria [rc-slider](https://github.com/react-component/slider) para dar funcionalidad a los sliders.
    2. Al mover los sliders se deberan actualizar los valores de Monto Total y Plazo al valor actual del slider.
    3. Los inputs de Monto Total y Plazo fijo deberán ser editables por el usuario y modificarl el valor del slider.
    3. Deberá actualizarse el valor de Cuota fija por mes siendo este valor el Monto total seleccionado, dividido el Plazo seleccionado.

## Codigo provisto
Código [Vite.js](https://vitejs.dev/) base

### Estructura de archivos

````
public/
src/
|- main.jsx _______________________________ # entrada de la aplicación
|- App.jsx _________________________________ # Componente principal
````

### Instalación

1. Descargar el codigo de Github con la opción de descarga o hacer un fork del repositorio (a gusto). 
2. `yarn` o `npm install` para instalar paquetes npm 
3. `yarn dev` o `npm run dev` para inicializar server de desarrollo