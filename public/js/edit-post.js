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
        id: document.querySelector('#post-id').value.trim(),
        title: document.querySelector('#post-title').value.trim(),
        content: document.querySelector('#post-content').value.trim(),
        category_id: document.querySelector('#post-category').value.trim(),
    }
    console.log(formResponses);

    if (!formResponses.title || !formResponses.content) {
        alert('All fields are required to update the post.');
        return;
    }

    // if (formResponses.title && formResponses.content) {
        const response = await fetch('/api/posts/1', {
            method: 'PUT',
            body: JSON.stringify(formResponses),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
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