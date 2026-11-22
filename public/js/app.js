// ====== Configuración ======
const WHATSAPP = '5492616173390' // 261 617 3390 con código de Argentina (54 9)

const peso = (n) => (n > 0 ? '$' + n.toLocaleString('es-AR') : 'A consultar')

const waLink = (msg = 'Hola Frayle! Quería hacer una consulta.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

const $ = (id) => document.getElementById(id)

// (Los datos del menú están en menu.js: FONDOS_CAT y MENU. SIN_FOTO ya no se usa)

// ====== Fotos: carpetas dentro de public/img ======
// Cada categoría tiene su carpeta. Si agregás una categoría nueva, sumá su carpeta acá.
const CARPETAS = {
  'Promos': 'promos',
  'Burgers de pan de papa': 'burgers',
  'Hamburguesas': 'hamburguesas',
  'Viandas': 'viandas',
  'Lomos': 'lomos',
  'Pizzas': 'pizzas',
  'Panchos y choris': 'panchos-choris',
  'Tostados y barrolucos': 'tostados-barrolucos',
  'Papas': 'papas'
}

// Productos SIN foto cargada en menu.js: la página busca sola
//   public/img/<carpeta>/<id del producto>.<extensión>
// Si el archivo existe, la foto aparece; si no, la tarjeta queda solo con texto.
const EXTENSIONES_FOTO = ['jpg', 'jpeg'] // podés sumar 'webp' o 'png'

const carpetaDe = (m) => CARPETAS[m.c] || ''
const rutaImg = (carpeta, archivo) => `/img/${carpeta ? carpeta + '/' : ''}${archivo}`
const rutaFondo = (archivo) => `/img/ui/${archivo}`
const tieneFotoCargada = (m) => !!m.img
const candidatosFoto = (m) => EXTENSIONES_FOTO.map((ext) => rutaImg(carpetaDe(m), `${m.id}.${ext}`))

// ====== Aclaraciones rápidas (solo donde tienen sentido) ======
const CATS_CON_ACLARACION = new Set([
  'Burgers de pan de papa',
  'Hamburguesas',
  'Lomos',
  'Panchos y choris',
  'Tostados y barrolucos'
])
const ACLARACIONES_RAPIDAS = ['Sin tomate', 'Sin lechuga', 'Sin cebolla', 'Sin condimentos']

// ====== Combos "a elección": el cliente elige burgers en una ventana ======
// cantidad = cuántas burgers se eligen; incluir = ids extra que se ofrecen en la lista
// (la lista toma todas las burgers que tienen tamaños: simple/doble/triple/cuádruple)
const COMBOS = {
  'combo-2-burgers-simples': { cantidad: 2, incluir: ['burger-clasica'] },
  'combo-2-burgers-dobles': { cantidad: 2, incluir: [] }
}

// ====== Íconos de redes (SVG en código) ======
const ICONOS = {
  wa: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
  tt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
}
document.querySelectorAll('[data-icono]').forEach((el) => { el.innerHTML = ICONOS[el.dataset.icono] || '' })
document.querySelectorAll('[data-wa]').forEach((a) => { a.href = waLink() })

// ====== Tarjetas de producto ======
const seleccionVariante = {}

const precioActual = (m) => {
  if (!m.variantes || !m.variantes.length) return m.p
  const idx = seleccionVariante[m.id] ?? 0
  return m.variantes[idx]?.p ?? m.p
}

const tarjeta = (m) => {
  const tieneVar = Array.isArray(m.variantes) && m.variantes.length > 0
  const idxAct = seleccionVariante[m.id] ?? 0
  const varHtml = tieneVar
    ? `<div class="variantes" role="group" aria-label="Tamaño de ${esc(m.n)}">
        ${m.variantes.map((v, i) =>
          `<button type="button" class="var-btn" aria-pressed="${i === idxAct}" data-var-id="${esc(m.id)}" data-var-idx="${i}">${esc(v.label)}</button>`
        ).join('')}
       </div>`
    : ''

  const conFoto = tieneFotoCargada(m)

  // Con foto cargada: esqueleto mientras carga (queda quieto si el archivo no existe).
  // Sin foto cargada: tarjeta solo texto; si más adelante existe el archivo, se agrega sola.
  const fotoHtml = conFoto
    ? `<div class="foto">
        <img onload="this.parentElement.classList.add('cargada')" onerror="this.parentElement.classList.add('fallo')" src="${esc(rutaImg(carpetaDe(m), m.img))}" alt="${esc(m.n)}" loading="lazy" decoding="async">
      </div>`
    : ''

  const p = precioActual(m)

  // La zona de "Agregar" se actualiza sola según lo que haya en el pedido (ver actualizarControlesProductos)
  return `
  <article class="item${conFoto ? '' : ' item-sin-foto'}" data-id="${esc(m.id)}">
    ${fotoHtml}
    <h3>${esc(m.n)}</h3>
    <p>${esc(m.d)}</p>
    ${varHtml}
    <div class="item-pie">
      <span class="precio${p > 0 ? '' : ' precio-consultar'}" data-precio-id="${esc(m.id)}">${peso(p)}</span>
      <div class="zona-agregar" data-zona="${esc(m.id)}">
        <button class="btn btn-rojo btn-sm" type="button" data-agregar="${esc(m.id)}">Agregar</button>
      </div>
    </div>
  </article>`
}

// ====== Fotos que se agregan después ======
// Al abrir una categoría por primera vez, busca la foto de los productos que todavía no la tienen
function buscarFoto(lista, i, alEncontrar) {
  if (i >= lista.length) return
  const prueba = new Image()
  prueba.onload = () => alEncontrar(lista[i])
  prueba.onerror = () => buscarFoto(lista, i + 1, alEncontrar)
  prueba.src = lista[i]
}

function probarFotosDe(detalle) {
  if (detalle.dataset.fotos) return
  detalle.dataset.fotos = '1'
  detalle.querySelectorAll('.item.item-sin-foto').forEach((card) => {
    const m = MENU.find((x) => x.id === card.dataset.id)
    if (!m) return
    buscarFoto(candidatosFoto(m), 0, (src) => {
      const foto = document.createElement('div')
      foto.className = 'foto cargada'
      const img = document.createElement('img')
      img.src = src
      img.alt = m.n
      img.decoding = 'async'
      foto.appendChild(img)
      card.prepend(foto)
      card.classList.remove('item-sin-foto')
    })
  })
}

// ====== Menú completo (acordeón vertical) ======
const seccionesInicio = Array.from(document.querySelectorAll('main > section:not(#catalogoCompleto), main > .marquesina'))
const vistaCatalogo = $('catalogoCompleto')
const acordeonLista = $('acordeonLista')

function pintarAcordeon() {
  const cats = [...new Set(MENU.map((m) => m.c))]
  acordeonLista.innerHTML = cats.map((cat) => {
    const productos = MENU.filter((m) => m.c === cat)
    const fondoBarra = FONDOS_CAT[cat]
    const estiloBarra = fondoBarra ? ` style="--bg-cat:url('${esc(rutaFondo(fondoBarra))}')"` : ''

    return `
      <details class="cat-acordeon">
        <summary${estiloBarra}>
          <span class="cat-info">${esc(cat)} <span class="cat-cant">${productos.length}</span></span>
        </summary>
        <div class="grid-productos">
          ${productos.map(tarjeta).join('')}
        </div>
      </details>`
  }).join('')
}

// Una sola categoría abierta a la vez, y se acomoda en pantalla
acordeonLista.addEventListener('toggle', (e) => {
  const d = e.target
  if (!(d instanceof HTMLDetailsElement) || !d.open) return
  acordeonLista.querySelectorAll('details[open]').forEach((o) => { if (o !== d) o.open = false })
  probarFotosDe(d)
  requestAnimationFrame(() => d.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}, true)

function mostrarCatalogoUI() {
  acordeonLista.querySelectorAll('details').forEach((d) => { d.open = false })
  seccionesInicio.forEach((el) => { el.hidden = true })
  vistaCatalogo.hidden = false
  window.scrollTo({ top: 0, behavior: 'auto' })
}
function mostrarInicioUI(irArriba = true) {
  vistaCatalogo.hidden = true
  seccionesInicio.forEach((el) => { el.hidden = false })
  if (irArriba) window.scrollTo({ top: 0, behavior: 'auto' })
}

// El botón "atrás" del celular vuelve al inicio (en vez de salir de la página)
function irACatalogo() {
  if (!vistaCatalogo.hidden) return
  history.pushState({ v: 'catalogo' }, '')
  mostrarCatalogoUI()
}
function volverAlInicio() {
  if (history.state && history.state.v === 'catalogo') history.back()
  else mostrarInicioUI()
}

pintarAcordeon()

;['abrirCatalogoHero', 'abrirCatalogoNosotros', 'abrirCatalogoPasos'].forEach((id) => {
  const btn = $(id)
  if (btn) btn.addEventListener('click', irACatalogo)
})
;['volverInicio', 'volverInicioAbajo'].forEach((id) => {
  const btn = $(id)
  if (btn) btn.addEventListener('click', volverAlInicio)
})
$('logoInicio').addEventListener('click', (e) => {
  if (!vistaCatalogo.hidden) { e.preventDefault(); volverAlInicio() }
})
// Si está en el menú y toca un enlace del encabezado, vuelve al inicio y baja a esa sección
document.querySelectorAll('nav a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  if (vistaCatalogo.hidden) return
  e.preventDefault()
  const destino = a.getAttribute('href')
  mostrarInicioUI(false)
  setTimeout(() => document.querySelector(destino)?.scrollIntoView({ behavior: 'smooth' }), 60)
}))

