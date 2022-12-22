function romanNumerals(num){ 

    var conversion = {
     //   M:1000,
     //   CM:900,
    //    D:500,
    //    CD:400,
    //    C:100,
   //     XC:90,
   //     L:50,
   //     XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1

    };


    var romano = '';
    for(i in conversion){ 
        while(num >= conversion[i]){ 
            romano += i;
            num -= conversion[i]; 
        } 
    } 

    return romano; 

}

//for(j=1;j<101;j++){
for(j=1;j<10;j++){
    console.log("El número "+ j + " en romano es: "+romanNumerals(j));
}