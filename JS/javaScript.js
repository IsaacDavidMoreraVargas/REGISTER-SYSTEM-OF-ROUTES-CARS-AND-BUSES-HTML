var banderin=0;
/*---------------------------------------------------------Funcion valor provincia---------------------------------------------------------*/

var provinciaPermanente="";
var bool0 = false;

function provinciaAdd(comodinRecibido)
{ 
     if("p0"==comodinRecibido)
       {
          provinciaPermanente="Valor provincia invalido";
          bool0=false;
       }else if("p1"==comodinRecibido)
       {
          provinciaPermanente="San Jose";
          bool0=true;
       }else if("p2"==comodinRecibido)
       {
          provinciaPermanente="Alajuela";
          bool0=true;
       }else if("p3"==comodinRecibido)
       {
          provinciaPermanente="Heredia";
          bool0=true;
       }else if("p4"==comodinRecibido)
       {
          provinciaPermanente="Guanacaste";
          bool0=true;
       }else if("p5"==comodinRecibido)
       {
          provinciaPermanente="Limón";
          bool0=true;
       }else if("p6"==comodinRecibido)
       {
          provinciaPermanente="Puntarenas";
          bool0=true;
       }else if("p7"==comodinRecibido)
       {
          provinciaPermanente="Cartago";
          bool0=true;
       }

}

/*---------------------------------------------------------Funcion evaluar alfanumerico Ruta---------------------------------------------------------*/

var RutaPermanente="";
var bool1 = false;

function borraRuta()
{
   var nueva="";

      for(a=0;a<RutaPermanente.length-1;a++)
       {
          nueva=nueva+RutaPermanente[a];
       }

      RutaPermanente=nueva;
}

