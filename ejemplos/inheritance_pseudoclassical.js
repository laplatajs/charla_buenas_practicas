var _extends, 
  Persona,
  Alumno,
  personaInst,
  alumnoInst;

/**
 * Object.create es una funcion ideada por Douglas e incorporada
 * en javascript nativamente desde la ECMAScript 5.
 *
 */
if (ACTIVE_INHERITANCE_PSEUDOCLASSICAL) {
  _extends = function (child, parent) {
    // Inherit from the parent class
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }
  
  // Padre class constructor
  Persona = function Persona(nombre) {
    this.nombre = nombre || 'batman';
  };

  // Persona class method
  Persona.prototype.miNombreEs = function () {
    console.log('Mi nombre es ' + this.nombre);
  };

  // Child class constructor
  Alumno = function Alumno(legajo, nombre) {
    Persona.call(this, nombre);
    this.legajo = legajo || '0000';
  };
  _extends(Alumno, Persona);
  
  // Alumno class method
  Alumno.prototype.miLegajoEs = function () {
    console.log('Mi legajo es '+this.legajo);
  };

  // Instancia de Persona
  var personaInst = new Persona();
  
  // Instancia de Alumno
  var alumnoInst = new Alumno(8502, 'Martin');
}