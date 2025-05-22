# 🛒 CRUD Lista de Mercado

Este proyecto es una aplicación web para gestionar una lista de compras del mercado y un inventario de lo que ya tienes en casa.

## 🚀 Tecnologías

- Node.js + Express
- EJS para el renderizado del frontend
- Bootstrap para los estilos
- MySQL (usa variables de entorno, ideal para Render)

## ⚙️ Variables de entorno necesarias

Crea un archivo `.env` en tu entorno de despliegue con estas variables:

```
DB_HOST=tu_host
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=mercado_db
DB_PORT=3306
```

## 🧾 Script SQL para la base de datos

```sql
CREATE DATABASE mercado_db;

USE mercado_db;

CREATE TABLE articulos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  cantidad INT DEFAULT 1,
  categoria VARCHAR(50),
  estado ENUM('comprar', 'casa') DEFAULT 'comprar'
);
```

---
Desarrollado por Liliana ✨
