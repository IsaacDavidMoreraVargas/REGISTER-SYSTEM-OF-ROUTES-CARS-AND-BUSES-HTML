var num=0;

function mostrar(comodin) 
{

 var foto=document.getElementById("foto");

 if(comodin=="0")
  {
      num=0;

  }else if(comodin=="1")
   {  
      num=1;

    }else if(comodin=="2")
      {
           num=2;

      }else if(comodin=="3")
        {
             num=3;

         }else if(comodin=="4")
            {
                 
               num=4;

            }else if(comodin=="5")
                {
                   num=5;

                }else if(comodin=="6")
                    {
                        
                       num=6;

                    }else if(comodin=="7")
                       {
                            num=7;

                       }

   foto.src="imagenes/foto"+num+".png";
}