function evaluarRuta()
{
   letras="abcdefghijklmnñopqrstuvwxyz1234567890";
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

function Ruta(e)
{
   document.getElementById("ruta").value= RutaPermanente;
   key=e.keyCode || e.which;
   
   teclado=String.fromCharCode(key).toLowerCase();
   
   if(RutaPermanente.length>=7)
   {

     if(key=="8")
      {
           borraRuta();

      }else{
             evaluarRuta();
             alert("Maximo caracteres alcanzados, -Máximo 7-");
             return false;
           }
   }else
    {

          if(key=="8")
           {
              borraRuta();
           }else
            {
               evaluarRuta();
               RutaPermanente=RutaPermanente+teclado;
               bool1 = true;
            }

    }

}

/*---------------------------------------------------------Funcion evaluar si no autorizado---------------------------------------------------------*/


var AutorizadoPermanente="";
var bool2 = false;


function Autorizado(comodin)
{
 
  if(comodin=="a1")
  {

     AutorizadoPermanente="Si";
     
  }else if(comodin=="a2")
   {
   
     AutorizadoPermanente="No";
     
   }

   bool2 = true;
}  


/*---------------------------------------------------------Funcion si no Inscrito---------------------------------------------------------*/

var InscritoPermanente="";
var bool3 = false;


function Inscrito(comodin)
{

  if(comodin=="i1")
  {

     InscritoPermanente="Si";
 
  }else if(comodin=="i2")
   {

     InscritoPermanente="No";
    
   }

    bool3 = true;
}

/*---------------------------------------------------------Funcion evaluar numerico pasajeros sentados---------------------------------------------------------*/


var PasajerosSentadosPermanente="";
var permitir=true;
var bool4 = false;
var comodinPS=0;

function borrarPasajerosSentados(fin)
{
   var nueva="";         

       for(a=0;a<fin;a++)
           {
              nueva=nueva+PasajerosSentadosPermanente[a];
           }

           PasajerosSentadosPermanente=nueva;
           
           comodinPS=parseInt(PasajerosSentadosPermanente);
}

function PasajerosSentados(e)
{
   var comparador="";
   document.getElementById("pasajeroSentados").value=PasajerosSentadosPermanente;
   key=e.keyCode || e.which;
   
   for(b=48; b<58; b++)
   {
       comparador=b.toString();

       if(comparador==key && key!=="8")
       { 
           teclado=String.fromCharCode(key).toLowerCase(); 
           PasajerosSentadosPermanente=PasajerosSentadosPermanente+teclado;
           
           

           comodinPS=parseInt(PasajerosSentadosPermanente);
           permitir==true;
           bool4=true;
           break;

       }else
        {
            permitir==false;
        }

   }

       if(key=="8")
        {
          borrarPasajerosSentados(PasajerosSentadosPermanente.length-1);
        }
         
        if(PasajerosSentadosPermanente.charAt(0)=="0")
        {
          borrarPasajerosSentados(PasajerosSentadosPermanente.length-1);
          alert("El primer numero no puede ser 0");
          bool4=false;
          return false;
        }

          if(comodinPS>1000)
              {
                   borrarPasajerosSentados(PasajerosSentadosPermanente.length-1);
                   alert("Querias exceder el maximo, Máximo 1000");
                   return false;

              }if(permitir==false)
                      {
                           alert("Ese caracter no esta permitido");
                           return false;
                      }

}


/*---------------------------------------------------------Funcion evaluar numerico pasajeros pie---------------------------------------------------------*/


var PasajerosPiePermanente="";
var permitir1=true;
var bool5 = false;
var comodinPP=0;

function borraPasajerosPie(fin)
{
   var nueva="";         

       for(a=0;a<fin;a++)
           {
              nueva=nueva+PasajerosPiePermanente[a];
           }

           PasajerosPiePermanente=nueva;
           
           comodinPP=parseInt(PasajerosPiePermanente);
      
}

function PasajerosPie(e)
{
   var comparador="";
   document.getElementById("pasajeroPie").value=PasajerosPiePermanente;
   key=e.keyCode || e.which;
   
   for(b=48; b<58; b++)
   {
       comparador=b.toString();

       if(comparador==key && key!=="8")
       { 
           teclado=String.fromCharCode(key).toLowerCase(); 
           PasajerosPiePermanente=PasajerosPiePermanente+teclado;

           comodinPP=parseInt(PasajerosPiePermanente);
           permitir1==true;
           bool5=true;
           break;

       }else
        {
            permitir1==false;
        }

   }

       if(key=="8")
        {
          borraPasajerosPie(PasajerosPiePermanente.length-1);
        }
         
        if(PasajerosPiePermanente.charAt(0)=="0")
        {
          borraPasajerosPie(PasajerosPiePermanente.length-1);
          alert("El primer numero no puede ser 0");
          bool5=false;
          return false;
        }

          if(comodinPP>1000)
              {
                   borraPasajerosPie(PasajerosPiePermanente.length-1);
                   alert("Querias exceder el maximo, Máximo 1000");
                   return false;

              }if(permitir1==false)
                      {
                           alert("Ese caracter no esta permitido");
                           return false;
                      }
      
}

/*---------------------------------------------------------Funcion cambiar imagen---------------------------------------------------------*/

var num=0;
var boolmostrar=false;
var buscador="";

function mostrar(comodin) 
{

 var foto=document.getElementById("foto");

 if(comodin=="p0")
  {
      boolmostrar=false;
      alert("Valor para consulta de provincia invalido");
      num=0;
  }else if(comodin=="p1")
   {  
      num=1;
      buscador="San Jose";
      boolmostrar=true;
    }else if(comodin=="p2")
      {
           num=2;
           buscador="Alajuela";
           boolmostrar=true;
      }else if(comodin=="p3")
        {
             num=3;
             buscador="Heredia";
             boolmostrar=true;
         }else if(comodin=="p4")
            {
                 
               num=4;
               buscador="Guanacaste";
               boolmostrar=true;
            }else if(comodin=="p5")
                {
                   num=5;
                   buscador="Limón";
                   boolmostrar=true;
                }else if(comodin=="p6")
                    {
                        
                       num=6;
                       buscador="Puntarenas";
                       boolmostrar=true;
                    }else if(comodin=="p7")
                       {
                            num=7;
                            buscador="Cartago";
                            boolmostrar=true;
                       } 
   
   foto.src="imagenes/foto"+num+".png";

}

/*---------------------------------------------------------Funcion pasar variables---------------------------------------------------------*/

function pasarAregistro() 
{ 
    var opcion = confirm("¿Desea registrar");
    if (opcion == true) 
      {
             
           if(bool0==true && bool1==true && bool2==true && bool3==true && bool4==true && bool5==true)
           {
              alert ("Registrado existosamente\nProvincia:"+provinciaPermanente+"\nRuta: "+RutaPermanente+"\nAutorizado: "+AutorizadoPermanente+"\nInscrito: "+InscritoPermanente+"\nCant Pasajeros Sentados: "+PasajerosSentadosPermanente+"\nCantidad Pasajeros Pie: "+PasajerosPiePermanente);
              crearMatriz();
           }else
              {
                 alert ("No puedes registrar, algun dato esta erroneo");
              }
	} else {
	    alert ("No has guardado");
	}
  
}


var matriz=" ";

function crearMatriz()
{
     matriz+="!"+","+provinciaPermanente+"-";
     matriz+=","+RutaPermanente+"-";
     matriz+=","+AutorizadoPermanente+"-";
     matriz+=","+InscritoPermanente+"-";
     matriz+=","+PasajerosSentadosPermanente+"-";
     matriz+=","+PasajerosPiePermanente+"-"+"%"+"#";
}

function imprimir()
{
   var final=" ";
   var a1=" ";
   var a2=" ";
   var sumaNumeros=0;
   var sumaf=0;

   if(boolmostrar==true)
   {
       document.getElementById("tablaMuestra").innerHTML = "";
       document.getElementById("tablaMuestra").innerHTML ="<tr class=colorTable> <td><strong> |Provincia</strong></td><td><strong>|Ruta</strong></td><td><strong>|Autorizado</strong></td><td><strong>|Inscrito</strong></td><td><strong>|Pasajeros Sentados</strong></td><td><strong>|Pasajeros Pie|</strong></td>";

       for(i=0;i<matriz.length;i++)
       {
          if(matriz[i]=="#")
            {
                if(a1.includes("!"+","+buscador+"-"))
                {
                  final+=a1+"#";
                  a1="";
                }else
                  {
                      a1="";
                  }
             }
            a1+=matriz[i];
        }/*fin for*/
     
     var comodinFinal="";

     for(i=0;i<final.length;i++)
       {

           if(final[i]=="#")
            {
                      if(sumaf>500)
                       {
                            
                            comodinFinal = comodinFinal.replace(/,/g, "<td>");
                            comodinFinal = comodinFinal.replace(/-/g, "</td>");
                            comodinFinal = comodinFinal.replace(/!/g, "<tr class=colorTableRed >");
                            comodinFinal = comodinFinal.replace(/%/g, "</tr>");
                            
                            document.getElementById("tablaMuestra").innerHTML += comodinFinal;
                
                            sumaf=0;
                        }else
                        {
                            comodinFinal = comodinFinal.replace(/,/g, "<td>");
                            comodinFinal = comodinFinal.replace(/-/g, "</td>");
                            comodinFinal = comodinFinal.replace(/!/g, "<tr>");
                            comodinFinal = comodinFinal.replace(/%/g, "</tr>");
                            document.getElementById("tablaMuestra").innerHTML += comodinFinal;
                          
                            sumaf=0;
                        }

                    comodinFinal="";

             }else
             {
                    comodinFinal+=final[i];
                   
                    a2+=final[i];

                if(final[i]=="-")
                 {   

                    a2=a2.replace(/,/g, " ");
                    a2=a2.replace(/-/g, " ");

                    sumaNumeros=parseInt(a2);

                        if(Number.isInteger(sumaNumeros))
                         {
                           sumaf+=sumaNumeros;
                         }

                        a2="";
                 }


             }

       }

    }else 
     {
         alert("No has seleccionado la provincia por eso no podras consultar");

     }

}


/*---------------------------------------------------------Valores a default---------------------------------------------------------*/

function clis(llenador)
{
 
  if(llenador=="ruta")
   {
     document.getElementById("ruta").value= RutaPermanente;

   }else if(llenador=="pasajeroSentados")
    {
        document.getElementById("pasajeroSentados").value=PasajerosSentadosPermanente; 

    }else if(llenador== "pasajeroPie")
      {
        document.getElementById("pasajeroPie").value=PasajerosPiePermanente;
      }

}

function valoresDefault()
{
   bool0=false; 
   bool1=false;
   bool2=false;
   bool3=false; 
   bool4=false;
   bool5=false;
   provinciaPermanente=""; 
   RutaPermanente=""; 
   AutorizadoPermanente=""; 
   InscritoPermanente=""; 
   PasajerosSentadosPermanente=""; 
   PasajerosPiePermanente=""; 
   alert("Todos los datos borrados exitosamente");
   banderin=0;
   buscador="";
}

function valoresSinMensaje()
{
   bool0=false; 
   bool1=false;
   bool2=false;
   bool3=false; 
   bool4=false;
   bool5=false;
   provinciaPermanente=""; 
   RutaPermanente=""; 
   AutorizadoPermanente=""; 
   InscritoPermanente=""; 
   PasajerosSentadosPermanente=""; 
   PasajerosPiePermanente=""; 
   banderin=0;
   document.getElementById("provinciaA").selectedIndex = 0;
   document.getElementById("menu2").selectedIndex = 0;
   document.getElementById("menu3").selectedIndex = "---";
   document.getElementById("ruta").value= "Digite la ruta a la que pertenece el bus...";
   document.getElementById("pasajeroSentados").value="Digite la cantidad de pasajeros sentados permitidos...";
   document.getElementById("pasajeroPie").value="Digite la cantidad de pasajeros de pie permitidos...";
   document.getElementById("provinciaB").selectedIndex = 0;
   foto.src="imagenes/foto"+0+".png";
   buscador="";
}




