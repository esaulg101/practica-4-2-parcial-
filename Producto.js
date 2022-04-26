class Producto{
    constructor (){
        this.nombredelproducto=null;
        this.categoriaodepartamento= null;
        this.preciodelproducto=null;
        this.descripcióndelproducto=null;
        this.stock=null;
    }
    update(){
        database.ref('Producto').set({
            "nombre del producto": this.nombredelproducto,
            "categoria o departamento": this.categoriaoproducto,
            "precio del producto": this.preciodelproducto,
            "descripción del producto": this.descripciondelproducto,
            "stock": this.stock
        })
    }
}