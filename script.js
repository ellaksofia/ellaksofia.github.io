window.onload = function () {

 

  var seconds = 00;

  var tens = 00;

  var appendTens = document.getElementById("tens")

  var appendSeconds = document.getElementById("seconds")

  var buttonStart = document.getElementById('button-start');

  var buttonStop = document.getElementById('button-stop');

  var buttonReset = document.getElementById('button-reset');

  var Interval ;

 

  buttonStart.onclick = function() {

   

    clearInterval(Interval);

     Interval = setInterval(startTimer, 10);

  }

 

    buttonStop.onclick = function() {

       clearInterval(Interval);

  }

 

 

  buttonReset.onclick = function() {

     clearInterval(Interval);

    tens = "00";

              seconds = "00";

    appendTens.innerHTML = tens;

              appendSeconds.innerHTML = seconds;

  }

 

   

  

  function startTimer () {

    tens++;

    

    if(tens <= 9){

      appendTens.innerHTML = "0" + tens;

    }

   

    if (tens > 9){

      appendTens.innerHTML = tens;

     

    }

    

    if (tens > 99) {

      console.log("seconds");

      seconds++;

      appendSeconds.innerHTML = "0" + seconds;

      tens = 0;

      appendTens.innerHTML = "0" + 0;

    }

   

    if (seconds > 9){

      appendSeconds.innerHTML = seconds;

    }

 

  }

 // Make a clock - Unit 1, Stage 1, Lesson 1.

// Make a stopwatch.

// Draw the body of the stopwatch.
var clock = new Rectangle();
clock.width = 300;
clock.height = 100;
clock.x = canvas.width / 2 - 150;
clock.y = canvas.height / 2 - 75;
clock.fill = 'lightblue';
clock.borderColor = 'crimson';
// Draw the clock on the canvas.
clock.draw();
// Make an object to keep track of the time.
var t = {};
t.hundredths = 0;
t.seconds = 0;
t.minutes = 0;
// Write each time variable as a two-digit number.
function f(n) {
   if (n < 10) {
      return '0' + n;
   } else {
      return n;
   }
}
// Write the time in the proper format.
function time(t) {
   var a = f(t.minutes) + ':' + f(t.seconds) + ':' + f(round(t.hundredths));
   var textOptions = {font: 'sans-serif', fill: 'purple', fontSize: 40};
   text(canvas.width / 2 - 75, canvas.height / 2 - 30, a, textOptions);
}
// Display the time on the canvas.
time(t);
// Make a variable to check whether the clock is running.
var running = false;
// Make a start function.
function startStop() {
   // Check if the stopwatch is running.
   if (running == true) {
      // It is! Switch running to false.
      running = false;
      // Otherwise, switch running to true.
   } else {
      running = true;
      // Close the if statement.
   }
   // Close the function statement.
}
// Use the animate function to count.
// Add the start button.
var a = new Button(clock.x + 10, clock.y + 50, 'Start/Stop', startStop);
// Define the reset function.
function reset() {
   // Set all time variable to 0.
   t.hundredths = 0;
   t.seconds = 0;
   t.minutes = 0;
   running = false;
}
// Add the reset button
var b = new Button(clock.x + 210, clock.y + 50, 'Reset', reset);
function animate() {
   // The hundredths should increase by 100 every second, or 3 and 1/3 every time the program runs.
   if (running == true) {
      t.hundredths += 3 + 1 / 3;
      // Close the if statement.
   }
   // When we reach 100 hundredths, one second has elapsed.
   if (t.hundredths > 99) {
      t.seconds += 1;
      t.hundredths -= 100;
      // End the if statement.
   }
   // When we reach 60 seconds, one minute has elapsed.
   if (t.seconds > 59.9) {
      t.minutes += 1;
      t.seconds = 0;
      // Close the if statement.
   }
   // Refresh the background.
   background('midnightblue');
   // Draw the clock again.
   clock.draw();
   // Write the time again.
   time(t);
   // Close the animate function.
}
// Lesson is complete and correct.

 

}
