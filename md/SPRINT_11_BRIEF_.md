🌐 Around The U.S. — Sprint 11
Sistema de Autenticación y Acceso 🔐
🧩 Overview

Este proyecto corresponde a una evolución de la aplicación Around The U.S., desarrollada con React. En esta fase se implementa un sistema completo de autenticación que controla el acceso a la aplicación y protege la información del usuario.

El enfoque principal fue integrar un flujo seguro de registro, login y validación de sesión, utilizando tokens JWT para garantizar que solo usuarios autenticados puedan interactuar con el contenido.

🔐 Sistema de Autenticación

Se implementó un flujo completo de acceso de usuarios:

Registro (Sign Up): Permite crear nuevas cuentas mediante email y contraseña.
Inicio de sesión (Sign In): Verificación de credenciales para acceder a la app.
Control de acceso: Las rutas privadas están protegidas y requieren autenticación.
Persistencia de sesión: El usuario permanece logueado gracias al almacenamiento del token en localStorage.
Logout: Eliminación del token y cierre de sesión seguro.
🧠 Lógica de Seguridad

La autenticación se basa en JSON Web Tokens (JWT):

El servidor genera un token al iniciar sesión.
Este token se almacena en el navegador.
Se valida en cada petición para mantener la sesión activa.
Si el token no es válido o no existe, el usuario pierde acceso.
🖥️ Experiencia de Usuario

Se mejoraron varios elementos visuales y de interacción:

Header dinámico

El contenido cambia dependiendo del estado del usuario:

En registro → enlace a login
En login → enlace a registro
En la app → muestra el email + botón de logout
Feedback visual

Se agregó un sistema de notificaciones mediante modal:

Confirmación de registro exitoso ✅
Error en registro o login ❌
🧱 Tecnologías utilizadas
React.js — Base de la aplicación
React Router — Manejo de navegación (SPA)
JWT — Autenticación segura
CSS (BEM) — Organización de estilos
Context API (si aplica) — Manejo del estado global
⚙️ Setup del proyecto
Clonar el repositorio:
git clone https://github.com/WeirdExcepcion/web_project_around_es.git
Instalar dependencias:
npm install
Ejecutar el proyecto:
npm start
🧬 Flujo de autenticación

La lógica se centraliza en un módulo (auth.js o similar), que maneja las peticiones al backend:

register(email, password) → crea usuario
authorize(email, password) → obtiene token
checkToken(token) → valida sesión
🚀 Demo del proyecto

Puedes verlo funcionando aquí:
👉 👉 https://WeirdExcepcion.github.io/web_project_around_es/
👤 Autor

Dan (WeirdExcepcion)
GitHub: https://github.com/WeirdExcepcion