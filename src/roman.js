
function romano() {
let rom = 2;
let numRom = ""; 

switch (rom)
{
    case 1 :
       numRom = "I";
       break;

    case 2 :
        numRom ="II"
        break;

    case 3 :
            numRom ="III"
            break;
        
     default:
        numRom = "Invalid Option";


}

return (numRom);

}
  module.exports = romano;
