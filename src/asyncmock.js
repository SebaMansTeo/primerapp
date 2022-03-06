const products = [
    { id: 1, name: 'Arigato Table Lamp', price: 13.210, category: 'lifestyle', img: "https://sw13716.sfstatic.io/upload_dir/shop/Arigato-bordlampe-Grupa-sort-AR-T.jpg", stock: 25, description:'Lámpara de mesa con diseño  funcional de Guapa'},
    { id: 2, name: 'Diseño Taschen', price: 4.350, category: 'books', img:'https://images.cdn2.buscalibre.com/fit-in/360x360/19/42/1942487de54a338910f5330aeaf4bf6f.jpg', stock: 16, description:'La biblia del diseño del siglo XX. Del modernismo al minimalismo, pasando por todas las corrientes intermedias.'},
    { id: 3, name: 'Bandeja Vinilo', price: 69.320, category: 'lifestyle', img:'https://http2.mlstatic.com/D_NQ_NP_932866-MLA43057271219_082020-O.webp', stock: 16, description:'Bandeja Audio-Technica Consumer'},
    { id: 4, name: 'Apple Homepod', price: 44.930, category: 'tech', img:'https://stylewatch.vtexassets.com/arquivos/ids/206713-500-auto?v=637758727535830000&width=500&height=auto&aspect=true', stock: 16, description:'El Apple HomePod Mini es un mini altavoz cargado de grandes innovaciones tecnológicas y capaz de llenar la habitación con sonido 360º'},
    { id: 5, name: 'Tostador Retro Livoo', price: 14.300, category: 'lifestyle', img:'https://www.livoo.fr/175971-medium_default/tostadora-electrica-retro-de-dos-ranuras.jpg', stock: 10, description:'Tostadora retro con 3 funciones, luces indicadoras LED: parar, recalentar y descongelar'},
    { id: 6, name: 'Pop Art Taschen', price: 3.300, category: 'books', img:'https://images.cdn3.buscalibre.com/fit-in/360x360/3c/18/3c183fe22078aa5e1bf7a8d2d6ccc367.jpg', stock: 10, description:'Observaciones acerca de todo lo referente a los medios de masas, la sociedad de consumo, la publicidad y el envasado de productos.Los movimientos y géneros más importantes de la historia del arteLos artistas pop de la década de 1960, precedidos por el gran Andy Warhol, '},
    { id: 7, name: 'Illsutrator Taschen', price: 4.500, category: 'books', img:'https://stylewatch.vtexassets.com/arquivos/ids/175169-800-auto?width=800&height=auto&aspect=true', stock: 10, description:'Libro TASCHEN. Para todos aquellos que pensaron que lo digital anunciaba el final de un oficio: la ilustración está viva y coleando.'},
    { id: 8, name: 'Apple Mag Mouse', price: 22.735, category: 'tech', img:'https://stylewatch.vtexassets.com/arquivos/ids/206796-800-auto?width=800&height=auto&aspect=true', stock: 10, description:'El Apple Magic Mouse es inalámbrico y recargable, y tiene una base con un diseño optimizado que te permite moverlo fácilmente por todo el escritorio.'},
    { id: 9, name: 'Lámpara Colgante', price: 10.900, category: 'lifestyle', img:'https://ddz5v9n0a16cg.cloudfront.net/web/images/productos/b/0000016000/16353.jpg', stock: 16, description:'Lámpara Colgante Lett Cobre con Aplique de Cuero'},
    { id: 10, name: 'Lámpara Lett', price: 12.257, category: 'lifestyle', img:'https://ddz5v9n0a16cg.cloudfront.net/web/images/productos/b/0000016000/16372.jpg', stock: 16, description:'Lámpara Colgante Lett Metal y Madera Negra 35 cm'},
    { id: 11, name: 'Van Gogh Taschen', price: 5.321, category: 'books', img:'https://images.cdn3.buscalibre.com/fit-in/360x360/0f/46/0f46f843449268fcce1929e939fba987.jpg', stock: 16, description:'Talento atormentado El genio y la angustia de un maestro expresionista La historia de Vincent van Gogh es una de las más paradójicas de la historia del arte'},
    { id: 12, name: 'Vitruvi Diffuser', price: 5.320, category: 'lifestyle', img:'https://images-na.ssl-images-amazon.com/images/I/31a6DIlP-gL.jpg', stock: 16, description:'Difusor de Piedra Vitruvi, Difusor Ultrasónico de Aceite Esencial de Cerámica para Aromaterapia'},
    { id: 13, name: 'Apple AirTag', price: 11.295, category: 'tech', img:'https://stylewatch.vtexassets.com/arquivos/ids/205619-800-auto?width=800&height=auto&aspect=true', stock: 16, description:'Nunca más se preocupe por perder dispositivos y otras pertenencias con Apple AirTag. Este elegante disco de rastreo se puede guardar en una billetera o estuche, o puede usar un accesorio opcional para integrarlo con sus llaves o adjuntarlo a un bolso o mochila'}
]

export const getProducts = (category) => {
    return new Promise((resolve) => {

        if (category != null){
            const categ = products.filter(p => p.category === category)
            setTimeout(() => {
            resolve(categ)
        }, 1000)
        }
        else{
            setTimeout(() => {
                resolve(products)
            }, 1000)
        }
        
        
    })
}



export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

