$(document).ready(function () {
    var startDate;
    var name;
    var role;
    var monthlyRate;

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdnPReDuq99Grp0Rga37ER6EzxXaT-8hg",
        authDomain: "employeetracker-f441a.firebaseapp.com",
        databaseURL: "https://employeetracker-f441a.firebaseio.com",
        projectId: "employeetracker-f441a",
        storageBucket: "employeetracker-f441a.appspot.com",
        messagingSenderId: "1056152535744"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    $("#empAdd").on("click", function (event) {
        event.preventDefault();

        //assign variables to text input
        name = $("#nameInfo").val().trim();
        startDate = $("#empStartStorage").val().trim();
        role = $("#empRoleStorage").val().trim();
        monthlyRate = $("#empRateStorage").val().trim();

        database.ref().push({
            name: name,
            startDate: startDate,
            role: role,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().age);
        console.log(childSnapshot.val().comment);
        console.log(childSnapshot.val().joinDate);
  
        // full list of items to the well
        $("#full-member-list").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
          " </span><span class='member-email'> " + childSnapshot.val().email +
          " </span><span class='member-age'> " + childSnapshot.val().age +
          " </span><span class='member-comment'> " + childSnapshot.val().comment + " </span></div>");
  
      // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
      dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // Change the HTML to reflect
        $("#name-display").text(snapshot.val().name);
        $("#email-display").text(snapshot.val().email);
        $("#age-display").text(snapshot.val().age);
        $("#comment-display").text(snapshot.val().comment);
      });
  
  
    });

