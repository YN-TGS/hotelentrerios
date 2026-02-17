# HotelEntreRios.md — Registro de Desarrollo
**Proyecto:** Renovación web Hotel Entre Rios  
**URL producción:** https://yn-tgs.github.io/hotelentrerios/  
**Repositorio:** https://github.com/YN-TGS/hotelentrerios  
**Directorio local:** `D:\DEV\Web\ClaudeCode\GitHub\hotelentrerios\`  
**Última actualización:** 2026-02-17

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
│   └── imgs\               ← vacío (imágenes vienen del servidor original)
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

---

## Pendiente / Próximos pasos

- [ ] **Confirmar FormSubmit**: primer envío del formulario activa el email de verificación en `reservas@hotelentrerios.cl` — el cliente debe confirmar ese correo para activar el servicio
- [ ] **Mapa Google Maps**: la URL embed actual es placeholder. Reemplazar con embed real de la ubicación exacta del hotel en Salamanca
- [ ] **Logo**: actualmente se carga desde el servidor original (`hotelentrerios.cl`). Considerar alojar una copia local en `assets/imgs/`
- [ ] **Imágenes propias**: todas las fotos se cargan desde el servidor original. Si el cliente quiere independencia total, descargar y alojar localmente
- [ ] **Deploy de cambios v1.1**: subir a GitHub con git add/commit/push

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
