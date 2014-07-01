var persona,
  alumno;

/**
 * Object.create es una funcion ideada por Douglas e incorporada
 * en javascript nativamente desde la ECMAScript 5.
 *
 */
if (ACTIVE_INHERITANCE_PROTOTYPAL) {
  // directamente trabajamos con objetos instanciados
  persona = {
    nombre : 'Batman',
    miNombreEs : function () {
      return this.nombre;
    }
  };

  // creo un objeto nuevo en base a las caracteristicas de persona
  alumno = Object.create(persona);
  alumno.nombre = 'Martin';
  alumno.legajo = 8502;
  alumno.miLegajoEs = function () {
    console.log('Mi legajo es '+this.legajo);
  };
  persona.miNombreEs('hola')
}
