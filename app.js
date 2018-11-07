$(document).ready(function(){
var topic = ["Bye", "Good Morning", "love you", "so tired", "excited", "tgif"]
for (var j = 0; j < topic.length; j++){
    var phraseButton = $("<button>").addClass("button phraseButton");
    phraseButton.attr("data-title", topic[j]);
    phraseButton.text(topic[j]);
    $("#button-row").append(phraseButton);
};
// not staying in the button row
// $(document).on("click", "#save-gif", function(){
//     var userInput = $("#input").val().trim();
//     var userAddedButton = $("<button>");
//     userAddedButton.text(userInput)
//     $("#button-row").append(userAddedButton);
// });

$("button").on("click", function(){
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
            gifImage.attr("src", results[i].images.fixed_height.url);
            
            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);
            
            $("#gifs-go-here").prepend(gifDiv);
        }
    });
});

// $("img").on("click", function(){
    //need to access to for loop... do another one? 
    //change gif img attr to ("src", results[i].images.fixed_height.url)
// })

// on <img> click,
//  if still, change img to fixed_height
//  if animated, change img to fixed_height_still



// });//end of button click event

// })
});