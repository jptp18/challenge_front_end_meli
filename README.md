# ![Mercado Libre](https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadolibre/logo__large_plus.png) Challenge Frontend MELI  

### **Autor:** Juan Pablo Trejo Padilla  

Repositorio desarrollado para el challenge de Frontend de Mercado Libre.  

---

## 📖 Introducción  
Este proyecto consiste en una aplicación web desarrollada en **ReactJS** que permite buscar, listar y visualizar los detalles de productos disponibles en Mercado Libre, consumiendo su API oficial.  

El repositorio está estructurado en dos partes principales:  
1. **Backend**: Consume la API de Mercado Libre y expone endpoints específicos que el frontend utiliza.  
2. **Frontend**: Contiene las vistas y funcionalidades de la aplicación, diseñadas para ofrecer una experiencia intuitiva y fluida.  

---

## 🛠️ Tecnologías y Paquetes  

### **Backend**  
- [NodeJS](https://nodejs.org/es/) - Entorno de ejecución para JavaScript.  
- [Express](https://expressjs.com/) - Framework para construir aplicaciones web y APIs.  
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar peticiones a la API de Mercado Libre.  

### **Frontend**  
- [ReactJS](https://react.dev/) - Biblioteca para construir interfaces de usuario.  
- [Redux](https://redux.js.org/) - Gestión de estado de la aplicación.  
- [Sass](https://sass-lang.com/) - Preprocesador CSS para estilos más organizados y mantenibles.  

---

## 🚀 Instalación y Despliegue  

### **Backend**  
El proyecto del backend estará disponible por defecto en [http://localhost:3000/](http://localhost:3000/).  

1. Navega al directorio del backend:  
   ```bash
   cd backend
   ```bash

2. Instala las dependencias:  
   ```bash
   npm install
   ```bash

3. Inicia el servidor:
   ```bash
   npm start
   ```bash

### **Frontend**  

El proyecto del backend estará disponible por defecto en [http://localhost:3001/](http://localhost:3001/).

1. Navega al directorio del backend:  
   ```bash
   cd frontend
   ```

2. Instala las dependencias:  
   ```bash
   npm install
   ```

3. Inicia la aplicación:
   ```bash
   npm start
   ```

## 🧩 Funcionalidades

1. **Búsqueda de productos:** Ingresa un término en el buscador para obtener resultados relevantes desde la API de Mercado Libre.

2. **Lista de resultados:** Muestra una vista resumida de los productos encontrados, incluyendo precios y nombres.

3. **Detalles del producto:** Proporciona información ampliada de un producto seleccionado, como descripción, precio e imagen.


## 📚 Estructura del Proyecto

**Backend**

- **routes:** Contiene las rutas y endpoints configurados.

- **utils:** Funciones auxiliares para formatear datos.


**Frontend**

- **components:** Componentes reutilizables de React.
- **redux:** Configuración y gestión del estado global.
- **scss:** Archivos Sass organizados por módulos.


## 📂 Manejo de control de versiones

Se trabajó el proyecto separando los desarrollos mediante ramas y asi tener un mejor manejo de los cambios realizados.

- **Rama main:** La rama principal del proyecto que se actualiza con los cambios confirmados desde `develop`.
- **Rama develop:** Contiene la integración de todos los desarrollos realizados. Se mantiene sincronizada con `main` una vez se confirma que todo funciona correctamente.
- **Ramas feature:** Estas ramas se crean para implementar desarrollos específicos. Cada una parte de `develop`, y tras comprobar su correcto funcionamiento, se hace un merge a `develop`.

## **Notas**

- Las imágenes extraídas desde la API para la lista de búsqueda y detalle de producto tienen un tamaño de 90x90, lo cual genera una apariencia pixelada al ajustarse al tamaño solicitado en diseño (180x180). Para mejorar la visualización, en la lista de búsqueda se usaron las imágenes originales de 90x90.
