# Gestión de Cursos Online

Aplicación web desarrollada en React para la gestión de cursos online. Esta herramienta permite crear, leer, actualizar y eliminar (CRUD) cursos de manera eficiente y fácil de usar.

## Características

- Pantalla de bienvenida con redirección automática al dashboard
- Gestión completa de cursos (CRUD)
- Validación de formularios con react-hook-form
- Notificaciones con react-hot-toast
- Diseño responsive adaptado para dispositivos móviles, tablets y escritorio
- Integración con API REST

## Tecnologías utilizadas

- React 19
- Vite 6
- React Router DOM 7
- React Hook Form 7
- React Hot Toast 2
- Fetch API para integración con backend
- CSS responsive personalizado

## Estructura del proyecto

```
frontend/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes reutilizables
│   │   └── ui/      # Componentes UI básicos (Button, Card, etc)
│   ├── hooks/       # Custom hooks
│   ├── pages/       # Componentes de página
│   ├── styles/      # Archivos CSS
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Punto de entrada
└── package.json     # Dependencias
```

## Instalación y ejecución

1. Clonar el repositorio
2. Instalar dependencias:
   ```
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Abrir http://localhost:5173 en el navegador

## API

La aplicación se conecta con una API REST externa:

- Endpoint: `https://retoolapi.dev/6QbyzP/cursos-online`
- Operaciones soportadas: GET, POST, PUT, DELETE
- Formato de datos:
  ```json
  {
    "id": 1,
    "curso": "React Fundamentals",
    "tematica": "Development",
    "instructor": "John Doe",
    "descripcion": "Curso básico de React"
  }
  ```
