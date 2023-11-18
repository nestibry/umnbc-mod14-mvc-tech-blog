const cancelFormHandler = async (event) => {
    event.preventDefault();
    // Go back to dashboard
    document.location.replace('/dashboard');
}


const updateFormHandler = async (event) => {
    event.preventDefault();


    // const title = document.querySelector('#post-title').value.trim();
    // const content = document.querySelector('#post-content').value.trim();
    // const category = document.querySelector('#post-category').value.trim();

    const formResponses = {
        title : document.querySelector('#post-title').value.trim(),
        content : document.querySelector('#post-content').value.trim(),
        category : document.querySelector('#post-category').value.trim()
    }
    console.log(formResponses);

}




document
    .querySelector('.post-cancel')
    .addEventListener('click', cancelFormHandler);


document
    .querySelector('.post-update')
    .addEventListener('click', updateFormHandler);


document
    .querySelector('.post-delete')
    .addEventListener('click', cancelFormHandler);