// ====== Carrito ======
// Cada línea: { lid, k, q, nota, detalle }
// k = id del producto (o id__variante), nota = aclaración del cliente,
// detalle = lo que eligió en un combo (por ejemplo "Burger J&Q + Burger Frayle")
const CLAVE = 'frayle-pedido-v2'
let carro = []
try {
  const guardado = JSON.parse(localStorage.getItem(CLAVE))
  if (Array.isArray(guardado)) carro = guardado.filter((l) => l && l.k && l.q > 0)
} catch (e) { carro = [] }
let siguienteLid = 1
carro.forEach((l) => { l.lid = siguienteLid++; l.nota = l.nota || ''; l.detalle = l.detalle || '' })

const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(carro)) } catch (e) { /* sin almacenamiento */ } }

const claveLinea = (id, idx) => `${id}__${idx}`

function infoLinea(k) {
  const [id, idx] = k.split('__')
  const m = MENU.find((x) => x.id === id)
  if (!m) return null
  if (idx !== undefined && Array.isArray(m.variantes) && m.variantes[Number(idx)]) {
    const v = m.variantes[Number(idx)]
    return { n: `${m.n} (${v.label})`, p: v.p, c: m.c }
  }
  return { n: m.n, p: m.p, c: m.c }
}

const lineas = () => carro
  .map((l) => ({ ...l, ...(infoLinea(l.k) || {}) }))
  .filter((l) => l.n)

