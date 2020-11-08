function alerta() 
{
  if(bool0==true && bool1==true && bool2==true && bool3==true && bool4==true && bool5==true)
   {
      alert ("Registrado existosamente");
   } 
}

var bool0 = false;
function provincia()
{
   bool0=true;
}

/*---------------------------------------------------------Funcion evaluar alfanumerico---------------------------------------------------------*/

var acumuladorletras="";
var bool1 = false;
function borra0()
{
   var nueva="";

      for(a=0;a<acumuladorletras.length-1;a++)
       {
          nueva=nueva+acumuladorletras[a];
       }

      acumuladorletras=nueva;
}

function evaluar()
{
   letras=" abcdefghijklmnñopqrstuvwxyz1234567890,";
   especiales="8-37-38-46-164";
   tecladoEspecial=false;

   for(var i in especiales)
    {
        if(key==especiales[i])
        {
         tecladoEspecial=true;break;
        }
    }

  if(letras.indexOf(teclado)==-1 && !tecladoEspecial)
   {
       alert("Ese caracter no esta permitido");
       return false;
   }
}

function soloAlfanumerico(e)
{
   key=e.keyCode || e.which;
   
   teclado=String.fromCharCode(key).toLowerCase();
   
   
   if(acumuladorletras.length>=7)
   {

     if(key=="8")
      {
           borra0();

      }else{
             evaluar();
             alert("Maximo caracteres alcanzados, -Máximo 7-");
             return false;
           }
   }else
    {

          if(key=="8")
           {
              borra0();
           }else
            {
               evaluar();
               acumuladorletras=acumuladorletras+teclado;
               bool1 = true;
            }

    }

}

/*---------------------------------------------------------Funcion evaluar si no---------------------------------------------------------*/


var acumula="";
var bool2 = false;
function borra1()
{
   var nueva="";

      for(a=0;a<acumula.length-1;a++)
       {
          nueva=nueva+acumula[a];
       }

      acumula=nueva;
}

function soloSiNo(e)
{
   key=e.keyCode || e.which;

   teclado=String.fromCharCode(key).toLowerCase();
   
   if(acumula.length>=2)
   {
      if(key=="8")
      {
           borra1();

      }else{
             alert("Maximo letras alcanzado");
             return false;
           }

   }else if(key=="8")
   {
      
      borra1();

   }else if(teclado!=="s" && teclado!=="i" && teclado!=="n" && teclado!=="o")
   {
      alert("Esta letra no componen ni SI o No");
      return false;

   }else  if(key=="127")
   {
       acumula="";

   }else if(teclado=="s" ||teclado=="i" || teclado=="n" || teclado=="o" || key!=="8")
   {
         acumula=acumula+teclado;

         if(acumula=="si")
          {
             alert("El dato cumple con los requisitos para ser guardado");
             bool2=true;
          }

        if(acumula=="no")
          {
             alert("El dato cumple con los requisitos para ser guardado");
             bool2=true;
          } 
    }
    
}


/*---------------------------------------------------------Funcion evaluar alfanumerico---------------------------------------------------------*/

var acumula1="";
var bool3 = false;
function borra2()
{
   var nueva="";

      for(a=0;a<acumula1.length-1;a++)
       {
          nueva=nueva+acumula1[a];
       }

      acumula1=nueva;
}

function soloSiNo2(e)
{
   key=e.keyCode || e.which;

   teclado=String.fromCharCode(key).toLowerCase();
   
   if(acumula1.length>=2)
   {
      if(key=="8")
      {
           borra2();

      }else{
             alert("Maximo letras alcanzado");
             return false;
           }

   }else if(key=="8")
   {
      
      borra2();

   }else if(teclado!=="s" && teclado!=="i" && teclado!=="n" && teclado!=="o")
   {
      alert("Esta letra no componen ni SI o No");
      return false;

   }else  if(key=="127")
   {
       acumula1="";

   }else if(teclado=="s" ||teclado=="i" || teclado=="n" || teclado=="o" || key!=="8")
   {
         acumula1=acumula1+teclado;

         if(acumula1=="si")
          {
             alert("El dato cumple con los requisitos para ser guardado");
             bool3=true;
          }

        if(acumula1=="no")
          {
             alert("El dato cumple con los requisitos para ser guardado");
             bool3=true;
          } 
    }
    
}

/*---------------------------------------------------------Funcion evaluar numerico1---------------------------------------------------------*/


var acumuladorNumeros="";
var permitir=true;
var bool4 = false;
function borra3()
{
   var nueva="";

      for(a=0;a<acumuladorNumeros.length-2;a++)
       {
          nueva=nueva+acumuladorNumeros[a];
       }

      acumuladorNumeros=nueva;
      
}

function soloNumerico(e)
{
   key=e.keyCode || e.which;
   
   teclado=String.fromCharCode(key).toLowerCase();
   
  if(permitir==true)
   {
      try
       {
         acumuladorNumeros=acumuladorNumeros+teclado;
         var comodin=parseInt(acumuladorNumeros);
         permitir=true;
       }catch(error)
         {
            permitir=false;
         }
   }

   if(key=="8")
   { 
       borra3();
       permitir=true;

   }else if(comodin>=1 && comodin<=1000 && key!=="8" && permitir==true)
             {
                permitir=true;
                bool4=true;
             }else if(acumuladorNumeros.charAt(1)=="0" && permitir==true)
              {
                    alert("Maximo o minimos alcanzados, -Valores entre 1 y 1000-, Borre para continuar");
                    permitir=false;
                    return false;
              }else
                {
                    alert("Maximo o minimos alcanzados, -Valores entre 1 y 1000-, Borre para continuar");
                    permitir=false;
                    return false;
                }

}


/*---------------------------------------------------------Funcion evaluar numerico2---------------------------------------------------------*/


var acumuladorNumeros1="";
var permitir1=true;
var bool5 = false;
function borra4()
{
   var nueva="";

      for(a=0;a<acumuladorNumeros1.length-2;a++)
       {
          nueva=nueva+acumuladorNumeros1[a];
       }

      acumuladorNumeros1=nueva;
      
}

function soloNumerico1(e)
{
   key=e.keyCode || e.which;
   
   teclado=String.fromCharCode(key).toLowerCase();
   
  if(permitir1==true)
   {
      try
       {
         acumuladorNumeros1=acumuladorNumeros1+teclado;
         var comodin=parseInt(acumuladorNumeros1);
         permitir1=true;
       }catch(error)
         {
            permitir1=false;
         }
   }

   if(key=="8")
   { 
       borra4();
       permitir1=true;

   }else if(comodin>=1 && comodin<=1000 && key!=="8" && permitir1==true)
             {
                permitir1=true; 
                bool5=true;
             }else if(acumuladorNumeros1.charAt(1)=="0" && permitir1==true)
              {
                    alert("Maximo o minimos alcanzados, -Valores entre 1 y 1000-, Borre para continuar");
                    permitir1=false;
                    return false;
              }else
                {
                    alert("Maximo o minimos alcanzados, -Valores entre 1 y 1000-, Borre para continuar");
                    permitir1=false;
                    return false;
                }

}