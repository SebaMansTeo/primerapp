const products = [
    { id: 1, name: 'Silla Nórdica', price: 'usd 1000', category: 'lifestyle', img: "https://www.kionadecoracion.com/222892-large_default/silla-de-comedor-de-diseno-nordico-eva.jpg", stock: 25, description:'silla nordica'},
    { id: 2, name: 'samsung s21', price: 'usd 800', category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21'},
    { id: 3, name: 'Ipad 8va generacion', price: 'usd 1200', category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description:'Descripcion de Ipad'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}