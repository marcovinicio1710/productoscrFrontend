import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import fetch from 'node-fetch'; // Ahora puedes usar `import` directamente


// Base URL del sitio
const BASE_URL = 'https://productoscr.com';

// URL de tu API de productos
const API_URL = 'https://productoscrapi.onrender.com/api/productos-sitemap/';

// Rutas estáticas
const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/login', changefreq: 'monthly', priority: 0.3 },
    { url: '/register', changefreq: 'monthly', priority: 0.3 },
    { url: '/info-regalos', changefreq: 'monthly', priority: 0.5 },
    { url: '/quienes-somos', changefreq: 'monthly', priority: 0.5 },
    { url: '/Preguntas-Frecuentes', changefreq: 'monthly', priority: 0.5 },
    { url: '/Formas-De-Pago', changefreq: 'monthly', priority: 0.5 },
    { url: '/Envios-Tarifas', changefreq: 'monthly', priority: 0.5 },
    { url: '/Como-Comprar', changefreq: 'monthly', priority: 0.5 },
    { url: '/Terminos-Y-Condiciones', changefreq: 'monthly', priority: 0.5 },
    { url: '/Politica-De-Privacidad', changefreq: 'monthly', priority: 0.5 },
    { url: '/Devoluciones-Y-Garantias', changefreq: 'monthly', priority: 0.5 },
];

// Función para formatear los nombres en la URL
const formatNameForUrl = (marca, nombre, categoria, subcategoria) => {
    return [marca, nombre, categoria, subcategoria]
        .join('+') // Une los valores con "+"
        .replace(/[\s]/g, '+') // Reemplaza espacios por "+"
        .replace(/[^\w\+]/g, ''); // Elimina caracteres especiales
};

// Función para obtener los productos desde la API
async function fetchProductos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

// Función para generar el sitemap
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Añadir rutas estáticas
    staticRoutes.forEach(route => {
        sitemap.write({
            url: route.url,
            changefreq: route.changefreq,
            priority: route.priority,
        });
    });

    // Obtener productos dinámicos
    const productos = await fetchProductos();

    // Añadir rutas dinámicas para los productos
    productos.forEach(producto => {
        const formattedName = formatNameForUrl(
            producto.marca,
            producto.nombre,
            producto.categoria,
            producto.subcategoria
        );

        sitemap.write({
            url: `/products/${producto.id}?name=${formattedName}`,
            changefreq: 'weekly',
            priority: 0.8,
        });
    });

    sitemap.end();

    // Escribir el archivo `sitemap.xml`
    const sitemapOutput = await streamToPromise(sitemap);
    fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString());
    console.log('Sitemap generado exitosamente.');
}

// Ejecutar la generación del sitemap
generateSitemap().catch(console.error);
