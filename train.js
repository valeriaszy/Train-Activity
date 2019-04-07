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
 // database.ref().orderByChild("dateAdded").on("child_added" ,function(childSnapShot){

  //})

    //var name = childSnapShot.val().trainName
    //var destination = childSnapShot.val().destination
    //var firstTrain = childSnapShot.val().firstTrain
   // var frequency = childSnapShot.val().frequency

    // Assumptions
    var frequency = 3;

    // Time is 3:30 AM
    var firstTrainTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    newRow.append("<td>"+moment(name).format("MM-DD-YYYY")+"</td>")//Start Date
    newRow.append("<td>"+destination+"</td>")//Work Month
    newRow.append("<td>"+firstTrain+"</td>")// Rate
    newRow.append("<td>"+frequency+"</td>")//Bill
    $("#employee-table").append(newRow)//Append to the table

    var newRow = $("<tr>");//Create new Table Row
    newRow.append("<td>"+destination+"</td>")//Name
    newRow.append("<td>"+destination+"</td>")//Role