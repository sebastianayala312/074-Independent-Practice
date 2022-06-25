
$(".button-one ").click(function() {
 let message = $(".review").val();
  console.log(message);
    alert("Your review is: " + message);
    $(".reviews").text(message);
    
});