const importeTotal = (ls) => ls.reduce((s, l) => s + l.p * l.q, 0)

const barra = $('carroBarra')
const panel = $('panel')
const velo = $('velo')
const lista = $('panelLista')
const contador = $('contador')

const modoActual = () => (document.querySelector('input[name="modo"]:checked') || {}).value || 'Retiro en el local'
const esEnvio = () => modoActual().startsWith('Envío')

function agregarLinea(k, detalle = '') {
  // Si ya hay una línea igual (mismo producto, misma elección) SIN aclaración, suma una unidad.
  // Si la que está tiene aclaración, crea una línea nueva (así se pueden pedir distintas).
  const existente = carro.find((l) => l.k === k && (l.detalle || '') === detalle && !l.nota)
  if (existente) existente.q += 1
  else carro.push({ lid: siguienteLid++, k, q: 1, nota: '', detalle })
  guardar()
  pintarCarro(true)
}

// ====== Contador en cada producto del menú ======
// Clave del producto según el tamaño elegido (Simple / Doble / etc.)
const claveProducto = (m) =>
  (Array.isArray(m.variantes) && m.variantes.length > 0)
    ? claveLinea(m.id, seleccionVariante[m.id] ?? 0)
    : m.id

const cantidadProducto = (m) =>
  carro.filter((l) => l.k === claveProducto(m)).reduce((s, l) => s + l.q, 0)

function controlProductoHtml(m) {
  const n = cantidadProducto(m)
  if (n === 0) {
    return `<button class="btn btn-rojo btn-sm" type="button" data-agregar="${esc(m.id)}">Agregar</button>`
  }
  return `
    <div class="stepper-prod" role="group" aria-label="Cantidad de ${esc(m.n)}">
      <button type="button" data-prod-menos="${esc(m.id)}" aria-label="Quitar uno">−</button>
      <span class="stepper-n" aria-live="polite">${n}</span>
      <button type="button" data-prod-mas="${esc(m.id)}" aria-label="Agregar uno">+</button>
    </div>`
}

