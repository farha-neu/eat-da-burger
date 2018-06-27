$(function() {
  
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("devour");
    
    var newDevourState = {
      devour: newDevour
    };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);   
        location.reload();       
      }
    );   
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burgerName: $("#burger-input").val().trim(),
      userName:$("#username-input").val().trim()
    };
    // Send the POST request.
    if(newBurger.burgerName!==""){ 
      postBurger(newBurger);
    }
  });


  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
          location.reload();  
      }
    );
  });


$(".second-input").hide();
$("#order-btn").hide();

$("#username-btn").on("click",function(event){
  event.preventDefault();
  var username = $("#username-input").val().trim();
  if(username!==""){
    $(".first-input").hide();
    $(".second-input").show();
    $("#username-btn").hide();
    $("#order-btn").show();
  } 
})
}); //end of doc ready


function postBurger(newBurger){
  console.log("executed");
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      $("#burger-input").val("");
      $("#username-input").val("");
      // Reload the page to get the updated list
      location.reload();     
    }
  );
}




