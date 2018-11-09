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
// var animatedGIF;
// var stillGIF;
var gifImage;
$(document).on("click", ".buttons", function(){
    var search = $(this).attr("data-title")
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=spWh9C8hZ8YYZbe5GmdARig3L7FNyNFK&limit=10&rating=g&rating=pg";
    
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
            var title = results[i].title;
            
            var p = $("<p>").text("Title: " + title + " " + "Rating: " + rating);
            
            var gifImage = $("<img>");
            // stillGIF = 
            // animatedGIF = 
            gifImage.addClass("gif")
            gifImage.attr("data-state", "still");
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            //do variable for images source
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            // animatedGIF.attr("state", "animated")
            // stillGIF.attr("state", "still");
            //attach both static and animated url as attributes
            
            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);
            
            $("#gifs-go-here").prepend(gifDiv);
        }
    });
});


$(document).on("click", ".gif", function(){
    var gifState = $(this).attr("data-state");
    console.log(gifState);
    if ( gifState == "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
});