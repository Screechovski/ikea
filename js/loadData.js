import getData from "./getData.js";

export default () => {
    const wishList = ['idd005', 'idd004', 'idd034', 'idd064'];
    const cardList = [{
        id: 'idd017',
        count: 3
    },{
        id: 'idd047',
        count: 4
    },{
        id: 'idd071',
        count: 2
    }]

    if (location.search.length > 0) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop == 's') {
            getData.search(value, data => console.log(data))
        } else if (prop == 'wishlist') {
            getData.wishList(wishList, (data)=>{console.log(data)});
        } else if (prop == 'cat' || prop == 'subcat') {
            getData.category(prop, value, (data)=>{console.log(data)})
        } 
    }
    if (location.hash.length > 0) {
        getData.item(location.hash.substring(1), data => console.log(data))
    }
    if (location.pathname.includes('cart')) {
        getData.cart(cardList, data => console.log(data))
    }

    getData.catalog(data => console.log(data))
    getData.subCatalog("Декор", data => console.log(data))
};