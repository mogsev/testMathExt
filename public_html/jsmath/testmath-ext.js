/**
 * @author mogsev@gmail.com
 */
var add = false;
var sub = false;
var multi = false;
var division = false;
var job = false;

var correctAnswer = 0;
var wrongAnswer = 0;

var userResult;
var result;
var stringResult;

/**
 * 
 * @returns {undefined}
 */
function setAdd() {    
    if (add) {
        add = false;
    } else { 
        add = true;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setSub() {
    if (sub) {
        sub = false;
    } else {
        sub = true;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setMulti() {
    if (multi) {
        multi = false;
    } else {
        multi = true;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setDivision() {
    if (division) {
        division = false;
    } else {
        division = true;
    }
}

/**
 * 
 * @returns {undefined}
 */
function getAnswerResult() {
    document.getElementById("correctAnswer").innerHTML = 'Правильных ответов - ' + correctAnswer;
    document.getElementById("wrongAnswer").innerHTML = 'Ошибок - ' + wrongAnswer;    
}

/**
 * 
 * @returns {undefined}
 */
function getJob() {
    if (job) {
        alert("Введите ответ и проверте результат");
    } else {
        document.getElementById("userResult").value = null;
        document.getElementById("check").innerHTML = null;
        getTest();
    }
}

/**
 * 
 * @returns {undefined}
 */
function getTest() {    
    if ((!add&&!sub&&!multi&&!division)) {  
        alert("Выбирите одно из действий в установках!");
    } else {        
        var oneNum = getRandomNumber(10); 
        stringResult = "Задание: ";
        if (add) { 
            var twoNum = getRandomNumber(10);
            if (isNaN(result) || result == null) {                
                result = oneNum + twoNum;
                stringResult += oneNum + " + " + twoNum;
            } else {
                result += twoNum;
                stringResult += " + " + twoNum;
            }
        }
        if (sub) {             
            if (isNaN(result) || result == null) {
                var threeNum = getRandomNumber(oneNum);
                result = oneNum - threeNum;
                stringResult += oneNum + " - " + threeNum;
            } else {
                var threeNum = getRandomNumber(result);
                result -= threeNum;
                stringResult += " - " + threeNum;
            }
        }
        
        if (multi) {
            var fourNum = getRandomNumber(10);
            if (isNaN(result) ||result == null) {
                result = oneNum * fourNum;
                stringResult += oneNum + " * " + fourNum;
            } else {
                result *= fourNum;
                stringResult += " * " + fourNum; 
            }
        }
        if (division) {
            var fiveNum = getRandomNumber(10);
            if (isNaN(result) || result == null) {
                result = oneNum / fiveNum;
                stringResult += oneNum + " / " + fiveNum;
            } else {
                result *= fiveNum;
                stringResult += " / " + fiveNum;
            }
        }
        document.getElementById("job").innerHTML = stringResult;        
        //document.getElementById("check").innerHTML = result;
        document.getElementById("check").innerHTML = 'Внимание! Решение задания выполняется в строгом порядке мат.операций с лева на право (->)';
        job = true;
    }
}

/**
 * 
 * @returns {undefined}
 */
function checkJob() {
    if (job) {
        checkValue();
    } else {
        alert("Сгенерируйте новую задачу!");
    }
}

/**
 * 
 * @returns {undefined}
 */
function checkResult() {
    var value = parseInt(document.getElementById("userResult").value);
    if (value == result) {
        correctAnswer++;
        document.getElementById("check").innerHTML = 'Правильный ответ';
    } else {
        wrongAnswer++;
        document.getElementById("check").innerHTML = 'Ошибка';
    }
    resetAll();
    getAnswerResult();
}

/**
 * 
 * @returns {undefined}
 */
function resetAll() {
    job = false;
    result = null;
    stringResult = null;
    
}

/**
 * 
 * @returns {undefined}
 */
function checkValue() {        
    var value = parseInt(document.getElementById("userResult").value); 
    
    if (isNaN(value) || !isNum(value)) {
        alert("Вводите только положительные натуральные числа");        
    } else {
        document.getElementById("check").innerHTML = value;
        checkResult();
    }
}

/**
 * 
 * @param {type} num
 * @returns {Boolean}
 */
function isNum(num) {
    if (num >=0) {
        return true;
    } 
    return false;
}

/**
 * 
 * @param {type} x
 * @returns {Number}
 */
function getRandomNumber(x) {     
    return Math.round(Math.random()*x);   
}







