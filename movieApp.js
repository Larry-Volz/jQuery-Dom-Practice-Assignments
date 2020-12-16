/*  
Part Two - Movies App!
Build an application that uses jQuery to do the following:

DONE: Contains a form with two inputs for a title and rating along with a button to submit the form.

TODO: When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

TODO: When the button to remove is clicked, remove each title and rating from the DOM.

Further Study
Ensure that the rating of a movie can only be between 0 and 10.
Ensure that a title has at least 2 characters in it.
Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.
*/



//TODO: When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

$(function(){

    $("#rating-form").on("submit", (evt) => {
        evt.preventDefault();
        console.log("click");
        // $("#my-movies").append($("<div>").text($("#title")));

    })


})

//TODO: When the button to remove is clicked, remove each title and rating from the DOM.
