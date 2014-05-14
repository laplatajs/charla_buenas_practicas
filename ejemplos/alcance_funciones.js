var foo;
if (ACTIVE_ALCANCE_FUNCIONES) {
  var foo = function () {
    console.log(this.nombre);
  };
  nombre = "Martin";
  // imprime martin porque this accede al objeto global
  foo(); // es igual que hacer foo.call(this);
  
  /** 
   * imprime batman porque this ahora se cambio explicitamente 
   * por el objeto literal {nombre: 'batman'}
   */
  foo.call({
    nombre: 'batman'
  });
}