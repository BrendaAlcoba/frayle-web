// ====== Menú ======
// Solo Burgers de pan de papa y Viandas llevan fotos; el resto va solo texto
const SIN_FOTO = new Set([
  'Promos',
  'Hamburguesas',
  'Lomos',
  'Pizzas',
  'Panchos y choris',
  'Tostados y barrolucos',
  'Papas'
])

const FONDOS_CAT = {
  'Destacados del mes': 'destacados-del-mes.jpg',
  'Promos': 'fondo-promos.jpg',
  'Burgers de pan de papa': 'fondo-burgers.jpg',
  'Hamburguesas': 'fondo-hamburguesas.jpg',
  'Viandas': 'fondo-viandas.jpg',
  'Lomos': 'fondo-lomos.jpg',
  'Pizzas': 'fondo-pizzas.jpg',
  'Panchos y choris': 'fondo-panchos.jpg',
  'Tostados y barrolucos': 'fondo-tostados.jpg',
  'Papas': 'fondo-papas.jpg'
}

const MENU = [
  //DESTACADOS DEL MES
  { id: 'destacado1', n: 'Promo post festival', d: 'Mini lomo + papas + lata de gaseosa. Pan, carne, queso barra, mayo, tomate, lechuga y salsa de tomate. Elegí tu pan favorito', p: 10000, c: 'Destacados del mes', e: '', img: 'mini-lomo-lata-coca.jpg' },
  { id: 'destacado2', n: '2 Cheese burgers con papas y lata de gaseosa', d: 'Pan de papa, medallón de carne, doble feta de cheddar, mayonesa y verduras', p: 18000, c: 'Destacados del mes', e: '', img: 'chese-burgers.jpg' },

  // --- PROMOS ---
  { id: 'promo-1', n: 'Promo 1', d: '2 lomos de campo + porción de papas.', p: 24000, c: 'Promos', e: '', img: '' },
  { id: 'promo-2', n: 'Promo 2', d: '2 lomos completos + porción de papas.', p: 38000, c: 'Promos', e: '', img: '' },
  { id: 'promo-3', n: 'Promo 3', d: '2 burgers de campo + porción de papas.', p: 22000, c: 'Promos', e: '', img: '' },
  { id: 'promo-4', n: 'Promo 4', d: '2 burgers completas + porción de papas.', p: 26000, c: 'Promos', e: '', img: '' },
  { id: 'promo-5', n: 'Promo 5', d: '2 súper chori + porción de papas.', p: 17000, c: 'Promos', e: '', img: '' },
  { id: 'promo-6', n: 'Promo 6', d: '1 pizza mozzarella + porción de papas.', p: 16000, c: 'Promos', e: '', img: '' },
  { id: 'promo-7', n: 'Promo 7', d: '1 pizza especial + porción de papas.', p: 22000, c: 'Promos', e: '', img: '' },
  { id: 'promo-8', n: 'Promo 8', d: '2 pizzas mozzarella + porción de papas.', p: 27000, c: 'Promos', e: '', img: '' },
  { id: 'promo-9', n: 'Promo 9', d: '1 pizza mozzarella + 1 pizza especial + porción de papas.', p: 32000, c: 'Promos', e: '', img: '' },
  { id: 'promo-10', n: 'Promo 10', d: '2 pizzas especiales + porción de papas.', p: 35000, c: 'Promos', e: '', img: '' },
  { id: 'promo-mini-lomo-papas', n: 'Mini lomo + porción de papas', d: 'Mini lomo + porción de papas.', p: 13000, c: 'Promos', e: '', img: '' },
  { id: 'promo-2-pizzas-mozzarella', n: '2 pizzas mozzarella', d: '2 pizzas mozzarella (8 porciones cada una).', p: 17000, c: 'Promos', e: '', img: '' },
  { id: 'promo-balde', n: 'Promo balde', d: '4 mini burgers en pan de papa, variedad a elección + porción de papas + dip de cheddar o barbacoa.', p: 21000, c: 'Promos', e: '🍔', img: 'promo-balde.jpg' },
  

  // --- BURGERS DE PAN DE PAPA (con fotos) ---
  { id: 'burger-clasica', n: 'Burger clásica', d: 'Pan de papa, medallón de carne casero, tomate, lechuga y todos los aderezos.', p: 7000, c: 'Burgers de pan de papa', e: '🍔', img: 'burger-clasica.jpg' },
  { id: 'combo-2-burgers-clasicas', n: '2 burgers clásicas', d: 'Promo 2 burgers clásicas en pan de papa.', p: 13000, c: 'Burgers de pan de papa', e: '🍔', img: 'combo-2-burgers-clasicas.jpg' },
  {
    id: 'burger-jq',
    n: 'Burger J&Q',
    d: 'Pan de papa, medallón de carne casero, jamón, queso barra, tomate, lechuga y todos los aderezos.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'burger-jq.jpg'
  },
  {
    id: 'burger-napolitana',
    n: 'Burger napolitana',
    d: 'Pan de papa, medallón de carne casero, mozzarella, tomate, salsa de tomate y todos los condimentos.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'burger-napolitana.jpg'
  },
  {
    id: 'burger-provolone',
    n: 'Burger provolone',
    d: 'Pan de papa, medallón de carne casero, provolone, huevo, tomate, cebolla morada y todos los condimentos.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'BurgerProvoloneConPapas.jpeg'
  },
  {
    id: 'burger-palta',
    n: 'Burger palta',
    d: 'Pan de papa, medallón de carne casero, tomate, huevo, palta y mayonesa.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🥑',
    img: 'burgerPalta.jpeg'
  },
  {
    id: 'burger-frayle',
    n: 'Burger Frayle',
    d: 'Pan de papa, medallón de carne casero, huevo, cebolla caramelizada, barbacoa, cheddar y mayonesa.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'burger-frayle.jpeg'
  },
  {
    id: 'burger-cheddar',
    n: 'Burger cheddar',
    d: 'Pan de papa, medallón de carne casero, cheddar, huevo, tomate, lechuga y todos los aderezos.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🧀',
    img: 'burger-cheddar.jpeg'
  },
  {
    id: 'burger-roquefort',
    n: 'Burger roquefort',
    d: 'Pan de papa, medallón de carne, huevo, queso roquefort, tomate, cebolla caramelizada y todos los condimentos.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'BurgerRoquefort.jpeg'
  },
  {
    id: 'burger-big-frayle',
    n: 'Burger Big Frayle',
    d: 'Pan de papa, salsa Big Frayle, lechuga, cebolla en cubos, medallón de carne, 2 fetas de cheddar y pepinillos agridulces.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🍔',
    img: 'burger-big-frayle.jpg'
  },
  {
    id: 'burger-bacon-crispy',
    n: 'Burger bacon crispy',
    d: 'Pan de papa, medallón de carne o pollo, mayo, tomate, cheddar, bacon en cubos y huevo.',
    p: 10000,
    variantes: [
      { label: 'Simple', p: 10000 },
      { label: 'Doble', p: 13000 },
      { label: 'Triple', p: 15000 },
      { label: 'Cuádruple', p: 17000 }
    ],
    c: 'Burgers de pan de papa',
    e: '🥓',
    img: 'burger-bacon-crispy.jpeg'
  },
  { id: 'combo-2-burgers-simples', n: '2 burgers simples (a elección)', d: '2 burgers simples en pan de papa, variedad a elección.', p: 18000, c: 'Burgers de pan de papa', e: '🍔', img: 'combo-2-burgers-simples.jpg' },
  { id: 'combo-2-burgers-dobles', n: '2 burgers dobles (a elección)', d: '2 burgers dobles en pan de papa, variedad a elección.', p: 23000, c: 'Burgers de pan de papa', e: '🍔', img: 'combo-2-burgers-dobles.jpg' },

  // --- HAMBURGUESAS (pan árabe o francés - solo texto) ---
  { id: 'hamb-campestre', n: 'Hamburguesa estilo campestre', d: 'Pan francés, hamburguesa de carne casera, tomate, lechuga y mayonesa.', p: 12000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'hamb-completa', n: 'Hamburguesa completa', d: 'Pan árabe o francés, hamburguesa de carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 15000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'hamb-gratinada', n: 'Hamburguesa gratinada', d: 'Pan árabe gratinado con mozzarella, hamburguesa de carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 17000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'hamb-roquefort', n: 'Hamburguesa roquefort', d: 'Pan árabe gratinado con mozzarella, hamburguesa de carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 17000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'super-hamb-completa', n: 'Súper hamburguesa completa', d: 'Pan árabe o francés, doble hamburguesa de carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 27000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'super-hamb-gratinada', n: 'Súper hamburguesa gratinada', d: 'Pan árabe gratinado con mozzarella, doble carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 30000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'super-hamb-roquefort', n: 'Súper hamburguesa roquefort', d: 'Pan árabe o francés, doble hamburguesa de carne casera, queso roquefort, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 30000, c: 'Hamburguesas', e: '', img: '' },
  { id: 'super-hamb-pizza', n: 'Súper hamburguesa pizza (5 pers.)', d: 'Dos bases de pizzas caseras, una gratinada con mozzarella, doble hamburguesa de carne casera, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 45000, c: 'Hamburguesas', e: '', img: '' },

  // --- VIANDAS (con fotos) ---
  { id: 'vianda-arroz-con-pollo', n: 'Arroz con pollo', d: 'Vianda del día de arroz con pollo. Consultá disponibilidad', p: 8000, c: 'Viandas', e: '🍚', img: 'ArrozConPollo.jpg' },
  {
    id: 'vianda-canelones',
    n: 'Canelones',
    d: 'Vianda de canelones caseros.',
    p: 6000,
    variantes: [
      { label: 'Normal', p: 6000 },
      { label: 'XL', p: 10000 }
    ],
    c: 'Viandas',
    e: '🍝',
    img: 'Canelones.jpg'
  },
  { id: 'vianda-ensalada-verduras-asadas', n: 'Ensalada de verduras asadas', d: 'Papas asadas, batatas y calabaza, pollo, huevo y queso tybo.', p: 7500, c: 'Viandas', e: '🥗', img: 'EnsaldaVerdurasAsadas.jpg' },
  {
    id: 'vianda-lasana',
    n: 'Lasaña',
    d: 'Vianda de lasaña casera.',
    p: 6000,
    variantes: [
      { label: 'Normal', p: 6000 },
      { label: 'XL', p: 10000 }
    ],
    c: 'Viandas',
    e: '🍝',
    img: 'Lasaña.jpg'
  },
  { id: 'vianda-milanesa-con-guarnicion', n: 'Milanesa con guarnición', d: 'Milanesa de carne o pollo con guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 9500, c: 'Viandas', e: '🍽️', img: 'MilanesaConGuarnición.jpg', tipoMilanesa: true, conGuarnicion: true },
  { id: 'vianda-noquis', n: 'Ñoquis', d: 'Vianda de ñoquis caseros.', p: 8000, c: 'Viandas', e: '🍝', img: 'ñoquis.jpg' },
  { id: 'vianda-tallarines-con-albondigas', n: 'Tallarines con albóndigas', d: 'Menú del día. Consultá disponibilidad', p: 10000, c: 'Viandas', e: '🍖', img: 'tallarines-con-albondigas.jpg' },
  { id: 'vianda-sorrentinos', n: 'Sorrentinos', d: 'Sorrentinos J/Q (pasta rellena x8 unidades).', p: 9000, c: 'Viandas', e: '🍝', img: 'sorrentinos.jpg' },
  {
    id: 'vianda-tallarines',
    n: 'Tagliatelle (fettuccine)',
    d: 'Vianda de tagliatelle (fettuccine).',
    p: 6000,
    variantes: [
      { label: 'Normal', p: 6000 },
      { label: 'XL', p: 10000 }
    ],
    c: 'Viandas',
    e: '🍝',
    img: 'Tallarines.jpg'
  },
  { id: 'vianda-pastel-de-papa', n: 'Pastel de papa', d: 'Vianda de pastel de papa. Consultá disponibilidad.', p: 8000, c: 'Viandas', e: '🍝', img: 'PastelDePapa.jpeg' },
  { id: 'vianda-pata-muslo', n: 'Pata muslo', d: 'Vianda de pata muslo más guarnición. Consultá disponibilidad.', p: 8000, c: 'Viandas', e: '🍗', img: 'PataMuslo.jpg' },
  { id: 'vianda-ravioles', n: 'Ravioles', d: 'Vianda de ravioles caseros.', p: 8500, c: 'Viandas', e: '🍝', img: 'Ravioles.jpg' },
  { id: 'vianda-matambre-a-la-pizza', n: 'Matambre a la pizza más guarnición', d: 'Consultá disponibilidad.', p: 12000, c: 'Viandas', e: '🍝', img: 'matambre-a-la-pizza.jpg' },
  { id: 'vianda-albondigas-con-pure', n: 'Albóndigas con puré', d: 'Menú del día. Consultá disponibilidad.', p: 8000, c: 'Viandas', e: '🍲', img: 'albondigas-con-pure.jpg' },

  // --- milanesas, tartas, minutas y ensaladas ---
  // Sin foto por ahora: al subir public/img/viandas/<id>.jpg aparece sola.
  { id: 'vianda-milanesa-huevo-frito', n: 'Milanesa con huevo frito y guarnición', d: 'Milanesa de carne o pollo con huevo frito y guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 10000, c: 'Viandas', e: '', img: '', tipoMilanesa: true, conGuarnicion: true },
  { id: 'vianda-milanesa-napolitana', n: 'Milanesa napolitana con guarnición', d: 'Milanesa de carne o pollo estilo napolitana con guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 11500, c: 'Viandas', e: '🍽️', img: 'mila-napo.jpg', tipoMilanesa: true, conGuarnicion: true },
  { id: 'vianda-milanesa-napolitana-huevo-frito', n: 'Milanesa napolitana con huevo frito y guarnición', d: 'Milanesa de carne o pollo estilo napolitana con huevo frito y guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 12000, c: 'Viandas', e: '🍽️', img: 'mila-napo-huevo.jpg', tipoMilanesa: true, conGuarnicion: true },
  { id: 'vianda-tarta-acelga', n: 'Tarta de acelga', d: 'Acelga mezclada con carne molida y verduras, pollo, mozzarella y huevo. Viene con ensalada mixta.', p: 6000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-tarta-jamon-queso', n: 'Tarta de jamón y queso', d: 'Tarta de jamón y queso. Viene con ensalada mixta.', p: 8000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-suprema-pollo-grille', n: 'Suprema de pollo grille con guarnición', d: 'Suprema de pollo grille con guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 8000, c: 'Viandas', e: '', img: '', conGuarnicion: true },
  { id: 'vianda-hamb-napolitana-simple', n: 'Hamburguesa napolitana simple con guarnición', d: 'Hamburguesa napolitana simple con guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 6000, c: 'Viandas', e: '', img: '', conGuarnicion: true },
  { id: 'vianda-hamb-napolitana-doble', n: 'Hamburguesa napolitana doble con guarnición', d: 'Hamburguesa napolitana doble con guarnición (papas fritas, verduras asadas, puré de papas, pasta con pesto o ensalada mezclada).', p: 8000, c: 'Viandas', e: '', img: '', conGuarnicion: true },
  { id: 'vianda-filete-merluza-limon', n: 'Filete de merluza al limón', d: 'Minuta.', p: 9000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-sandwich-milanesa', n: 'Sándwich de milanesa', d: 'Minuta.', p: 8000, c: 'Viandas', e: '🥪', img: 'sandwich-mila.jpg' },
  { id: 'vianda-arroz-con-atun', n: 'Arroz con atún', d: 'Arroz blanco, atún, maíz, guisantes, tomate y huevo.', p: 7000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-arma-tu-ensalada', n: 'Armá tu ensalada', d: 'Incluye hasta 6 ingredientes a elección: lentejas, porotos, lechuga, tomate, choclo, habas, brócoli, rúcula, palta, tomate cherry, chauchas, zanahoria, repollo de bruselas, huevo, jamón, queso barra y mozzarella.', p: 7000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-adicional-pollo', n: 'Adicional: pollo grillé', d: 'Para sumar a tu ensalada.', p: 3000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-adicional-atun', n: 'Adicional: atún', d: 'Para sumar a tu ensalada.', p: 3000, c: 'Viandas', e: '', img: '' },
  { id: 'vianda-adicional-bife-lomo', n: 'Adicional: bife de lomo', d: 'Para sumar a tu ensalada.', p: 5000, c: 'Viandas', e: '', img: '' },
  

  // --- LOMOS ---
  { id: 'mini-lomo-completo', n: 'Mini lomo completo', d: 'Lomo completo en formato mini.', p: 13000, c: 'Lomos', e: '', img: '' },
  { id: 'lomo-campestre', n: 'Lomo estilo campestre', d: 'Pan francés, lomo de res marmolado, tomate, lechuga y mayonesa.', p: 13000, c: 'Lomos', e: '🥪', img: 'lomo-campestre.jpg' },
  { id: 'lomo-completo', n: 'Lomo completo', d: 'Pan árabe o francés, lomo de res marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 20000, c: 'Lomos', e: '🥪', img: 'lomo-completo.jpg' },
  { id: 'lomo-gratinado', n: 'Lomo gratinado', d: 'Pan árabe gratinado con mozzarella, lomo marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 22000, c: 'Lomos', e: '', img: '' },
  { id: 'lomo-anana', n: 'Lomo ananá', d: 'Pan árabe o francés, lomo de res marmolado, ananá, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 23000, c: 'Lomos', e: '🍍', img: 'lomo-anana.jpg' },
  { id: 'provolomo', n: 'Provolomo', d: 'Pan árabe o francés, lomo de res marmolado, provolone, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 23000, c: 'Lomos', e: '', img: '' },
  { id: 'lomo-roquefort', n: 'Lomo roquefort', d: 'Pan árabe o francés, lomo de res marmolado, queso roquefort, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 23000, c: 'Lomos', e: '', img: '' },
  { id: 'super-lomo-completo', n: 'Súper lomo completo (para compartir)', d: 'Pan árabe o francés, lomo de res marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 34000, c: 'Lomos', e: '', img: '' },
  { id: 'super-lomo-gratinado', n: 'Súper lomo gratinado (para compartir)', d: 'Pan árabe gratinado con mozzarella, lomo marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 38000, c: 'Lomos', e: '', img: '' },
  { id: 'super-lomo-roque', n: 'Súper lomo roque (para compartir)', d: 'Pan árabe o francés, lomo de res marmolado, queso roquefort, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 38000, c: 'Lomos', e: '', img: '' },
  { id: 'super-lomo-anana', n: 'Súper lomo ananá (para compartir)', d: 'Pan árabe o francés, lomo de res marmolado, ananá, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 38000, c: 'Lomos', e: '', img: '' },
  { id: 'super-lomo-pizza', n: 'Súper pizza lomo (5 pers.)', d: 'Dos masas precocidas estilo casero cubiertas y gratinadas con mozzarella, lomo de res marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 60000, c: 'Lomos', e: '', img: '' },

  // --- PIZZAS ---
  { id: 'pizza-mozarella', n: 'Mozzarella', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, orégano y aceitunas.', p: 11000, c: 'Pizzas', e: '🍕', img: 'mozza.jpg' },
  { id: 'pizza-doble-mozarella', n: 'Doble mozzarella', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, orégano y aceitunas.', p: 17000, c: 'Pizzas', e: '', img: '' },
  { id: 'pizza-especial', n: 'Especial', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, jamón cocido, pimiento morrón y aceitunas.', p: 16000, c: 'Pizzas', e: '', img: '' },
  { id: 'pizza-doble-especial', n: 'Doble especial', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, jamón cocido, pimiento morrón y aceitunas.', p: 22000, c: 'Pizzas', e: '', img: '' },
  { id: 'pizza-palmitos', n: 'Palmitos', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, jamón cocido, palmitos y aceitunas.', p: 20000, c: 'Pizzas', e: '', img: '' },
  { id: 'pizza-roquefort', n: 'Roquefort', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, queso roquefort y aceitunas.', p: 15000, c: 'Pizzas', e: '', img: '' },
  { id: 'pizza-pina', n: 'Piña', d: 'Masa precocida casera, salsa de tomate sazonada, queso mozzarella, jamón cocido, piña y aceitunas.', p: 20000, c: 'Pizzas', e: '🍍', img: 'pizza-piña.jpg' },
  { id: 'pizza-cuatro-quesos', n: 'Cuatro quesos', d: 'Masa precocida casera, salsa de tomate sazonada, mezcla de quesos mozzarella, roquefort, tybo, parmesano y aceitunas.', p: 20000, c: 'Pizzas', e: '', img: '' },
  { id: 'masa-madre-mozarella', n: 'Masa madre · Mozzarella', d: 'Masa madre, salsa de tomate sazonada, queso mozzarella, orégano y aceitunas.', p: 15000, c: 'Pizzas', e: '🍕', img: 'pizza-masa-madre-mozza.jpg' },
  { id: 'masa-madre-especial', n: 'Masa madre · Especial', d: 'Masa madre, salsa de tomate sazonada, queso mozzarella, jamón cocido, pimiento morrón y aceitunas.', p: 20000, c: 'Pizzas', e: '🍕', img: 'especial-masa-madre.jpg' },

  // --- PANCHOS Y CHORIS ---
  { id: 'pancho-simple', n: 'Pancho simple', d: 'Pan de pancho con salchicha.', p: 3500, c: 'Panchos y choris', e: '', img: '' },
  { id: 'pancho-doble', n: 'Pancho doble', d: 'Pan de pancho con doble salchicha.', p: 5000, c: 'Panchos y choris', e: '', img: '' },
  { id: 'pancho-con-poncho', n: 'Pancho con poncho', d: 'Pancho con cobertura estilo poncho.', p: 6000, c: 'Panchos y choris', e: '🌭', img: 'pancho-con-poncho.jpg' },
  { id: 'pancho-frayle', n: 'Pancho Frayle', d: 'Pan de perro caliente, salchicha, jamón, queso, huevo y todos los condimentos.', p: 7000, c: 'Panchos y choris', e: '🌭', img: 'pancho-frayle.jpg' },
  { id: 'pancho-super-frayle', n: 'Pancho Súper Frayle', d: 'Pan de hot dog, salchicha, jamón, queso, huevo, queso roquefort y todos los condimentos.', p: 8500, c: 'Panchos y choris', e: '🌭', img: 'pancho-super-frayle.jpg' },
  { id: 'chori-simple', n: 'Chori simple', d: 'Pan francés, pasta de chorizo puro cerdo, tomate, lechuga y mayonesa.', p: 9000, c: 'Panchos y choris', e: '🥖', img: 'chori-simple.jpeg' },
  { id: 'chori-completo', n: 'Chori completo', d: 'Pan francés, pasta de chorizo puro cerdo, salsa de tomate, jamón, queso, lechuga y condimentos a elección.', p: 11000, c: 'Panchos y choris', e: '🥖', img: 'chori-completo.jpg' },
  { id: 'chori-burger', n: 'Chori burger', d: 'Pan de papa, doble medallón de chori puro cerdo, tomate, lechuga, queso ahumado y mayonesa de ajo.', p: 9000, c: 'Panchos y choris', e: '', img: '' },

  // --- TOSTADOS Y BARROLUCOS ---
  { id: 'tostado-simple', n: 'Sándwich tostado simple', d: 'Pan de molde estilo carlitos, jamón, queso, mayonesa y salsa golf.', p: 12000, c: 'Tostados y barrolucos', e: '', img: '' },
  { id: 'tostado-primavera', n: 'Sándwich tostado primavera', d: 'Pan de molde estilo carlitos, jamón, queso, huevo, tomate, lechuga, mayonesa y salsa golf.', p: 15000, c: 'Tostados y barrolucos', e: '', img: '' },
  { id: 'barroluco-completo', n: 'Barroluco completo', d: 'Pan de molde estilo triple carlitos, lomo de res marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 36000, c: 'Tostados y barrolucos', e: '🥪', img: 'barroluco-comparir.jpg' },
  { id: 'barroluco-gratinado', n: 'Barroluco gratinado (3 pers.)', d: 'Pan de molde estilo triple carlitos, rebanada superior gratinada con mozzarella, lomo marmolado, jamón, queso, huevo, tomate, lechuga, salsa de tomate y todos los condimentos.', p: 42000, c: 'Tostados y barrolucos', e: '', img: '' },

  // --- PAPAS ---
  { id: 'papas-grandes', n: 'Papas fritas grandes', d: 'Porción grande de papas fritas.', p: 7000, c: 'Papas', e: '', img: '' },
  { id: 'papas-huevo-frito', n: 'Papas fritas con huevo frito', d: 'Porción grande de papas fritas con huevo frito.', p: 8000, c: 'Papas', e: '', img: '' },
  { id: 'salchipapas', n: 'Salchipapas', d: 'Papas fritas con salchichas.', p: 9000, c: 'Papas', e: '🍟', img: 'salchipapa.jpg' },
  { id: 'papas-cheddar', n: 'Papas fritas con queso cheddar', d: 'Porción grande de papas fritas con queso cheddar.', p: 10000, c: 'Papas', e: '', img: '' },
  { id: 'papas-salchichas-cheddar', n: 'Papas fritas con salchichas y cheddar', d: 'Papas fritas con salchichas y queso cheddar.', p: 12000, c: 'Papas', e: '', img: '' },
  { id: 'papas-el-frayle', n: 'Papas fritas El Frayle', d: 'Papas fritas con cheddar, bacon y cebollita de verdeo.', p: 15000, c: 'Papas', e: '', img: 'papas-frayle.jpeg' },
  {
    id: 'nuggets',
    n: 'Nuggets de pollo',
    d: 'Elegí 10 unidades (no incluyen papas) o mix de 8 unidades + papas. Podés sumar dip de cheddar o barbacoa a $2.000 c/u al agregar.',
    p: 7000,
    variantes: [
      { label: '10 unidades', p: 7000, img: 'nuggets-dips.jpg' },
      { label: '8 unidades + papas', p: 7000, img: 'nuggets-papas.jpg' }
    ],
    conDipPatitas: true,
    c: 'Papas',
    e: '',
    img: 'nuggets-dips.jpg',
    imgs: ['nuggets-dips.jpg', 'nuggets-papas.jpg']
  }
]