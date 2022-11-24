/* 
    Benjamin Shen
    Web Development Even 7/8
    11/23/22
    Level 1 Count De Money
*/

function addPenny() {
    penny++;
    addPennyVal();
    display();
}

function subtractPenny() {
    if (penny > 0)
        penny--;
    subtractPennyVal();
    display();
}

function addPennyVal() {
    pennyVal += .01;
    pennyVal = Math.round(pennyVal * 100) / 100;
    total += .01;
    total = Math.round(total * 100) / 100;
}

function subtractPennyVal() {
    if (pennyVal > 0 && total > 0) {
        pennyVal -= .01;
        pennyVal = Math.round(pennyVal * 100) / 100;
        total -= .01;
        total = Math.round(total * 100) / 100;
    }
}

function addNickel() {
    nickel++;
    addNickelVal();
    display();
}

function subtractNickel() {
    if (nickel > 0)
        nickel--;
    subtractNickelVal();
    display();
}

function addNickelVal() {
    nickelVal += .05;
    nickelVal = Math.round(nickelVal * 100) / 100;
    total += .05;
    total = Math.round(total * 100) / 100;
}

function subtractNickelVal() {
    if (nickelVal > 0 && total > 0) {
        nickelVal -= .05;
        nickelVal = Math.round(nickelVal * 100) / 100;
        total -= .05;
        total = Math.round(total * 100) / 100;
    }
}

function addDime() {
    dime++;
    addDimeVal();
    display();
}

function subtractDime() {
    if (dime > 0)
        dime--;
    subtractDimeVal();
    display();
}

function addDimeVal() {
    dimeVal += .1;
    dimeVal = Math.round(dimeVal * 100) / 100;
    total += .1;
    total = Math.round(total * 100) / 100;
}

function subtractDimeVal() {
    if (dimeVal > 0 && total > 0) {
        dimeVal -= .1;
        dimeVal = Math.round(dimeVal * 100) / 100;
        total -= .1;
        total = Math.round(total * 100) / 100;
    }
}

function addQuarter() {
    quarter++;
    addQuarterVal();
    display();
}

function subtractQuarter() {
    if (quarter > 0)
        quarter--;
    subtractQuarterVal();
    display();
}

function addQuarterVal() {
    quarterVal += .25;
    quarterVal = Math.round(quarterVal * 100) / 100;
    total += .25;
    total = Math.round(total * 100) / 100;
}

function subtractQuarterVal() {
    if (quarterVal > 0 && total > 0) {
        quarterVal -= .25;
        quarterVal = Math.round(quarterVal * 100) / 100;
        total -= .25;
        total = Math.round(total * 100) / 100;
    }
}