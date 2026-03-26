export const furnitureList = [
    {id: 0, name: "Biblioteca con puertas bajas", alt:"Imagen de biblioteca con puertas bajas", img: "/furniture/biblioteca-puertas-bajas-oficina.webp", price: "708500"},
    {id: 1, name: "Cajonera de 4 cajones", alt:"Imagen de cajonera con 4 cajones", img: "/furniture/cajonera-dormitorio.webp", price: "425000"},
    {id: 2, name: "Cama 1 plaza con 2 cajones", alt:"Imagen de cama 1 plaza con 2 cajones", img: "/furniture/cama-1plaza-2cajones-dormitorio.webp", price: "509000"},
    {id: 3, name: "Comoda de 4 cajones", alt:"Imagen de comoda con 4 cajones", img: "/furniture/comoda-4cajones-dormitorio.webp", price: "400000"},    
    {id: 4, name: "Escritorio con repisa", alt:"Imagen de escritorio con repisa", img: "/furniture/escritorio-repisa-oficina.webp", price: "330000"},
    {id: 5, name: "Escritorio de roble", alt:"Imagen de escritorio de roble", img: "/furniture/escritorio-roble-oficina.webp", price: "225000"},
    {id: 6, name: "Mesa de luz", alt:"Imagen de mesa de luz", img: "/furniture/mesa-luz-dormitorio.webp", price: "80000"},
    {id: 7, name: "Mesa de metal/madera y 6 sillas", alt:"Imagen de de mesa con 6 sillas", img: "/furniture/mesa-metal-madera-6sillas-comedor.webp", price: "425000"},
    {id: 8, name: "Mesa de metal/vidrio y 4 sillas", alt:"Imagen de mesa con 4 sillas", img: "/furniture/mesa-metal-vidrio-4sillas-comedor.webp", price: "350000"},
    {id: 9, name: "Mesa redonda", alt:"Imagen de mesa redonda", img: "/furniture/mesa-redonda-comedor.webp", price: "200500"},
    {id: 10, name: "Placard", alt:"Imagen de placard", img: "/furniture/placard-dormitorio.webp", price: "500000"},
    {id: 11, name: "Silla estilo bar", alt:"Imagen de silla bar", img: "/furniture/silla-bar-comedor.webp", price: "75000"},
]

/**
 * SOLUCIÓN -> para este caso lo mejor es usar lacarpeta public (porque lo tenés en un array/Json).

move tus carpetas de imágenes de src/assets/furniture a public/furniture

en tu archivo furnitureList, cambia las rutas para que sean relativas a la raíz del servidor (que será la carpeta public):
// Antes
img: "/-src-/assets/furniture/biblioteca.webp"

// Ahora (Vite entiende que debe buscar en la raíz del deploy)
img: "/furniture/biblioteca.webp" 

 */