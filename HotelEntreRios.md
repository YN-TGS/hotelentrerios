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
- Sin formulario (decisión del cliente, 25-sep-2026): solo teléfono, dirección y mapa
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

### Versión 1.3 — Contacto sin formulario + mapa real (2026-09-25)
- **Formulario eliminado** por decisión del cliente (el hotel no revisa correo). Se quitaron el HTML, la simulación en `main.js` y el CSS `.contact-form`.
- Sección contacto: teléfono destacado, dirección con enlace "Cómo llegar" (Google Maps con ruta), horario y botón "Llamar ahora"; mapa a la derecha (abajo en celular).
- Mapa: embed real de Google Maps con la ficha "Hotel Entre Rios - Salamanca" (vista satélite).

### Versión 1.4 — Detalles (2026-09-25)
- Hero: "Reservar ahora" → "Contáctenos" (completa el cambio 6 de la v1.1).
- Footer: íconos de Facebook e Instagram desactivados (comentados en el HTML) hasta tener las URLs reales. WhatsApp se mantiene.

### Versión 1.5 — Feedback del cliente (2026-09-25)
- "Contáctenos" → "Contacto" (navbar, hero y tarjetas de habitaciones).
- Hero: "Un refugio" → "Su refugio"; título más pequeño (celular 38→30px, PC máx. 88→67px).
- Cliente confirmó **piscina**: reemplaza a "Seguridad 24/7" en Nosotros y a "Entorno Natural" en Servicios; agregada al footer.
- "Seguridad 24/7" eliminado a pedido del cliente. Recepción 24/7 confirmada.
- WhatsApp confirmado: botones "Llamar" + "WhatsApp" (wa.me) en contacto.
- Enlaces de servicios del footer ahora van a `#servicios` (antes `#`).

### Versión 1.6 — Horarios confirmados (2026-09-25)
- Check-in 12:30 / Check-out 11:30 (confirmado por el hotel; antes 14:00 / 11:00 sin confirmar).

---

## Pendiente / Próximos pasos

- [ ] **Redes**: cuando existan las URLs, descomentar Facebook/Instagram en el footer y poner los enlaces
- [ ] **Dominio**: hotelentrerios.cl sigue mostrando el sitio viejo; falta apuntarlo a GitHub Pages

---

## Notas técnicas

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
