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