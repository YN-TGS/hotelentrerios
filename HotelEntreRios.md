# HotelEntreRios.md — Registro de Desarrollo
**Proyecto:** Renovación web Hotel Entre Rios  
**URL de revisión (cuenta de Gonzalo):** https://yn-tgs.github.io/hotelentrerios/  
**Repositorio:** https://github.com/YN-TGS/hotelentrerios  
**Dominio final:** hotelentrerios.cl (hoy sigue mostrando el sitio VIEJO)  
**Directorio local:** `D:\DEV\Web\ClaudeCode\GitHub\hotelentrerios\`  
**Última actualización:** 2026-09-25 — versión 1.6 (commit `2c89503`), publicada

---

## ▶ Punto de retomada (leer primero)

**Estado:** el sitio está **completo en contenido** y publicado en la URL de revisión. Todo el feedback del cliente hasta el 25-sep-2026 está aplicado (ver v1.5 y v1.6). No hay trabajo a medio hacer ni cambios sin commit.

**Quién es quién:**
- Es el hotel del **abuelo de Gonzalo** (dueño). El **papá de Gonzalo** es quien habla con él y transmite el feedback; Gonzalo y Claude hacen el trabajo.
- Hay dos cuentas de GitHub: **YN-TGS** (Gonzalo, sitios en desarrollo; aquí vive este repo) y **lvilchesa** (papá, sitios terminados). Al terminar, el sitio se **importa** a lvilchesa para que quede independiente (igual que se hizo con Licahue).

**Decisiones tomadas (no volver a proponer):**
- **Sin formulario de contacto.** El hotel no revisa correo; contacto solo por teléfono y WhatsApp. No se muestra ningún email en la página.
- Botones y enlaces dicen **"Contacto"** (no "Reservar" ni "Contáctenos").
- Slogan: **"Su refugio en el Valle del Choapa"**, en tipografía palo seco (Lato).
- Solo habitaciones **Simple y Doble**.
- **Sin "Seguridad 24/7"** (el cliente pidió quitarlo).

**Datos confirmados por el hotel:** teléfono +56 9 9128 7644 **con WhatsApp** · recepción 24/7 · **piscina** · check-in **12:30** / check-out **11:30** · dirección Calle Julio Echeverría #701, Salamanca.  
Los demás servicios (desayuno incluido, WiFi, estacionamiento, calefacción, TV cable, baño privado) vienen de la v1.0; el cliente revisó la página en la v1.1 y no los objetó, pero no se confirmaron uno por uno.

**Preguntas abiertas para el cliente:**
1. ¿Tienen **Facebook / Instagram**? Si no, se pueden dejar desactivados para siempre (no se ven).
2. **Trato usted/tú:** el slogan dice "Su refugio" (usted), pero el resto tutea ("el confort que mereces", "tu estadía", "Contáctanos"). ¿Unificar a usted?
3. La galería tiene una foto de una **habitación con tina** (HOTEL-017). ¿Mencionarla en habitaciones o servicios?

**Próximo paso grande:** con el visto bueno final → migrar a lvilchesa y conectar el dominio (ver "Migración a producción" más abajo).

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

> **Revisión del 25-sep-2026 (antes de la v1.2):** se detectó que el formulario de la v1.1 **nunca envió nada**. `main.js` hacía `e.preventDefault()` y simulaba el envío, algo que había quedado del prototipo. Lo del "✅ Hecho" del punto 9 era falso en la práctica. Quedó resuelto al eliminar el formulario en la v1.3.

### Versión 1.2 — Galería y logo locales (2026-09-25, `91451aa`)
- Logo y las 29 fotos descargados a `assets/imgs/`. El sitio ya no depende del servidor viejo.
  - Se respetó la ruta original `assets/imgs/galeria/hotel/`, así que el `og:image` (absoluto a hotelentrerios.cl) seguirá funcionando al migrar el dominio.
- Galería: 9 fotos visibles + botón "Ver las 29 fotos" / "Ver menos"; el lightbox recorre las 29.
  - La lista original decía "28" pero son 29: HOTEL-019 estaba solo en la portada vieja, no en su galería.
  - Orden: exteriores → piscina → habitaciones → baños; cierra con la panorámica HOTEL-037, que en PC ocupa 2 columnas para tapar el hueco de la última fila.
- Cada foto tiene texto alternativo descriptivo (antes todas decían "Hotel Entre Rios").
- Logo a color (antes se forzaba a silueta blanca con `filter` y quedaba una mancha). Navbar 56px, footer 90px.
- Corregido el alt de la foto de "Nosotros" (decía "Exterior" y es una habitación).

### Versión 1.3 — Contacto sin formulario + mapa real (2026-09-25, `99c8c09`)
- **Formulario eliminado** por decisión del cliente (el hotel no revisa correo). Se quitaron el HTML, la simulación en `main.js` y el CSS `.contact-form`.
- Sección contacto: teléfono destacado, dirección con enlace "Cómo llegar" (Google Maps con ruta), horario y botón "Llamar ahora"; mapa a la derecha (abajo en celular).
- Mapa: embed real de Google Maps con la ficha "Hotel Entre Rios - Salamanca" (vista satélite).

### Versión 1.4 — Detalles (2026-09-25, `906cdb1`)
- Hero: "Reservar ahora" → "Contáctenos" (completa el cambio 6 de la v1.1).
- Footer: íconos de Facebook e Instagram desactivados (comentados en el HTML) hasta tener las URLs reales. WhatsApp se mantiene.

### Versión 1.5 — Feedback del cliente (2026-09-25, `cbd5a52`)
- "Contáctenos" → "Contacto" (navbar, hero y tarjetas de habitaciones).
- Hero: "Un refugio" → "Su refugio"; título más pequeño a pedido del cliente ("usa mucho espacio en celulares"): celular 38→30px, PC máx. 88→67px.
- Cliente confirmó **piscina**: reemplaza a "Seguridad 24/7" en Nosotros y a "Entorno Natural" en Servicios; agregada al footer.
- "Seguridad 24/7" eliminado a pedido del cliente. Recepción 24/7 confirmada.
- WhatsApp confirmado: botones "Llamar" + "WhatsApp" (wa.me) en contacto.
- Enlaces de servicios del footer ahora van a `#servicios` (antes `#`).

