document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz6Edz_gEB8QXLg0KUN3eoJUzGR7euLxUElPzs8Na4gvFtaAbPPH2qfhcBERyDmtKbN1A/exec'
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        if (form.checkValidity()) {
            e.preventDefault();//it is used to avoid automatic submission

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })// 
                .then(response => {
                    alert('Success!', response)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message));
        }
    })
})