function actualizarControlesProductos() {
  document.querySelectorAll('[data-zona]').forEach((z) => {
    const m = MENU.find((x) => x.id === z.dataset.zona)
    if (!m) return
    // Si el foco estaba en este control, se lo devuelve al botón que corresponda
    const activo = document.activeElement
    let quien = null
    if (activo && z.contains(activo)) quien = activo.dataset.prodMenos !== undefined ? 'menos' : 'mas'
    z.innerHTML = controlProductoHtml(m)
    if (quien) {
      const destino = z.querySelector(`[data-prod-${quien}]`) || z.querySelector('[data-agregar]')
      if (destino) destino.focus()
    }
  })
}

function quitarUnoProducto(m) {
  const k = claveProducto(m)
  const delProducto = carro.filter((l) => l.k === k)
  const l = delProducto[delProducto.length - 1] // la última que se agregó
  if (!l) return
  l.q -= 1
  if (l.q <= 0) carro = carro.filter((x) => x.lid !== l.lid)
  guardar()
  pintarCarro()
}

// ====== Mensaje que le llega al local ======
function armarMensaje() {
  const ls = lineas()
  const envio = esEnvio()
  const conPrecio = ls.filter((l) => l.p > 0)
  const aConsultar = ls.filter((l) => l.p <= 0)
  const nombre = $('pNombre').value.trim()

  const detalles = (l) => [
    ...(l.detalle ? [`   ↳ Elegidas: ${l.detalle}`] : []),
    ...(l.nota ? [`   ↳ Aclaración: ${l.nota}`] : [])
  ]

  const bloques = ['¡Hola Frayle! 👋 Quiero hacer un pedido:']

  if (conPrecio.length) {
    bloques.push([
      '*PEDIDO*',
      ...conPrecio.flatMap((l) => [`• ${l.q} x ${l.n} — ${peso(l.p * l.q)}`, ...detalles(l)])
    ].join('\n'))
    bloques.push(`*TOTAL DE PRODUCTOS: ${peso(importeTotal(ls))}*`)
  }

  if (aConsultar.length) {
    bloques.push([
      '*PRECIO A CONSULTAR* (no está sumado al total)',
      ...aConsultar.flatMap((l) => [`• ${l.q} x ${l.n}`, ...detalles(l)]),
      '¿Me confirman el precio, por favor?'
    ].join('\n'))
  }

  bloques.push(envio
    ? '*ENTREGA:* Envío a domicilio\n(El envío no está incluido en el total. ¿Me confirman el costo?)'
    : '*ENTREGA:* Lo retiro en el local')

  if (nombre) bloques.push(`*A NOMBRE DE:* ${nombre}`)
  bloques.push('¡Gracias! 🙌')

  return bloques.join('\n\n')
}

function actualizarLink() {
  $('enviarPedido').href = waLink(armarMensaje())
}

function lineaHtml(l) {
  const partes = l.nota ? l.nota.split(',').map((s) => s.trim().toLowerCase()) : []
  const chips = CATS_CON_ACLARACION.has(l.c)
    ? `<div class="chips-acl" role="group" aria-label="Aclaraciones rápidas">
        ${ACLARACIONES_RAPIDAS.map((c) =>
          `<button type="button" class="chip-acl" data-chip="${esc(c)}" data-lid="${l.lid}" aria-pressed="${partes.includes(c.toLowerCase())}">${esc(c)}</button>`
        ).join('')}
       </div>`
    : ''
  return `
    <div class="linea">
      <div class="linea-top">
        <div class="linea-info">
          <strong>${esc(l.n)}</strong>
          <span>${peso(l.p)} c/u</span>
          ${l.detalle ? `<div class="linea-detalle">Elegiste: ${esc(l.detalle)}</div>` : ''}
        </div>
        <span class="linea-total">${peso(l.p * l.q)}</span>
      </div>
      <div class="linea-ctrl">
        <div class="cant">
          <button type="button" data-menos="${l.lid}" aria-label="Quitar uno">−</button>
          <span class="cant-n">${l.q}</span>
          <button type="button" data-mas="${l.lid}" aria-label="Agregar uno">+</button>
        </div>
        <button type="button" class="quitar" data-quitar="${l.lid}">Quitar</button>
      </div>
      <div class="nota-box">
        <label class="nota-lab" for="nota-${l.lid}">¿Querés aclarar algo? (opcional)</label>
        ${chips}
        <input id="nota-${l.lid}" class="nota-input" data-lid="${l.lid}" type="text" value="${esc(l.nota)}" placeholder="Ej: sin tomate, bien cocido..." maxlength="140" autocomplete="off">
      </div>
    </div>`
}

