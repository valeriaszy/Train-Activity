var config = {
    apiKey: "AIzaSyC4kX_Uig57B3Hhfrzm9X3o-Vibwg-cz2E",
    authDomain: "train-activity-d4604.firebaseapp.com",
    databaseURL: "https://train-activity-d4604.firebaseio.com",
    projectId: "train-activity-d4604",
    storageBucket: "train-activity-d4604.appspot.com",
    messagingSenderId: "369546030706"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  $(document).ready(function(){
      $("#submit-train").on("click", function(){
          event.preventDefault();

          var trainName = $("#train-name").val().trim();
          $("#train-name").val("");
          var destination = $("#Destination").val().trim();
          $("#Destination").val("");
          var firstTrainTime = $("#first-train-time").val().trim();
          $("#first-train-time").val("");
          var frequency = $("#frequency").val().trim();
          $("#frequency").val("");
          console.log("train Name: ", trainName);

          var newTrain = {
              name: trainName,
              destination: destination,
              firstTrain: firstTrainTime,
              frequency: frequency
          }
          console.log(newTrain);
        //   upload train data to the database
          database.ref().push(newTrain);
      })
  })

  // Assume the following situations.

    // (TEST 1)
    // First Train of the Day is 3:00 AM
    // Assume Train comes every 3 minutes.
    // Assume the current time is 3:16 AM....
    // What time would the next train be...? (Use your brain first)
    // It would be 3:18 -- 2 minutes away

    // (TEST 2)
    // First Train of the Day is 3:00 AM
    // Assume Train comes every 7 minutes.
    // Assume the current time is 3:16 AM....
    // What time would the next train be...? (Use your brain first)
    // It would be 3:21 -- 5 minutes away


    // ==========================================================

    // Solved Mathematically
    // Test case 1:
    // 16 - 00 = 16
    // 16 % 3 = 1 (Modulus is the remainder)
    // 3 - 1 = 2 minutes away
    // 2 + 3:16 = 3:18

    // Solved Mathematically
    // Test case 2:
    // 16 - 00 = 16
    // 16 % 7 = 2 (Modulus is the remainder)
    // 7 - 2 = 5 minutes away
    // 5 + 3:16 = 3:21

    // Assumptions
    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));