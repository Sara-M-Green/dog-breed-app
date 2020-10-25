function getDogImage(){
    let submittedBreed = $('#dog-breed').val().toLowerCase();
    fetch('https://dog.ceo/api/breed/' + submittedBreed + '/images/random')
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Please try again later.'))
}

function displayResults(responseJson){
    console.log(responseJson);
    if(responseJson.status === 'error'){
        $('p').text('Dog breed not found. Please try again');
    } else {
        $('.results-img').replaceWith(
            `<img src="${responseJson.message}" class="results-img">`
          )
          //display the results section
          $('.results').removeClass('hidden');
    }
}

function submitForm(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    submitForm();
  });