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
        title: document.querySelector('#post-title').value.trim(),
        content: document.querySelector('#post-content').value.trim(),
        category_id: document.querySelector('#post-category').value.trim(),
    }
    console.log(formResponses);

    // if (name && email && password) {
    //     const response = await fetch('/api/users', {
    //         method: 'POST',
    //         body: JSON.stringify({ name, email, password }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });

    //     if (response.ok) {
    //         document.location.replace('/dashboard');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }


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