function pintarCarro(animar = false) {
  const ls = lineas()
  const n = ls.reduce((s, l) => s + l.q, 0)
  const total = importeTotal(ls)
  const envio = esEnvio()

  barra.classList.toggle('visible', n > 0)
  $('barraTexto').textContent = `${n} ${n === 1 ? 'producto' : 'productos'} · ${peso(total)}`
  contador.hidden = n === 0
  contador.textContent = n

  lista.innerHTML = ls.length
    ? ls.map(lineaHtml).join('')
    : '<p class="vacio">Todavía no agregaste nada.<br>Entrá al menú y tocá <strong>Agregar</strong> en lo que quieras pedir.</p>'

  $('panelForm').hidden = n === 0
  $('panelPie').hidden = n === 0
  $('envioBox').hidden = !envio
  $('panelTotal').textContent = peso(total)
  $('avisoEnvioTotal').hidden = !envio
  $('avisoConsultar').hidden = !ls.some((l) => l.p <= 0)
  actualizarLink()
  actualizarControlesProductos()

  if (animar) {
    barra.classList.remove('bump')
    void barra.offsetWidth
    barra.classList.add('bump')
  }
}

// ====== Ventana para elegir burgers de un combo ======
let comboActual = null // { id, cantidad, opciones, elegidas: { idBurger: cantidad } }

const comboAbierto = () => {
  const m = $('modalCombo')
  return !!m && !m.hidden
}
const totalElegidas = () =>
  comboActual ? Object.values(comboActual.elegidas).reduce((s, n) => s + n, 0) : 0

function opcionesCombo(comboId) {
  const cfg = COMBOS[comboId]
  return MENU
    .filter((m) =>
      m.c === 'Burgers de pan de papa' &&
      ((Array.isArray(m.variantes) && m.variantes.length > 0) || cfg.incluir.includes(m.id)))
    .map((m) => ({ id: m.id, n: m.n }))
}

function detalleCombo() {
  const c = comboActual
  return c.opciones
    .filter((o) => c.elegidas[o.id] > 0)
    .map((o) => (c.elegidas[o.id] > 1 ? `${c.elegidas[o.id]} x ${o.n}` : o.n))
    .join(' + ')
}

function pintarCombo() {
  const c = comboActual
  if (!c) return
  const total = totalElegidas()
  const lleno = total >= c.cantidad

  $('comboTitulo').textContent = `Elegí ${c.cantidad} burgers`
  $('comboSub').textContent = 'Tocá las que quieras. Si querés dos iguales, tocá + en la misma.'
  $('comboContador').textContent = `Elegidas: ${total} de ${c.cantidad}`
  $('comboResumen').textContent = total ? detalleCombo() : ''

  $('comboLista').innerHTML = c.opciones.map((o) => {
    const n = c.elegidas[o.id] || 0
    return `
      <div class="opcion-burger${n > 0 ? ' activa' : ''}">
        <button type="button" class="opcion-nombre" data-combo-mas="${esc(o.id)}" ${lleno ? 'disabled' : ''}>${esc(o.n)}</button>
        ${n > 0 ? `
          <div class="opcion-ctrl">
            <button type="button" class="opcion-btn" data-combo-menos="${esc(o.id)}" aria-label="Quitar una ${esc(o.n)}">−</button>
            <span class="opcion-n">${n}</span>
            <button type="button" class="opcion-btn" data-combo-mas="${esc(o.id)}" aria-label="Agregar otra ${esc(o.n)}" ${lleno ? 'disabled' : ''}>+</button>
          </div>` : ''}
      </div>`
  }).join('')

  const btn = $('confirmarCombo')
  btn.disabled = !lleno
  btn.textContent = lleno ? 'Agregar al pedido' : `Elegí ${c.cantidad - total} más`
}

