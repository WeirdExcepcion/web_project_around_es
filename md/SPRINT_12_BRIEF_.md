🌍 Around The U.S. — Sprint 12
Conexión con API y Persistencia de Datos 🌐
🧠 Introducción

En esta etapa del proyecto, la aplicación Around The U.S. evoluciona de un entorno estático a una arquitectura completamente conectada con servidor.

El cambio clave fue dejar de depender de datos locales para trabajar directamente con una API REST, permitiendo que toda la información (usuarios, tarjetas, likes, etc.) se gestione en tiempo real.

Esto acerca el proyecto mucho más a un entorno real de producción.

🔌 Integración con Backend

La aplicación ahora se comunica constantemente con un servidor:

Carga inicial optimizada:
Se obtienen los datos del usuario y las tarjetas al mismo tiempo usando promesas combinadas.
Persistencia real:
Cualquier acción del usuario queda guardada en base de datos (ya no es temporal).
👤 Manejo de Usuario

Se amplían las capacidades del perfil:

Edición de información personal (nombre y bio)
Actualización de avatar mediante URL
Sincronización automática con el backend

Todas estas acciones utilizan solicitudes tipo PATCH.

🃏 Sistema de Tarjetas

La lógica de las tarjetas ahora es completamente dinámica:

Creación
Se pueden agregar nuevas tarjetas enviando datos al servidor
Eliminación
Solo el creador puede borrar su contenido
Se incluye confirmación previa antes de eliminar
Likes
Estado sincronizado con el servidor
Respuesta visual inmediata al usuario
Uso de métodos PUT y DELETE para activar/desactivar
⚡ Experiencia de Usuario

Se añadieron mejoras clave en interacción:

Estados de carga:
Botones que cambian a “Guardando…” o “Procesando…” durante peticiones
Manejo de errores:
Captura de fallos en consola para debugging (.catch())
🧱 Stack Tecnológico
JavaScript (ES6+)
Promesas
Fetch API
Modularización basada en clases
Arquitectura basada en componentes
Api.js
Card.js
Section.js
Popup.js
Webpack
Bundling
Optimización de assets
Babel
HTML5 + CSS3
Metodología BEM
Git / GitHub
Control de versiones
⚙️ Cómo ejecutar el proyecto
Clonar el repositorio:
git clone https://github.com/WeirdExcepcion/web_project_around_es.git
Instalar dependencias:
npm install
Ejecutar entorno de desarrollo:
npm run dev
Generar build de producción:
npm run build
🚀 Versión en vivo

Puedes probar la aplicación aquí:
👉 https://WeirdExcepcion.github.io/web_project_around_es/

👤 Autor

Dan (WeirdExcepcion)
GitHub: https://github.com/WeirdExcepcion