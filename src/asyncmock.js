const products = [
    { id: 1, name: 'Silla Nórdica', price: 'usd 1000', category: 'lifestyle', img: "https://www.kionadecoracion.com/222892-large_default/silla-de-comedor-de-diseno-nordico-eva.jpg", stock: 25, description:'silla nordica'},
    { id: 2, name: 'Responsive Design', price: 'usd 800', category: 'book', img:'https://assets.awwwards.com/awards/images/2012/08/responsive-web-design-books-transparency%20(2).png', stock: 16, description:'Descripcion de Samsung s21'},
    { id: 3, name: 'HTML5 CSS3', price: 'usd 1200', category: 'book', img:'https://assets.awwwards.com/awards/images/2012/08/responsive-web-design-books-transparency%20(1).png', stock: 10, description:'Descripcion de Ipad'},
    { id: 4, name: 'Design Book', price: 'usd 800', category: 'book', img:'https://kbimages1-a.akamaihd.net/8f30a2c0-0834-4a3d-94a5-770e11050425/353/569/90/False/the-non-designer-s-design-book-3.jpg', stock: 16, description:'Descripcion de Samsung s21'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[2])
        }, 3000)
    })
}