function abrirCombo(prod) {
  if (!$('modalCombo')) { agregarLinea(prod.id); return } // por si falta la ventana en el HTML
  const cfg = COMBOS[prod.id]
  comboActual = { id: prod.id, cantidad: cfg.cantidad, opciones: opcionesCombo(prod.id), elegidas: {} }
  history.pushState({ v: 'combo' }, '')
  pintarCombo()
  $('veloCombo').hidden = false
  $('modalCombo').hidden = false
  document.body.classList.add('sin-scroll')
  $('comboLista').scrollTop = 0
}
function cerrarComboUI() {
  if ($('veloCombo')) $('veloCombo').hidden = true
  if ($('modalCombo')) $('modalCombo').hidden = true
  if (!panel.classList.contains('abierto')) document.body.classList.remove('sin-scroll')
  comboActual = null
}
function cerrarCombo() {
  if (history.state && history.state.v === 'combo') history.back()
  else cerrarComboUI()
}
function confirmarCombo() {
  const c = comboActual
  if (!c || totalElegidas() !== c.cantidad) return
  agregarLinea(c.id, detalleCombo())
  cerrarCombo()
}

// La ventana del combo está en el HTML después de los scripts, por eso los clicks se escuchan en todo el documento
document.addEventListener('click', (e) => {
  if (!comboActual) return
  if (e.target.id === 'veloCombo' || e.target.closest('#cerrarCombo')) { cerrarCombo(); return }
  if (e.target.closest('#confirmarCombo')) { confirmarCombo(); return }

  const mas = e.target.closest('[data-combo-mas]')
  if (mas) {
    if (totalElegidas() < comboActual.cantidad) {
      const id = mas.dataset.comboMas
      comboActual.elegidas[id] = (comboActual.elegidas[id] || 0) + 1
      pintarCombo()
    }
    return
  }
  const menos = e.target.closest('[data-combo-menos]')
  if (menos) {
    const id = menos.dataset.comboMenos
    comboActual.elegidas[id] = (comboActual.elegidas[id] || 0) - 1
    if (comboActual.elegidas[id] <= 0) delete comboActual.elegidas[id]
    pintarCombo()
  }
})

// ====== Panel del pedido (con soporte del botón "atrás") ======
function abrirPanelUI() {
  panel.classList.add('abierto')
  panel.setAttribute('aria-hidden', 'false')
  velo.hidden = false
  requestAnimationFrame(() => velo.classList.add('visible'))
  document.body.classList.add('sin-scroll')
  $('panelCuerpo').scrollTop = 0
  $('cerrarPanel').focus()
}
function cerrarPanelUI() {
  panel.classList.remove('abierto')
  panel.setAttribute('aria-hidden', 'true')
  velo.classList.remove('visible')
  document.body.classList.remove('sin-scroll')
  setTimeout(() => { velo.hidden = true }, 300)
  $('abrirPanel').focus()
}
function abrirPanel() {
  if (panel.classList.contains('abierto')) return
  history.pushState({ v: 'panel' }, '')
  abrirPanelUI()
}
function cerrarPanel() {
  if (history.state && history.state.v === 'panel') history.back()
  else cerrarPanelUI()
}

window.addEventListener('popstate', () => {
  const v = history.state && history.state.v
  if (v !== 'panel' && panel.classList.contains('abierto')) cerrarPanelUI()
  if (v !== 'combo' && comboAbierto()) cerrarComboUI()
  if (v === 'catalogo' && vistaCatalogo.hidden) mostrarCatalogoUI()
  else if (!['catalogo', 'panel', 'combo'].includes(v) && !vistaCatalogo.hidden) mostrarInicioUI()
})
history.replaceState(null, '')

// ====== Eventos: agregar productos y elegir tamaños ======
// Suma una unidad de un producto (los combos primero abren la ventana de elección)
function sumarProducto(prod) {
  if (COMBOS[prod.id]) { abrirCombo(prod); return }
  agregarLinea(claveProducto(prod))
}

