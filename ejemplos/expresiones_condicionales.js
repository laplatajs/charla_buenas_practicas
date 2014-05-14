var ev,
    eUndef,
    eNul;
if (ACTIVE_EXPRESIONES_CONDICIONALES) {
  
  // funcion que arme para evaluar
  ev = function (value){
    if (value) {
      return true;
    } else {
      return false;
    }
  };
  
  eNul = null;
  console.log('if...');
  console.log('([0]) : '+ev([0])+' //porque Array es un objeto');
  console.log('(eUndef) : '+ev(eUndef)+' //porque definimos la variable eUndef sin asignarle un valor, por lo tanto eUndef es undefined');
  console.log('(eNul) : '+ev(eNul)+' //porque definimos la variable eNul asignandole null');
  console.log('(true) : '+ev(true)+' //no pienso aclarar nada');
  console.log('(+0) : '+ev(+0));
  console.log('(5) : '+ev(5));
  console.log('(\'\') : '+ev(''));
  console.log('(\'test\') : '+ev('test'));
}