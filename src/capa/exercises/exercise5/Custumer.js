const custumer = require("./customers.json");

custumer.clientes.forEach((compras) => {

  compras.compras.forEach((product) => {
    let newProduct = {}    
    if (newProduct[product.producto]) {
      newProduct = newProduct[product.producto.for] = {}
    }
    newProduct[product.producto] = product
    console.log("product: " + product.producto + " Newproduct " + newProduct );
  })
  compras.compras.forEach((categorie) => {
    console.log("compras: " + categorie.categoria + "");
  })
})