function manejarClickCatalogo(e) {
  const varBtn = e.target.closest('[data-var-id]')
  if (varBtn) {
    const id = varBtn.dataset.varId
    const idx = Number(varBtn.dataset.varIdx)
    seleccionVariante[id] = idx
    const prod = MENU.find((x) => x.id === id)
    document.querySelectorAll(`[data-var-id="${CSS.escape(id)}"]`).forEach((b) => {
      b.setAttribute('aria-pressed', String(Number(b.dataset.varIdx) === idx))
    })
    if (prod) {
      document.querySelectorAll(`[data-precio-id="${CSS.escape(id)}"]`).forEach((el) => {
        el.textContent = peso(precioActual(prod))
      })
    }
    actualizarControlesProductos() // el contador muestra la cantidad del tamaño elegido
    return
  }

  const btn = e.target.closest('[data-agregar], [data-prod-mas], [data-prod-menos]')
  if (!btn) return
  const id = btn.dataset.agregar || btn.dataset.prodMas || btn.dataset.prodMenos
  const prod = MENU.find((x) => x.id === id)
  if (!prod) return

  if (btn.dataset.prodMenos !== undefined) quitarUnoProducto(prod)
  else sumarProducto(prod)
}
acordeonLista.addEventListener('click', manejarClickCatalogo)

// ====== Eventos: dentro del pedido ======
lista.addEventListener('click', (e) => {
  const chip = e.target.closest('[data-chip]')
  if (chip) {
    const l = carro.find((x) => x.lid === Number(chip.dataset.lid))
    if (!l) return
    const partes = l.nota ? l.nota.split(',').map((s) => s.trim()).filter(Boolean) : []
    const txt = chip.dataset.chip
    const i = partes.findIndex((p) => p.toLowerCase() === txt.toLowerCase())
    if (i >= 0) partes.splice(i, 1)
    else partes.push(txt)
    l.nota = partes.join(', ')
    guardar()
    const caja = chip.closest('.nota-box')
    caja.querySelector('.nota-input').value = l.nota
    chip.setAttribute('aria-pressed', String(i < 0))
    actualizarLink()
    return
  }

  const mas = e.target.closest('[data-mas]')
  const menos = e.target.closest('[data-menos]')
  const quitar = e.target.closest('[data-quitar]')
  const origen = mas || menos || quitar
  if (!origen) return
  const lid = Number(origen.dataset.mas || origen.dataset.menos || origen.dataset.quitar)
  const l = carro.find((x) => x.lid === lid)
  if (!l) return

  if (mas) l.q += 1
  else if (menos) l.q -= 1
  else if (quitar) l.q = 0
  if (l.q <= 0) carro = carro.filter((x) => x.lid !== lid)

  guardar()
  pintarCarro()
})

lista.addEventListener('input', (e) => {
  if (!e.target.matches('.nota-input')) return
  const l = carro.find((x) => x.lid === Number(e.target.dataset.lid))
  if (!l) return
  l.nota = e.target.value
  guardar()
  const partes = l.nota.split(',').map((s) => s.trim().toLowerCase())
  e.target.closest('.nota-box').querySelectorAll('.chip-acl').forEach((c) => {
    c.setAttribute('aria-pressed', String(partes.includes(c.dataset.chip.toLowerCase())))
  })
  actualizarLink()
})

// Retiro / Envío
$('panelForm').addEventListener('change', (e) => {
  if (e.target.matches('input[name="modo"]')) pintarCarro()
})
$('pNombre').addEventListener('input', actualizarLink)

$('vaciar').addEventListener('click', () => { carro = []; guardar(); pintarCarro() })
$('abrirPanel').addEventListener('click', abrirPanel)
barra.addEventListener('click', abrirPanel)
$('cerrarPanel').addEventListener('click', cerrarPanel)
velo.addEventListener('click', cerrarPanel)
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return
  if (comboAbierto()) cerrarCombo()
  else if (panel.classList.contains('abierto')) cerrarPanel()
})

// ====== Inicio ======
pintarCarro()

// ====== Animaciones al hacer scroll ======
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target) }
  })
}, { threshold: 0.15 })
document.querySelectorAll('.reveal').forEach((el) => observador.observe(el))

// "¿Cómo pedir?": los pasos se animan uno tras otro al llegar a la sección
const pasos = $('pasos')
if (pasos) {
  const obsPasos = new IntersectionObserver((entradas, ob) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { pasos.classList.add('visible'); ob.disconnect() }
    })
  }, { threshold: 0.3 })
  obsPasos.observe(pasos)
}