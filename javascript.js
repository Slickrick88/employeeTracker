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

    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        //assign variables to text input
        name = $("#nameInfo").val().trim();
        startDate = $("#name-input").val().trim();
        role = $("#empRoleStorage").val().trim();
        monthlyRate = $("#name-input").val().trim();

        database.ref().push({
            name: name,
            startDate: startDate,
            role: role,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.serverValue.TIMESTAMP
        });
    });

    
  
    });