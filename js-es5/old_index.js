var houses;
var mouse;
var success = 0;
var fail = 0;
var catsMoves = [];
var guess = [1, 1, 1, 1, 1];
 
//main();
 
_.times(1000, main);
console.log('succes - %s', success);
 
function canBe(wasnt) {
    guess[wasnt] = 0;
    var canGoTo = (function() {
        var result = [0, 0, 0, 0, 0];
        for (var i = 0; i < 5; i++) {
            if (guess[i]) {
                if (i === 0) {
                    result[1] = 1;
                } else if (i === 4) {
                    result[3] = 1;
                } else {
                    result[i - 1] = 1;
                    result[i + 1] = 1;
                }
            }
        }
        return result;
    }());
    guess = canGoTo;
    //console.log('guess %o', guess);
}
 
function main() {
    houses = [0, 0, 0, 0, 0];
    mouse = randomIntFromInterval(0, 4);
    
    setMouse(mouse);
    _.each(catsMoves, function(item, index) {
        return tryToCatchMouse(item - 1, index);
    });
}
 
function tryToCatchMouse(index, _try) {
    //console.log('this is try №%s', _try + 1);
    if (checkMouse(index)) {
        //console.log('OK!', index, houses);
        success++;
        return false;
    } else {
        canBe(index);
        if (_try === catsMoves.length - 1) {
            //console.log('mouse not found', index, houses);
            fail++;
        } else {
            mouseMove();
        }
    }
}
 
function checkMouse(index) {
    return houses[index];
}
 
function setMouse(mouse) {
    houses[mouse] = 1;
}
 
function mouseMove() {
    var oldMouse = mouse;
    var wayToMove;
    
    switch (mouse) {
        case 0:
            mouse = 1;
            break;
        case 4:
            mouse = 3;
            break;
        default:
            moveToLeft = randomIntFromInterval(0,1);
            if (moveToLeft) {
                mouse++;
            } else {
                mouse--;
            }
    }
    
    houses[oldMouse] = 0;
    houses[mouse] = 1;
}
 
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
