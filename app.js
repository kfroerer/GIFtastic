$(document).ready(function(){
var topic = ["Bye", "Good Morning", "love you", "so tired", "excited", "tgif"]
for (var j = 0; j < topic.length; j++){
    var phraseButton = $("<button>").addClass("button phraseButton");
    phraseButton.attr("data-title", topic[j]);
    phraseButton.text(topic[j]);
    $("#button-row").append(phraseButton);
};


$("button").on("click", function(){
    var search = $(this).attr("data-title")
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=spWh9C8hZ8YYZbe5GmdARig3L7FNyNFK&limit=10";
    
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
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            
            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);
            
            $("#gifs-go-here").prepend(gifDiv);
        }
    });
});
});
// });//end of button click event

// })