const cancelFormHandler = async (event) => {
    event.preventDefault();
    console.log("made it here");

    document.location.replace('/dashboard');
}



document
    .querySelector('.post-cancel')
    .addEventListener('click', cancelFormHandler);