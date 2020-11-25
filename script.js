'use strict'

$(function() {
  watchForm()
});

function watchForm() {
  $('form').submit(event => {
    console.log('submit clicked')
    event.preventDefault();
    getDogImages();
  });
}

function getDogImages() {
  const submittedValue = $('#number-of-dogs').val()
  fetch(`https://dog.ceo/api/breeds/image/random/${submittedValue}`)
  .then(response => response.json())
  .then(responseJson => displayImages(responseJson, submittedValue))
  .catch(error => console.log('Sorry, there has been a problem. Try again later.'))
}


function displayImages(responseJson, submittedValue) {
  for (let i = 0; i < submittedValue; i++){
    $('#js-dog-image').append(`<img src="${responseJson.message[i]}" alt="Dog Picture">`)
  }
}
