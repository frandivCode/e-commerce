import imgFernet from './assets/img/fernet.png';
import imgAbsolut from './assets/img/absolut.png';
import imgSky from './assets/img/sky.png';
import imgSmirnoff from './assets/img/smirnoff.png';
import imgSmirnoffDos from './assets/img/smirnoff-tamarindo.png';
import imgAbsolutMango from './assets/img/absolut-mango.png';
import elementoCocteleriaUno from './assets/img-cocteleria/barspoon-with-muddler-fullbar-gold.png';
import elementoCocteleriaDos from './assets/img-cocteleria/bell-jigger-japones-bronze.png';
import elementoCocteleriaTres from './assets/img-cocteleria/boston-shaker-engraved-skull.png';
import elementoCocteleriaCuatro from './assets/img-cocteleria/colador-conico-gold.png';
import elementoCocteleriaCinco from './assets/img-cocteleria/pelador-de-citricos-premium-gold.png';
import elementoCocteleriaSeis from './assets/img-cocteleria/pinza-curva-decoracion-30-cm-black.png';
import elementoCocteleriaSiete from './assets/img-cocteleria/pinzas-para-hielo-copper.png';
import elementoCocteleriaOcho from './assets/img-cocteleria/rallador-de-citricos-y-cester.png';

const imagenes = {
    fernet: imgFernet,
    absolut: imgAbsolut,
    absolutMango: imgAbsolutMango,
    sky: imgSky,
    smirnoff: imgSmirnoff,
    smirnoffTamarindo: imgSmirnoffDos,
    elementoUno: elementoCocteleriaUno,
    elementoDos: elementoCocteleriaDos,
    elementoTres: elementoCocteleriaTres,
    elementoCuatro: elementoCocteleriaCuatro,
    elementoCinco: elementoCocteleriaCinco,
    elementoSeis: elementoCocteleriaSeis,
    elementoSiete: elementoCocteleriaSiete,
    elementoOcho: elementoCocteleriaOcho
};

const productos = [
    { id: 1, img: imagenes.absolut, nombre: 'Absolut Classic', tipo: 'Vodka', precio: 22377, category: 'bebidas', descripcion: 'Un vodka premium sueco, conocido por su pureza y suavidad, perfecto para cócteles o disfrutar solo.' },
    { id: 2, img: imagenes.absolutMango, nombre: 'Absolut Mango', tipo: 'Vodka', precio: 19700, category: 'bebidas', descripcion: 'Este vodka infundido con mango ofrece un sabor tropical y dulce, ideal para bebidas refrescantes.' },
    { id: 3, img: imagenes.smirnoff, nombre: 'Smirnoff Raspberry', tipo: 'Vodka', precio: 7800, category: 'bebidas', descripcion: 'Vodka con un toque de frambuesa, perfecto para darle un giro afrutado a tus mezclas favoritas.' },
    { id: 4, img: imagenes.smirnoffTamarindo, nombre: 'Smirnoff Tamarindo', tipo: 'Vodka', precio: 7300, category: 'bebidas', descripcion: 'Un vodka con un sabor exótico a tamarindo, que añade un perfil único a tus cócteles.' },
    { id: 5, img: imagenes.sky, nombre: 'Skyy Classic', tipo: 'Vodka', precio: 8000, category: 'bebidas', descripcion: 'Este vodka americano es conocido por su pureza y carácter suave, ideal para cócteles clásicos.' },
    { id: 6, img: imagenes.fernet, nombre: 'Fernet Branca', tipo: 'Amaro', precio: 10850, category: 'bebidas', descripcion: 'Un amaro italiano, famoso por su sabor intenso y herbal, excelente como digestivo o en cócteles.' },
    { id: 7, img: imagenes.elementoUno, nombre: 'Barspoon muddler', tipo: 'Herramienta bar', precio: 11200, category: 'cocteleria', descripcion: 'Herramienta esencial para baristas, perfecta para macerar hierbas y frutas en tus bebidas.' },
    { id: 8, img: imagenes.elementoDos, nombre: 'Bell Jigger Japones', tipo: 'Herramienta bar', precio: 13990, category: 'cocteleria', descripcion: 'Un medidor de precisión con diseño japonés, ideal para medir tus ingredientes al milímetro.' },
    { id: 9, img: imagenes.elementoTres, nombre: 'Boston Shaker', tipo: 'Herramienta bar', precio: 23990, category: 'cocteleria', descripcion: 'El clásico shaker de dos partes, perfecto para mezclar y enfriar tus cócteles de forma profesional.' },
    { id: 10, img: imagenes.elementoCuatro, nombre: 'Colador conico', tipo: 'Herramienta bar', precio: 9990, category: 'cocteleria', descripcion: 'Herramienta indispensable para colar tus mezclas, asegurando una presentación impecable en cada trago.' },
    { id: 11, img: imagenes.elementoCinco, nombre: 'Pelador de Citricos', tipo: 'Herramienta bar', precio: 14990, category: 'cocteleria', descripcion: 'Ideal para crear cáscaras decorativas, realzando la presentación y sabor de tus cócteles.' },
    { id: 12, img: imagenes.elementoSeis, nombre: 'Pinza Curva', tipo: 'Herramienta bar', precio: 17990, category: 'cocteleria', descripcion: 'Perfecta para servir hielo o decoraciones, añadiendo un toque elegante a tus creaciones.' },
    { id: 13, img: imagenes.elementoSiete, nombre: 'Pinzas para hielo', tipo: 'Herramienta bar', precio: 5990, category: 'cocteleria', descripcion: 'Herramienta esencial para manejar hielo con estilo, garantizando frescura en cada bebida.' },
    { id: 14, img: imagenes.elementoOcho, nombre: 'Rallador de citricos', tipo: 'Herramienta bar', precio: 7990, category: 'cocteleria', descripcion: 'Ideal para añadir un toque fresco de ralladura a tus cócteles, intensificando los sabores.' }
];



let productosCargados = null;

export const getProducts = () => {
    return new Promise((resolve) => {
        if (productosCargados) {
            resolve(productosCargados);
        } else {
            setTimeout(() => {
                productosCargados = productos;
                resolve(productos);
            }, 2000);
        }
    });
};

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const productId = parseInt(id);
        if (productosCargados) {
            const product = productosCargados.find((prod) => prod.id === productId);
            resolve(product);
        } else {
            const product = productos.find((prod) => prod.id === productId);
            resolve(product);
        }
    });
};


export const getCategory = (category) => {
    return new Promise((resolve) => {
        if (productosCargados) {
            const productosFiltrados = productosCargados.filter(producto => producto.category === category);
            resolve(productosFiltrados);
        } else {
            setTimeout(() => {
                productosCargados = productos;
                const productosFiltrados = productos.filter(producto => producto.category === category);
                resolve(productosFiltrados);
            }, 2000);
        }
    });
};