function setup() {
    createCanvas(640, 480);
}

function draw() {

    stroke(0,0,0);
    strokeWeight(3);
    line(0,40,640,40);

    noStroke();
    fill(0,255,0);
    rect(310, 230, 20, 20);

    fill(255,0,0)
    circle(500,100,20)

}

function day1AM() {
    console.log("Hello World");
    var firstName = "Mike";
    var age = 34;
    var heightInches = 75;
    var feet = Math.floor(heightInches/12);
    var inches = heightInches % 12;
    age = age + 1;

    console.log(firstName + " is " + age + " years old.")
    console.log(firstName + " is " + feet + " foot " + inches + " inches tall.")

    print("Hello World!");

    far2Cels(212);
}


function day1PM() {
age = 35
canIGoToTheCasino(age, "IA")

}
// To call the functoin: 
day1AM();
day1PM();

// Converts Fahrenheit to Celsius
function far2Cels(temp) {
    return((temp - 32) * (5 / 9));
}

function canIGoToTheCasino(age, location) {
    return age >= 21 && location == "IA" || age>= 18 && location == "MN";
}

function print(input) {
    console.log(input);
}

function whatShouldIWear(temp) {
    if(temp >= 75) {
        return ("Swim Wear");
    }else if(temp < 75 && temp >= 45) {
        return ("Jacket or hoodie")
    } else if(temp < 25) {
        return ("Don't go outside!")
    }
}

function day2AM() {
    var count = 100;
    while(count >= 0) {
        print(count);
        count -= 1;
    };
}

//day2AM();

function addsum() {
    var sum = 0;
    var count = 0;
    while (true) {
        var input = parseInt(prompt('Enter a number. Type 0 to end. '));
            if(input === 0) {
                break;
            } else {
                sum += input;
                count++;
            }
    }
    console.log('The average of your numbers is ' +  sum / count)
}

//addsum();

function forloop() {
    for (var count=0; count <= 100; count+= 7) {
        print(count);
    }
}

//forloop();

function learnArrays() {
    var months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Septmeber", "October", "November", "December"];

    // months[index] index always starts at 0
//print(months[0]);

// i stands for iteration
    for (var i = 0; i < months.length; i++) {
        print(months[i])
    }

    // array.forEach will iterate through each item in array
    // inside the () will need to create an anonomous function with a variable inside the argument to iterate through the array.
    months.forEach(function (month) {
        print(month);
    });
}

//learnArrays();

function day2PM() {
    var mike = {
        firstName: "Mike",
        middleName: "Danger",
        lastName: "Rusnak",
        dob: [7,1,1985], //M, D, Y. This is added as an array so we can utlize this later.
        likesPizza: true,
        heightInInches: 73,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            // getMonth will result in 0 for Jan.
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
        return(myAge);
        },
    };
    print(mike.dob)
    print(mike.fullName())
    print(mike.age())
}

day2PM();

// This also makes a function
// var day1AM = function() {
//
// }