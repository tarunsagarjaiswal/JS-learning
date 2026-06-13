/*🔹 Key Points
Expression → evaluated once, compared with each case using strict equality (===).

case → if it matches, that block runs.

break → prevents “fall‑through” (execution continuing into the next case).

default → runs if no case matches (like else).

Multiple cases can share the same code if you omit break. */

const month = 3

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
        
}