function promedio() {

    nota1= new Number (prompt ("ingrese la primera edad"));

    while( nota1 > 10000000 ){

        if(  nota1 >  10000000 ){
            alert("La nota ingresada es erronea")
        }

        nota1= new Number (prompt ("ingrese la primera edad"));
    }


    alert("Siguiente")

    nota2= new Number (prompt ("ingrese la segunda edad"));

    while( nota2 > 1000000 ){

        if(nota2 >  1000000){
            alert("La edad ingresada es erronea")
        }

        nota2= new Number (prompt ("ingrese la segunda edad"));
    }


    alert("Siguiente")

    nota3= new Number (prompt ("ingrese la tercera edad"));

    while( nota3 > 1000000 ){

        if(nota3 >  1000000){
            alert("La nota ingresada es erronea")
        }

        nota3= new Number (prompt ("ingrese la tercera edad"));
    }


    alert("Siguiente")


    edad1=nota1
    document.write("")

    if (nota1<=17 && nota1>=0) {
        document.write("La edad 1 es ")
        document.write(nota1)
        document.write("/ y es menor de edad")
        document.write("------------")
    }
   
    else if (  (nota1<=1000000 && nota1>=18) ) {
        document.write("La edad 1 es ")
        document.write(nota1)
        document.write("/ y es mayor de edad")
        document.write("------------")
    }


    edad2=nota2
    document.write("")

    if (nota2<=17 && nota2>=0) {
        document.write("La edad 2 es ")
        document.write(nota2)
        document.write("/ y es menor de edad")
        document.write("------------")
    }
   
    else if (  (nota2<=1000000 && nota2>=18) ) {
        document.write("La edad 2 es ")
        document.write(nota2)
        document.write("/ y es mayor de edad")
        document.write("------------")
    }



    edad3=nota3
    document.write("")

    if (nota3<=17 && nota3>=0) {
        document.write("La edad 3 es ")
        document.write(nota3)
        document.write("/ y es menor de edad")
        document.write("------------")
       
    }
   
    else if (  (nota3<=1000000 && nota3>=18) ) {
        document.write("La edad 3 es ")
        document.write(nota3)
        document.write("/ y es mayor de edad")
        
    }
     }