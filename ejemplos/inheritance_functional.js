var _extends,
  Persona,
  Alumno,
  personaInst,
  alumnoInst;

if (ACTIVE_INHERITANCE_FUNCTIONAL) {
  
  Persona = function (nombre, dni) {
    // atributo privado. Puede ser una funcion tambien.
    var _dni = dni || '00000000';
   
    // atributo protected
    var protected = this;
    protected._age = 45;
    
    var that = new(function Persona(nombre) {
      this.nombre = nombre || 'batman';
      this.yoSoy = function () {
        console.log('Yo soy ' + this.nombre + ' y mi dni es ' + _dni);
      };
    });

    return that;
  };

  Alumno = function (nombre, dni, legajo) {
    var protected = {};
    var that = Persona.call(protected, nombre, dni);
    that.legajo = legajo || '0000';
    that.miLegajoEs = function () {
      this.yoSoy();
      console.log('Y mi legajo de alumno es: ' + this.legajo);
    };
    that.varProtected = function () {
      console.log('Acceso al atributo protected: ' + protected._age);
    };

    return that;
  };

  personaInst = Persona('martin', '34488556');
  
  alumnoInst = Alumno('martin', '34488556', 8502);
}