// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the Roman Numerals
var operand = inputString[2];
var rom1 = inputString[3];
var rom2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

// Converts the Roman numeral entered into an integer so we can perform math operations on them
function roman_to_Int(rom) {
    if(rom == null) return -1;
    // Starts the calculation of the number at first roman numeral listed (ei if number is MCD, num = 1000)
    var num = char_to_int(rom.charAt(0));
    // Sets variables for previous and current number calculated in loop
    var pre, curr;
    // Starts the loop at the second roman rumeral listed 
    for(var i = 1; i < rom.length; i++){
        curr = char_to_int(rom.charAt(i));
        pre = char_to_int(rom.charAt(i-1));
        // if the current number is less than/equal to previous number 
        if(curr <= pre){
            // add the current number to num
            num += curr;
        } else {
            // for example IV would calculate as 4 = (1-(1*2))+5
            num = num - pre*2 + curr;
        }
    }  
    return num;
    }
    // reads the inputed roman numeral and returns its value as integer
    function char_to_int(r){
    switch (r){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
}
// We need another funtion to convert the integer into roman numeral again
function int_to_Roman(num) {
    // object to hold values for each roman numeral symbol
    var converter = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in converter ) {
      // if num is greater or equal to a number in the converter object
      while ( num >= converter[i] ) {
        // add the corresponding roman numeral to our growing roman numeral
        roman += i;
        // and subtract what you have added to the roman numeral from num and go thru the loop until num < converter[i]
        num -= converter[i];
      }
    }
    return roman;
}

num1 = roman_to_Int(rom1)
num2 = roman_to_Int(rom2)

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers

if (operand === "add") {
  outputNum = parseFloat(num1) + parseFloat(num2);
}

else if (operand === "subtract") {
  outputNum = parseFloat(num1) - parseFloat(num2);
}

else if (operand === "multiply") {
  outputNum = parseFloat(num1) * parseFloat(num2);
}

else if (operand === "divide") {
  outputNum = parseFloat(num1) / parseFloat(num2);
}

else if (operand === "remainder") {
  outputNum = parseFloat(num1) % parseFloat(num2);
}

else if (operand === "exp") {
  outputNum = Math.pow(num1, num2);
}

else {
  outputNum = "Not a recognized command";
}


// Prints the outputNumber
console.log(int_to_Roman(outputNum));

// =======================================================
