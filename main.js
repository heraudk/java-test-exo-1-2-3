//alert ('Hello word !');


//document.write('bonjour le monde !');




//let start = 'Bonjour ',
//    name = '', end = '!',
//    result;
//
//name = prompt('Quel est votre prénom ?');
//result = start + name + end;
//alert(result);
//console.log(result);
//document.write(result);



//let floor = parseInt(prompt("Entrer l'étage ou l'ascenceur doit se rendre (de -2 à 30) :"));

    //if (floor == 0) 
        //{
        //alert("Vous vous trouvez au rez de chaussée.")
        //} 
    //else if (-2<= floor && floor <= 30) 
        //{
        //alert ("direction l'etage n " + floor + " !")
        //} 
    //else 
        //{
        //alert("L'étage n'existe pas.")
        //}
    



//let drawer = parseInt(prompt("Choisissez le tiroir à ouvrir (1 à 4) :"));

//switch (drawer)
//{
    //case 1: 
        //alert("contient divers outils pour dessiner : du papier, des crayons, etc");
        //break;
    //case 2:
        //alert("contient du matériel informatique");
        //break;
    //case 3: 
        //alert("Ah ? Ce tiroir est fermé à clé !");
        //break;
    //case 4:
        //alert("contient des vetements");
        //break;
    //default:
        //alert("le meuble ne contients que 4 tiroirs");
//}



//let number = 0;
//number = number + 1 //incrémentation
//number ++;
//alert(number); //affiche 1



//number = number -1; //décrémentation
//number --;
//alert(number); //affiche 0
//let number_1 = 0;
//let number_2 = 0;
//number_1++;
// number_1 = number_1 + 1;
//++number_2;
// 1 + number_2 = number_2;
//alert(number_1); //affiche 1
//alert(number_2); //affiche 1

//let number =0;
//let output = ++number;
//alert(number); //affiche
//alert(ouput); //affiche

//let number = 0;
//let output = number++;
//alert(number); //affiche 1
//alert(ouput); //affiche 0





//let number =0;
//while(number < 10)
//{
//    number ++;
//}
//alert(number); //affiche 10 les instuction sont executées que si la condition est vraie.







//do
//{
//    instruction1;
//    instruction2;
//    instruction3;
//}
//while(condition) //les instuctions sont au moins éxécutées une fois avant la condition






//for(initialisation; condition; incrémentation)
//{
//    instruction1;
//    instruction2;
//    instruction3;
//}





//for(let iter = 0; iter < 10 ;iter++)
//{
//    alert("itération n°" + iter);
//}




//function myfunction (arguments) 
//{
    //le code que la fonction execute  
//}



//function showMsg() 
//{
//    alert("C'est une premiere fonction");
//}

//showMsg(); //on execute le code de la fonction showMsg()



//let msg = "Hello word!";
//function sayHello()
//{
//    alert(msg);
//}
//sayHello();





//fonction calculette exemple
//let var1 = 2, var2 = 3; //variables globales
//function calculette()
//{
//    alert(var1 * var2); //affiche 6
//}

//calculate();





//fonction calculette exemple 2 avec variable intégrés a la fonction dite locale
//function calculate()
//{
//    let var1 = 2, var2 = 3; //variables locales
//    alert(var1 * var2);
//}

//calculate();
//alert(var1); //affiche null




//function myfunction(arg)
//{ 
//    alert("L'argument est:" + arg) //Affiche
    // l'argument est : C'est bien un argument
//}
//myfunction("C'est bien un argument");





//function calculate(var1, var2)
//{
//    alert(var1 * var2); //affiche 6
//}

//calculate(2,3);






//let number_1,number_2;
//number_1 = parseInt(prompt("votre premier nombre ;"));
//number_2 = parseInt(prompt("votre deuxieme nombre : "));
//calculate(number_1,number_2);




//let sayHello = (function()
//{
    //return "Hello word!";
//});
//alert(sayHello); 


































// cours //    // cours //     // cours //

//let myArray = ['Sébastien', 'Laurence', 'Ludovic',
//                'Pauline', 'Guillaume' ]

//alert(myArray[4]); //affiche Guillaume

//myArray.shift(); //retire Sebastien
//alert(myArray);

//myArray.pop(); //retire Guillaume
//alert(myArray);

//let cousinsString = " Pauline Guillaume Clarisse";
//let counsArray = cousinsString.split(' ');
//alert(cousinsString);
//alert(cousinsArray);
//myArray.pop();
//alert(cousinsArray); //Retire Clarisse

//cousinsString = cousinsArray.join(';');
//alert(cousinsString);



//let myArray = ['Nicolas', 'Aaron', 'Cynthia', 'Eden', 'Gabin'];
//alert(myArray.length);

//for(let index=0, items=myArray.length; index < items; index++){
    //alert(myArray[index]);
    //}

    //let family = {
        //self: 'Nicolas',
       // brother: 'Mike',
       // sister: 'Marie',
        //cousin_1: 'Remi',
        //cousin_2: 'Marc',
    //};
    //alert(family['cousin_2']);// ou alert(family.cousin_2);
    //alert(family['brother']);








//let family = 
//{
//self: "Patrick",
//sister: "Laurence",
//brother: "Ludovic",
//cousin_1: "Pauline",
//cousin_2: "Guillaume"
//};

//alert(family['cousin_2']); //affiche Guillaume
//alert(family['brother']);  //affiche Ludovic
//alert(family.cousin_2);    //affiche Guillaume
//alert(family.brother);     //affiche Ludovic





////////////////////////////////////







//Exercice 1 : Demander le prénom et dire Bonjour + son prénom en réponse

//let start = 'Bonjour ',
//    name = '', end = '!',
//    result;

//name = prompt('Quel est votre prénom ?');
//result = start + name + end;
//alert(result);
//console.log(result);
//document.write(result);









//Exercice 2 : faire une addiction avec les valeurs de l'utilisateur

//number_1 = parseInt(prompt("votre premier nombre :"));
//number_2 = parseInt(prompt("votre deuxieme nombre : "));
//result = number_1 + number_2;

//alert("votre resultat est : " + result);







//Exercice 3 : Ecrire un script demandant à l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré 
             //(si l’âge est erroné afficher un message d’erreur et redemander de saisir l’âge).
       

//let age = parseInt(prompt("Quel est votre age"));

//if (age < 18)
//{ 
 //  alert("Vous vous etes trompés, vous devez etre majeur"),
//   newage = parseInt(prompt("Resaisissez votre age:"));

 //  for(newage=0; newage<18;)
 //  {
//        newage = parseInt(prompt("Ressasissez votre age :"));


//        if(newage >= 18)
//       {
//           alert("Vous etes majeur, vous pouvez rentrez");
//        }
//   }
//}

//else
//{
//    alert("Vous etes majeur, vous pouvez rentrer")
//}