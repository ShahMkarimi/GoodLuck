    // Good luck function
    // divisible by 3 = Good
    // divisible by 5 = luck
    // divisible by both 3 & 5 = Good luck
    // not divisible by both = input
    // not divisible by number = put number
//       java script

    function Goodluck(input){
        if((input % 3 === 0) && (input % 5 === 0))
        return 'Good luck';

       if(input % 3=== 0)
        return 'Good';

       if(input % 5=== 0)
        return 'luck';

       if(typeof input  !== 'number')
       return "it is not the correct,input";
       
       else
       return input;
    };

    // const output = Good luck(15);
    const output = Goodluck( prompt('type anmber, if you get \'Good luck\' you own: '));
    document.getElementById("good").innerHTML= output;

    
