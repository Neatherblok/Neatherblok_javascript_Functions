/*const isEqual = 45 % 2;

if (isEqual == 1) {
    console.log("This number is not equal");
}
else if (isEqual == 0) {
    console.log("This number is equal");
}
else {
    console.log("No number has been found");
}



const changeString = "Programming is not so cool";
console.log(changeString.replace(" not", ""));



const number = 1400;
const string = "Ik woon in Naboo";
if (number == string) {
    console.log("Deze waarden zijn gelijk");
}
else if (number != string) {
    console.log("Deze waarden zijn niet gelijk");
}
else {
    console.log("Er ging iets fout");
}
//Dit is een hele rare vraag. Omdat je twee totaal verschillende elementen met elkaar gaat vergelijken. Het antwoord zal dus altijd zijn dat ze niet hetzelfde zijn.



const grade = 7;

if (grade < 6) {
    console.log("Je hebt een onvoldoende behaald.");
}
else if (grade >= 6 && grade < 7) {
    console.log("Je hebt een voldoende behaald.");
}
else if (grade >= 7 && grade < 9) {
    console.log("Je hebt een goed behaald.");
}
else if (grade >= 9 && grade <= 10) {
    console.log("Je hebt een uitmuntend behaald.");
}
else {
    console.log("Er ging iets mis!");
}



switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Je hebt een onvoldoende behaald.");
        break;
    case 6:
        console.log("Je hebt een voldoende behaald.");
        break;
    case 7:
    case 8:
        console.log("Je hebt een goed gehaald.");
        break;
    case 9:
    case 10:
        console.log("Je hebt een uitmuntend gehaald.");
        break;
}



const purchasedBook = true;
const job = 'teacher';
const inTrain = false;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log('Finally i can enjoy my book!');
}
else if (purchasedBook == true && job == 'teacher' && inTrain != true) {
    console.log('I am looking forward to reading in the train');
}
else if (purchasedBook == true && job != 'teacher' && inTrain == true) {
    console.log('Why am I so interested in this book?');
}    console.log('I should buy a book today or tomorrow.');
}
else if (purchasedBook != true && job != 'teacher' && inTrain == true) {
    console.log('I wonder if I should become a teacher, so I can read more.');
}
else if (purchasedBook == true && job != 'teacher' && inTrain != true) {
    console.log('When should I read my book, because I am really busy and don\'t have as much time as someone who travels with the train');
}
else if (purchasedBook != true && job == 'teacher' && inTrain != true) {
    console.log('I should read some books, but I only have time when I am in the train.');
}
else if (purchasedBook != true && job != 'teacher' && inTrain != true) {
    console.log('What am I doing with my live, I should change it.');
}
else {
    console.log('Something went wrong!');
}



const A = true;
const B = false;

if ((A && !B) || (!A && B)) {
    console.log("true");
}

else {
    console.log("false");
}

//opdracht 5.1

let x = 0;

while (x < 10){
    x++;
    console.log(x);
}

//opdracht 5.2

const sentenceExercise = "Het is maandag!";

var i = 0;

while(i<sentenceExercise.length){
    i++;
    console.log(sentenceExercise.charAt(i));        
}


//opdracht 5.3
const str = 'Geweldig';
let reversed = '';
let index = (str.length)
while (index >= 0) {
  reversed += str.charAt(index-1);
  index--; 
}
console.log(reversed);


//opdracht 5.4


for (let x = 0; x <= 10; x++){
    console.log(x);
}

//opdracht 5.5

const message2 = 'Het is maandag!';


for(let w = 0; w < message2.length; w++){
    console.log(message2.charAt(w));        
}

//opdracht 5.6 
for(let y = 1; y <= 25; y++){
    if (y % 3 == 0){
        console.log(y);
    }
    else {


    }
}
else if (purchasedBook != true && job == 'teacher' && inTrain == true) {



//opdrachten workshop loops
//opdracht 1
let y = 1;

while(y <= 25){
    if (y % 4 == 0){
        console.log(y);
        y++;
    }
    else {
        y++;
    }
}


//opdracht 2

var i = 1;
var j = 0;

while (j <= 8000) {



    if (j == 0) {
        console.log(1);
        console.log(1);
        j++;
    }

    else if (j >= 1) {
        let z = i + j;
        console.log(z);
        var i = j;
        var j = z;
    }
}

//opdracht 3

const numberOfWhatever = [2, 4, 8, 9, 12, 13]
let sum = 0;

for (const i = 0; i < numberOfWhatever.length; i++) {
  sum += numberOfWhatever[i]
}

console.log(sum);*/

//-----------------------------------------------------------------

//opdracht 1

function Fibonacci(i){

    var j = 0;
    while (j <= 8000) {

        if (j == 0) {
            console.log(1);
            console.log(1);
            j++;
        }

        else if (j >= 1) {
            let z = i + j;
            console.log(z);
            var i = j;
            var j = z;
        }
    }

    return j
}
Fibonacci(1);

console.log('------------------------------------------------------------');

//opdracht 2

function countDown(startingNumber){
        if (startingNumber) {
            console.log(startingNumber + ',');
            setTimeout(countDown, 1000, --startingNumber);
        }

    else {
        var d = new Date;
        var currentYear = d.getFullYear();
        console.log(`Happy ${currentYear}!`);
    }
}

countDown(10);
