var firebaseConfig = {
    apiKey: "AIzaSyDWB8w1P3NmlNlENCHwzn5z2U1Zmk-OC9Q",
    authDomain: "train-5d2f3.firebaseapp.com",
    databaseURL: "https://train-5d2f3.firebaseio.com",
    projectId: "train-5d2f3",
    storageBucket: "",
    messagingSenderId: "528004261050",
    appId: "1:528004261050:web:930b26aa7745ab92"

  };

  firebase.initializeApp(firebaseConfig);

  var dataREF = firebase.database ();
  var name = "" ;
  var destination = "";
  var frequency = 0;
  var nextarrival = "";

  $("#add-train").on("click",function(event){
  
   event.preventDefault();

   name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      nextarrival = $("#nextarrival-input").val().trim();

      // Code for the push
      dataREF.ref().push({

        name: name,
        destination: destination,
        frequency: frequency,
        nextarrival: nextarrival,
        
      });
    });

    dataREF.ref().on("child_added", function(childSnapshot, prevC) {

        // Log everything that's coming out of snapshot
       
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().age);
        console.log(childSnapshot.val().comment);
        console.log(childSnapshot.val().joinDate);
        
        var sv = childSnapshot.val();
         var newName = (sv.name);
         var newDestination = (sv.destination);
         var newfrequency = (sv.frequency);
        var newnextArrival = (sv.nextArrival);

        $("#Schedule").append(

            "<tr><td>" +
            newName + 
            "</td><td>" +
            newDestination +
            "</td><td>" +
            newfrequency +
            "</td><td>" +
            newnextArrival +
            "</tr></td>" 

        );}, function(errorObject){
            console.log("errorshandled" + errorObject);
            });
        
           // dataREF.ref().orderByChild("dateAdded").on("child_added",function(snapshot){
                
            //});


// var clock = new Vue({
//     el: '#clock',
//     data: {
//         time: '',
//         date: ''
//     }
// });
//  var time 
//var week = ['SUN','MON','TUES','WED','THU','FRI','SAT'];
