# 🌸 Diccionario Lizzy (PWA)

![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-pink)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-rose)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Descripción (Español)
Este proyecto implementa un diccionario digital con estética neumórfica rosa futurista, basado en el corpus de la RAE en formato JSON.  
Funciona como Progressive Web App (PWA), lo que permite instalarlo en dispositivos móviles y usarlo incluso sin conexión.

Características:
- Definiciones tomadas del corpus RAE  
- Búsqueda rápida con sugerencias en tiempo real  
- Interfaz ligera y optimizada para móvil  
- Instalación como aplicación gracias a manifest.json y service-worker.js  

## 📌 Description (English)
This project implements a digital dictionary with a futuristic pink neumorphic design, based on the RAE corpus in JSON format.  
It works as a Progressive Web App (PWA), allowing installation on mobile devices and offline usage.

Features:
- Definitions from RAE corpus  
- Fast search with real-time suggestions  
- Lightweight, mobile-optimized interface  
- Installable as an app via manifest.json and service-worker.js  

## 🌐 Demo en línea
👉 https://TU_USUARIO.github.io/diccionario-lizzy/

## 🗂️ Estructura del proyecto
diccionario-lizzy/
├── app/
│   ├── index.html          # Interfaz principal
│   ├── style.css           # Estilos neumórficos rosa
│   ├── manifest.json       # Configuración PWA
│   ├── service-worker.js   # Cache y soporte offline
│   └── /icons              # Íconos de la app
├── data/
│   └── rae_dictionary.json # Corpus RAE en JSON
└── docs/
    └── README.md           # Documentación

## ⚙️ Instalación / Installation
Clonar repositorio:
git clone https://github.com/usuario/diccionario-lizzy.git
cd diccionario-lizzy/app

Servir localmente:
python -m http.server 8080

Abrir en navegador: http://localhost:8080  
En Android: usar Chrome → “Añadir a pantalla principal”.

## 🚀 Tecnologías / Technologies
- HTML/CSS/JS → interfaz neumórfica rosa  
- PWA (Service Worker + Manifest) → instalación en móvil y uso offline  
- GitHub Pages / Netlify → despliegue web  

## 🎯 Objetivo profesional
Este proyecto demuestra competencias en:
- Data Integration: uso de corpus RAE en JSON  
- Frontend Development: interfaz clara y atractiva  
- Software Deployment: empaquetado como PWA instalable  
- Technical Communication: documentación bilingüe y reproducible  

## 📄 Licencia
Este proyecto está bajo la licencia MIT.  
Puedes usarlo, modificarlo y compartirlo libremente.

## 📌 Próximos pasos
- Añadir sinónimos y ejemplos desde corpus abiertos (Wiktionary, Wordnet)  
- Mejorar búsqueda avanzada (prefijos, sufijos, categorías)  
- Publicar versión estable en Google Play vía empaquetado APK  