### Versión 1.6 — Horarios confirmados (2026-09-25, `2c89503`)
- Check-in 12:30 / Check-out 11:30 (confirmado por el hotel; antes 14:00 / 11:00 sin confirmar). Aparece solo en la franja bajo el hero.
- En celular, check-in y check-out van en líneas separadas (antes el "|" quedaba colgando).

---

## Pendiente / Próximos pasos

- [ ] **Respuestas del cliente** a las 3 preguntas abiertas del punto de retomada (redes, usted/tú, tina)
- [ ] **Visto bueno final** del cliente sobre la URL de revisión
- [ ] **Migración a producción** (cuenta lvilchesa + dominio): ver sección siguiente

---

## Migración a producción (cuando haya visto bueno)

1. En github.com con la cuenta **lvilchesa**: *Import repository* desde `https://github.com/YN-TGS/hotelentrerios` (copia todo el historial y queda independiente).
2. En el repo nuevo: Settings → Pages → rama `main`, raíz `/`. Luego Custom domain = `hotelentrerios.cl` (crea el archivo `CNAME`) y activar *Enforce HTTPS* cuando esté disponible.
3. DNS del dominio: registros A del apex a GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153) y **`www` como CNAME a `lvilchesa.github.io`**. Esto fue lo que destrabó el HTTPS en Licahue (24-sep-2026). **Hoy el DNS lo maneja Bluehost** (`ns1/ns2.bluehost.com`, comprobado el 25-sep-2026), no Cloudflare. Pasos previos:
   - Gonzalo agrega `hotelentrerios.cl` en su cuenta de Cloudflare desde el panel. El token de Claude no tiene permiso para crear zonas, a propósito.
   - Revisar que Cloudflare haya importado **todos** los registros, sobre todo **MX/SPF/DKIM** (el correo `reservas@` vive en Bluehost). Claude puede hacerlo con el token.
   - El titular del dominio cambia los **servidores DNS en NIC Chile** a los que indique Cloudflare (probablemente con la cuenta del abuelo).
   - Recién entonces se crean los registros de GitHub Pages en Cloudflare.
4. Clonar el repo nuevo en local (o cambiar el `origin` de esta carpeta) y usar el correo de **lvilchesa** en ese repo.
5. Verificar que `og:image` (`https://www.hotelentrerios.cl/assets/imgs/galeria/hotel/HOTEL-001.JPG`) responde desde el sitio nuevo. La ruta se eligió igual a la del sitio viejo para que no haya que tocarlo.
6. Antes de cambiar el DNS, conviene respaldar el sitio viejo (ya hay copia del HTML y de la lista de fotos en `Old/`; las fotos ya están en `assets/imgs/`).

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
GitHub Pages tarda entre 30 segundos y 2 minutos en publicar. Para verificar, conviene hacer `curl` a la URL con un `?x=N` al final para esquivar la caché.

### Cuenta de git (¡ojo!)
- El login guardado en el Administrador de credenciales de Windows es **YN-TGS**, así que el push funciona.
- El `~/.gitconfig` **global** firma como **lvilchesa** (quedó así por Licahue). Por eso este repo tiene el correo fijado **localmente**: `git config user.email` = `163479536+YN-TGS@users.noreply.github.com`. Sin eso, los commits se atribuirían a la cuenta del papá.
- No hay `gh` CLI instalado.

### Cómo probar localmente
- `python -m http.server 8765` en la carpeta y abrir `http://localhost:8765/`.
- Para capturas automáticas se usó Playwright en un venv temporal con `channel="chrome"` (usa el Chrome instalado, sin descargar navegadores). Se probó a 1366px (PC) y 390px (celular).
- Ojo: los elementos `.fade-in-up` empiezan invisibles y aparecen con animación. Antes de capturar hay que agregarles la clase `visible` o esperar unos 2 segundos, o la captura sale vacía.

### Contacto y mapa
- Mapa: embed de Google Maps de la ficha "Hotel Entre Rios - Salamanca" (lo entregó el cliente; vista satélite `!5e1`).
- "Cómo llegar": `https://www.google.com/maps/dir/?api=1&destination=Hotel+Entre+Rios+-+Salamanca`.
- WhatsApp: `https://wa.me/56991287644` (botón en contacto y en el footer).
- Facebook e Instagram: comentados en el footer (`<!-- Desactivados hasta tener las URLs reales... -->`).

### Fotos (`assets/imgs/galeria/hotel/`)
- 29 fotos de 800×533 (HOTEL-039 mide 533×355), entre 100 y 200 KB cada una; no hace falta optimizarlas.
- Qué muestran: exteriores y cabañas (001-004, 038, 039, 041), piscina (028, 029, 037), habitaciones (006, 008, 011, 015, 016, 018-022, 024, 032, 033, 036, 040), baños (009, 010, 017 con tina, 034).
- Tarjetas de habitación: Simple = 015, Doble = 016. La 016 muestra más el clóset que la cama; si el cliente quiere, la 018 o la 036 (cama de dos plazas + individual) lucen mejor.

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
