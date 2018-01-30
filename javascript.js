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
        //startDate = ;
        //name = ;
        //role = ;
        //monthlyRate = ;
    });