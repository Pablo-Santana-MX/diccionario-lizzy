# 🌸 Diccionario Lizzy (PWA)

![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-pink?style=for-the-badge)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-rose?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> Un diccionario digital progresivo (PWA) impulsado por el corpus de la RAE con una estética neumórfica rosa futurista. / A progressive digital dictionary (PWA) powered by the RAE corpus with a futuristic pink neumorphic aesthetic.

🔗 **[Ver Demo en línea / Live Demo](https://TU_USUARIO.github.io/diccionario-lizzy/)**

---

## 📌 Descripción / Description

### 🇪🇸 Español
Este proyecto implementa un diccionario digital basado en el corpus de la RAE en formato JSON. Al funcionar como una **Progressive Web App (PWA)**, permite su instalación nativa en dispositivos móviles y garantiza el uso sin conexión a internet.

**Características principales:**
* 📖 Definiciones exactas tomadas del corpus RAE.
* ⚡ Búsqueda rápida con sugerencias en tiempo real.
* 📱 Interfaz ligera, fluida y 100% optimizada para móviles.
* 📥 Instalable como aplicación independiente (`manifest.json` y `service-worker.js`).

### 🇬🇧 English
This project implements a digital dictionary based on the RAE corpus in JSON format. Built as a **Progressive Web App (PWA)**, it allows native installation on mobile devices and ensures full offline functionality.

**Key features:**
* 📖 Accurate definitions sourced from the RAE corpus.
* ⚡ Fast search functionality with real-time suggestions.
* 📱 Lightweight, smooth, and 100% mobile-optimized interface.
* 📥 Installable as a standalone app via `manifest.json` and `service-worker.js`.

---

## 🗂️ Estructura del Proyecto / Project Structure

```text
diccionario-lizzy/
├── app/
│   ├── index.html           # Interfaz principal / Main UI
│   ├── style.css            # Estilos neumórficos / Neumorphic styles
│   ├── manifest.json        # Configuración PWA / PWA config
│   ├── service-worker.js    # Caché y soporte offline / Offline support
│   └── /icons               # Íconos de la app / App icons
├── data/
│   └── rae_dictionary.json  # Corpus RAE en JSON / RAE JSON corpus
└── docs/
    └── README.md            # Documentación / Documentation

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
