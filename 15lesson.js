const fileForm = document.getElementById('fileForm');

fileForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(fileForm);

    const fetchData = {
        method: 'POST',
        body: formData
    }

    fetch('https://if-student-api.onrender.com/api/file', fetchData)
        .then (response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
        .then (data => {
            console.log('Response data:', data);
        })
        .catch (error => {
            console.log('Error:', error)
        })
});