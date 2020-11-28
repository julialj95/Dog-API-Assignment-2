'use strict'

$(function() {
  watchForm()
});

function watchForm() {
  $('form').submit(event => {
    $("js-dog-image").html("")
    event.preventDefault();
    getDogImages();
  });
}

function getDogImages() {
  const submittedValue = $('#number-of-dogs').val()
  fetch(`https://dog.ceo/api/breeds/image/random/${submittedValue}`)
  .then(response => response.json())
  .then(responseJson => displayImages(responseJson, submittedValue))
  .catch(error => $("#js-dog-image").html(`<p>Sorry, there has been a problem. Try again later.</p>`))
}

function displayImages(responseJson, submittedValue) {
  $("#js-dog-image").html("")
  for (let i = 0; i < submittedValue; i++){
    $('#js-dog-image').append(`<img src="${responseJson.message[i]}" class="img-results" alt="Dog Picture">`)
  }
  $("#results").removeClass("hidden")
}
