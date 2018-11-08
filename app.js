$(document).ready(function(){
var topic = ["Bye", "Good Morning", "love you", "so tired", "excited", "tgif"]
var renderButtons = function(){
for (var j = 0; j < topic.length; j++){
    // $("#gifs-go-here").empty();
    var phraseButton = $("<button>").addClass("buttons phraseButton");
    phraseButton.attr("data-title", topic[j]);
    phraseButton.text(topic[j]);
    $("#button-row").append(phraseButton);
};
};
renderButtons();

$("#save-gif").on("click", function(event) {
    event.preventDefault();
    $("#button-row").empty();
    var newGIF = $("#input").val().trim();
    topic.push(newGIF);
    renderButtons();
})
var animatedGIF;
var stillGIF;
$(document).on("click", ".buttons", function(){
    var search = $(this).attr("data-title")
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=spWh9C8hZ8YYZbe5GmdARig3L7FNyNFK&limit=10&rating=g&rating=pg";
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        // var results = response.data;
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            
            var rating = results[i].rating;
            
            var p = $("<p>").text("Rating: " + rating);
            
            var gifImage = $("<img>");
            //do variable for images source
            animatedGIF = results[i].images.fixed_height.url
            stillGIF = results[i].images.fixed_height_still.url
            // animatedGIF.attr("state", "animated")
            // stillGIF.attr("state", "still");
            gifImage.attr("src", animatedGIF);
            //attach both static and animated url as attributes
            
            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);
            
            $("#gifs-go-here").prepend(gifDiv);
        }
    });
});


// $("<img>").on("click", function(){
//     var gifState = $(this).attr("state");
//     if ( gifState == "animated"){
//         $("<img>").attr("src", stillGIF);
//     }else{
//         $("<img>").attr("src", animatedGIF); 
//     }
// });
//$(document.body)on click // $("img").on("click", function(){
    //need to access to for loop... do another one? 
    //change gif img attr to ("src", results[i].images.fixed_height.url)
// })

// on <img> click,
//  if still, change img to fixed_height
//  if animated, change img to fixed_height_still



// });//end of button click event

// })
});