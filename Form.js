class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.input = createInput();
        this.button = createButton("Registrar producto");
        this.nombredelproducto= createElement("h3");
        this.input1 = createInput();
        this.categoriaodepartamento= createElement("h3");
        this.input2= createInput();
        this.preciodelproducto= createElement("h3")
        this.input3= createInput();
        this.descripciondelproducto=createElement("h3");
        this.input4= createInput();
        this.stock= createElement("h3");
        this.input5= createInput();
    }
    display(){
        this.title.html("REGISTRO DEL PRODUCTO");
        this.title.position(130,0);
        this.nombredelproducto.html("Ingresa el nombre del producto");
        this.nombredelproducto.position(130,100);
        this.categoriaodepartamento.html("Ingresa la categoria o departamento");
        this.categoriaodepartamento.position(140,200);
        this.preciodelproducto.html("Ingresa el precio del producto");
        this.preciodelproducto.position(150,300);
        this.descripciondelproducto.html("Ingresa la descripción del producto");
        this.descripciondelproducto.position(160,400);
        this.stock.html("Ingresa el stock");
        this.stock.position(170,500);

        this.input.position(130,160);
        this.button.position(500,560);
        this.input1.position(150,260);
        this.input2.position(160,360);
        this.input3.position(170,460);
        this.input4.position(180,560);
        this.input5.position(190,660);
        
        this.button.mousePressed(()=>{
            producto.nombredelproducto=this.input.value();
            producto.update();
            producto.categoriaodepartamento=this.input2.value();
            producto.update();
            producto.preciodelproducto=this.input3.value();
            producto.update();
            producto.descripciondelproducto=this.input4.value();
            producto.update();
            producto.stock=this.input5.value();
            producto.update();
        })
    }
}