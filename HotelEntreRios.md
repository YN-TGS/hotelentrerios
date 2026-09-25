# HotelEntreRios.md — Registro de Desarrollo
**Proyecto:** Renovación web Hotel Entre Rios  
**URL producción:** https://yn-tgs.github.io/hotelentrerios/  
**Repositorio:** https://github.com/YN-TGS/hotelentrerios  
**Directorio local:** `D:\DEV\Web\ClaudeCode\GitHub\hotelentrerios\`  
**Última actualización:** 2026-09-25

---

## Stack Tecnológico

- HTML5 + Bootstrap 5.3.2
- Bootstrap Icons 1.11.3
- Google Fonts: Playfair Display (display) + Lato (body/slogan)
- CSS personalizado: `assets/css/style.css`
- JS vanilla: `assets/js/main.js`
- Formulario: FormSubmit.co → `reservas@hotelentrerios.cl`
- Hosting: GitHub Pages (rama `main`, raíz `/`)

---

## Estructura de archivos

```
hotelentrerios\
├── index.html
├── HotelEntreRios.md       ← este archivo
├── deploy-github.bat       ← script de deploy inicial (ya ejecutado)
├── .gitignore
├── assets\
│   ├── css\style.css
│   ├── js\main.js
│   └── imgs\
│       ├── logohotel.png
│       └── galeria\hotel\  ← 29 fotos HOTEL-0xx.JPG (misma ruta que el sitio viejo)
└── Old\
    ├── contenido-extraido.md
    ├── index-original.html
    └── galeria-original.txt
```

---

## Secciones del sitio

| Sección        | ID HTML         | Estado    |
|----------------|-----------------|-----------|
| Navbar         | `#navbar`       | ✅ Listo  |
| Hero           | `#hero`         | ✅ Listo  |
| Strip rápido   | (div)           | ✅ Listo  |
| Nosotros       | `#nosotros`     | ✅ Listo  |
| Habitaciones   | `#habitaciones` | ✅ Listo  |
| Servicios      | `#servicios`    | ✅ Listo  |
| Galería        | `#galeria`      | ✅ Listo  |
| Contacto       | `#contacto`     | ✅ Listo  |
| Footer         | `#footer`       | ✅ Listo  |

---

## Historial de cambios

### Versión 1.0 — Creación inicial (2026-02-17)
- Análisis y extracción del sitio original en `Old/`
- Diseño completo desde cero: 9 secciones, lightbox propio, formulario simulado
- Deploy a GitHub Pages vía Git Bash
- **Ubicación inicial:** `D:\DEV\Web\ClaudeCode\HotelEntreRios\`

### Versión 1.1 — Revisión cliente (2026-02-17)
- **Reubicación:** carpeta movida a `D:\DEV\Web\ClaudeCode\GitHub\hotelentrerios\`
- Cambios aplicados según feedback del cliente:

| # | Cambio | Estado |
|---|--------|--------|
| 1 | Eliminar "de la naturaleza" del texto hero | ✅ Hecho |
| 2 | Slogan: "Un refugio entre montañas" | ✅ Hecho |
| 3 | Tipografía slogan: palo seco (Lato/Arial) | ✅ Hecho |
| 4 | Habitaciones: solo Simple y Doble (eliminada Familiar) | ✅ Hecho |
| 5 | Servicios: "Climatización" → "Calefacción" | ✅ Hecho |
| 6 | Botón "RESERVAR" → "CONTÁCTENOS" (navbar + cards) | ✅ Hecho |
| 7 | Eliminar título "Reservas y Consultas" en sección contacto | ✅ Hecho |
| 8 | Formulario: título "Contacto / Solicitud de reservas" | ✅ Hecho |
| 9 | Formulario: envío real vía FormSubmit a reservas@hotelentrerios.cl | ✅ Hecho |
| 10 | Footer: "rodeado de naturaleza" → "en la precordillera del Valle del Choapa" / "una década" → "más de dos décadas" | ✅ Hecho |
| 11 | Footer: "Diseño VyASA — Hosting SomosWeb.cl" | ✅ Hecho |

### Versión 1.2 — Galería y logo locales (2026-09-25)
- Logo y las 29 fotos descargados a `assets/imgs/`. El sitio ya no depende del servidor viejo.
  - Se respetó la ruta original `assets/imgs/galeria/hotel/`, así que el `og:image` (absoluto a hotelentrerios.cl) seguirá funcionando al migrar el dominio.
- Galería: 9 fotos visibles + botón "Ver las 29 fotos" / "Ver menos"; el lightbox recorre las 29.
- Cada foto tiene texto alternativo descriptivo (antes todas decían "Hotel Entre Rios").
- Logo a color (antes se forzaba a silueta blanca con `filter` y quedaba una mancha). Navbar 56px, footer 90px.
- Corregido el alt de la foto de "Nosotros" (decía "Exterior" y es una habitación).

---

## Pendiente / Próximos pasos

- [ ] **Confirmar FormSubmit**: primer envío del formulario activa el email de verificación en `reservas@hotelentrerios.cl` — el cliente debe confirmar ese correo para activar el servicio
- [ ] **Mapa Google Maps**: la URL embed actual es placeholder. Reemplazar con embed real de la ubicación exacta del hotel en Salamanca
- [ ] **Formulario NO envía**: `main.js` hace `e.preventDefault()` y simula el envío (resto del prototipo). Hay que quitar la simulación. Pendiente de los datos del cliente
- [ ] **Hero**: el botón aún dice "Reservar ahora" (el cliente pidió "Contáctenos")
- [ ] **Redes**: Facebook e Instagram del footer apuntan a `#`
- [ ] **Confirmar con el cliente**: horarios check-in/out, recepción y seguridad 24h, WhatsApp. Las fotos muestran **piscina** y **tina**, que la página no menciona
- [ ] **Dominio**: hotelentrerios.cl sigue mostrando el sitio viejo; falta apuntarlo a GitHub Pages

---

## Notas técnicas

### FormSubmit
- No requiere registro previo
- **Primera vez**: al enviar el formulario, FormSubmit envía un email de activación a `reservas@hotelentrerios.cl`. El cliente debe hacer clic en el enlace de ese correo
- Después de activar, todos los envíos llegan directo al correo
- `_next`: redirige al usuario de vuelta a `#contacto` tras enviar

### Deploy a GitHub Pages
```bash
# Para subir cambios futuros (desde Git Bash):
cd /d/DEV/Web/ClaudeCode/GitHub/hotelentrerios
git add .
git commit -m "descripcion del cambio"
git push
```

### Variables CSS principales (`assets/css/style.css`)
```css
--color-primary:   #2C5F6E;   /* azul río */
--color-secondary: #4A8B74;   /* verde vegetación */
--color-accent:    #C8954A;   /* ocre / dorado */
--color-dark:      #1A2E35;   /* fondo oscuro */
--color-light:     #F5F0E8;   /* crema arena */
--font-display:    'Playfair Display', Georgia, serif;
--font-body:       'Lato', Arial, sans-serif;
```
