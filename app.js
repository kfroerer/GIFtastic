$(document).ready(function(){
var topic = ["Cinderella", "Pocohantas", "Frozen", "The Little Mermaid", "Toy Story", "Moana"]
for (var j = 0; j < topic.length; j++){
    var movieButton = $("<button>").addClass("button movieButton");
    movieButton.attr("data-title", topic[j]);
    movieButton.text(topic[j]);
    $("#button-row").append(movieButton);
};


$("button").on("click", function(){
    var search = $(this).attr("data-title")
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=spWh9C8hZ8YYZbe5GmdARig3L7FNyNFK&limit=5";
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        // var results = response.data;
        var results = response.data;
    });
});
})

//         for (var i = 0; i < results.length; i++) {
//         var gifDiv = $("<div>");

//         var rating = results[i].rating;

//         var p = $("<p>").text("Rating: " + rating);

//         var personImage = $("<img>");
//         personImage.attr("src", results[i].images.fixed_height.url);

//         gifDiv.prepend(p);
//         gifDiv.prepend(personImage);

//         $("#gifs-go-here").prepend(gifDiv);
//         }
//     });
// });//end of button click event

// })