# 🌟 Mythology Wiki 🌟

### 🖥️ **Backend**
El **Backend** está desarrollado con **Node.js** y **Express**, y se conecta a una base de datos **MongoDB** para gestionar tanto los datos de la Wiki como la información de los usuarios. Además, implementa un sistema de **autenticación seguro** utilizando **JWT** (JSON Web Tokens).

**Principales responsabilidades del Backend:**
- **Conexión a MongoDB**: Almacena y gestiona la información de la Wiki y los usuarios.
- **Autenticación y autorización**: Utiliza JWT para proteger rutas y garantizar que solo los usuarios autenticados accedan a ciertas funcionalidades.
- **Gestión de usuarios**: Permite la creación, modificación y eliminación de usuarios, asegurando la seguridad de las contraseñas mediante encriptación con **bcrypt**.

---

### 📱 **Frontend**
El **Frontend** está construido con **React** y **Redux**, proporcionando una interfaz de usuario interactiva que muestra los datos de la Wiki y permite a los usuarios gestionar sus configuraciones.

**Principales responsabilidades del Frontend:**
- **Visualización de datos**: Muestra la información de mitos y leyendas de diversas culturas de forma dinámica.
- **Panel de usuario**: Los usuarios pueden actualizar su información personal, como su nombre o apodo.
- **Gestión de usuarios por admins**: Los administradores pueden modificar los datos de otros usuarios y gestionar sus roles.

---

## Tabla de Contenidos
1. [Autor](#autor)
2. [Descripción](#descripción)
3. [Instalación](#instalación)
4. [Dependencias](#dependencias)
5. [Funcionalidad](#funcionalidad)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Uso del Proyecto](#uso-del-proyecto)

### Autor
Sergio Martínez Padilla

### 🖥️ **Descripción (Backend)**

El backend está desarrollado con **Node.js**, **Express**, y **MongoDB**. Proporciona la base para conectar con la base de datos MongoDB y manejar las rutas de la API. Además, cuenta con rutas protegidas mediante **JWT**, lo que garantiza una autenticación segura para el manejo de usuarios y datos.

### 📱 **Descripción (Frontend)**

El frontend está construido con **React** y **Redux**, y permite a los usuarios interactuar con los mitos almacenados en la base de datos. Los usuarios pueden explorar mitos y leyendas de diferentes culturas y modificar algunos de sus datos personales en la sección de **Configuración**.  
Si el usuario tiene el rol de **admin**, podrá gestionar la información de otros usuarios, otorgando un control total sobre el sistema.

---

## Instalación

Sigue estos pasos para poner en marcha el proyecto tanto en el **Backend** como en el **Frontend**.

### Pasos para la instalación:

1. **Clona el repositorio:**

    git clone https://github.com/SerMP904/Mythology_wiki.git

2. **Abre el proyecto en Visual Studio Code.**

3. **Instalación y ejecución del Backend:**

    - Navega al directorio del backend:

    cd Backend

    - Instala las dependencias necesarias:

    npm install

    - Ejecuta el backend en modo desarrollo:

    npm run dev

4. **Instalación y ejecución del Frontend:**

    - Navega al directorio del frontend:

    cd ../Frontend

    - Instala las dependencias:

    npm install

    - Ejecuta el frontend en modo desarrollo:

    npm run dev


---

### Backend
- **express**: Framework minimalista para Node.js para gestionar rutas y peticiones HTTP.
- **cors**: Middleware para habilitar solicitudes de origen cruzado (CORS).
- **dotenv**: Carga las variables de entorno desde un archivo `.env`.
- **bcrypt**: Para encriptar las contraseñas de los usuarios.
- **jsonwebtoken**: Para generar y verificar JSON Web Tokens (JWT).
- **mongoose**: ODM para MongoDB, facilita la interacción con la base de datos.
- **nodemon**: Herramienta para reiniciar automáticamente el servidor en desarrollo.

### Frontend
- **react**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **react-dom**: Implementación de la interfaz DOM para React.
- **react-redux**: Conecta React con el store de Redux.
- **redux**: Biblioteca para gestionar el estado global de la aplicación.
- **react-router-dom**: Para la gestión de rutas en la aplicación React.
- **vite**: Herramienta de construcción que permite un desarrollo rápido.

## Funcionalidad del Proyecto

### 🖥️ **Backend**

1. **Autenticación con JWT**
   - 🔒 **Protección de rutas**: Solo los usuarios autenticados pueden acceder a rutas protegidas.
   - 🔑 **Middleware con autenticación**: Asegura que las peticiones incluyan un token válido para acceder a ciertos recursos.
   - 🛡️ **Validación de tokens**: Verifica la validez del JWT para garantizar que las solicitudes provengan de usuarios legítimos.

2. **Gestión de usuarios**
   - ✍️ **Registrar nuevos usuarios**: Permite que los usuarios se registren en la plataforma.
   - 🔐 **Contraseñas encriptadas con bcrypt**: Utiliza bcrypt para encriptar las contraseñas, asegurando la seguridad de los datos del usuario.

3. **Conexión a Mongoose**
   - 🗄️ **Esquemas Mongoose**: Utiliza Mongoose para definir esquemas de datos, facilitando la interacción con la base de datos MongoDB.

---

### 📱 **Frontend**

1. **Wiki**
   - 🌍 **Información sobre culturas antiguas**: Muestra mitos, leyendas y datos históricos de diferentes culturas en una interfaz interactiva.

2. **Configuración**
   - ✏️ **Cambio de nombre o apodo**: Permite al usuario personalizar su nombre o apodo dentro de la plataforma.

3. **Configuración de usuarios**
   - 👤 **Gestión de usuarios por admin**: Si el usuario tiene el rol de "admin", puede modificar la información de otros usuarios, incluyendo roles y detalles.

4. **Logout**
   - 🚪 **Cerrar sesión**: Permite al usuario salir de la plataforma de forma segura.

🖥️ Estructura (Backend)

El archivo '.env' contiene las siguientes variables de entorno:

- **PORT**: Dirección del puerto donde se ejecuta el servidor.
- **MONGO_URL**: URL de conexión a la base de datos **MongoDB**.
- **BCRYPT_ROUNDS**: Número de rondas para la encriptación de contraseñas con **bcrypt**.
- **TOKEN**: Token utilizado para la encriptación de contraseñas.
- **TOKEN_REFRESH**: Segundo token utilizado para la renovación de sesiones o tokens.

Estructura (Frontend)
/src
  /components
  /core
  /pages

app.jsx
main.jsx

### 📱 **Uso del Proyecto (Frontend)**

1. **Ejecuta el servidor de desarrollo**  
   - 🖥️ **Iniciar servidor**: En la carpeta **Frontend**, abre una terminal y ejecuta el siguiente comando para iniciar el servidor:

     ```bash
     npm run dev
     ```

2. **Abre la URL generada**  
   - 🌐 **Accede a la URL**: Una vez que el servidor esté en funcionamiento, abre tu navegador y accede a la URL generada (generalmente `http://localhost:3000`).

3. **Inicia sesión**  
   - 🔑 **Login de usuario**: Usa un **email** y **contraseña válidos** para ingresar a la aplicación.

4. **Explora la Wiki**  
   - 📚 **Acceder a la Wiki**: Después de iniciar sesión, podrás explorar la información sobre mitos y leyendas en la Wiki. También puedes interactuar con las opciones en el **header** o **footer** de la página.


