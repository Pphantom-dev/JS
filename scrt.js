const btn = document.querySelector('#send')

btn.addEventListener('click' , function(e){

    e.preventDefault()

    const name = document.querySelector('#name')

    const email = document.querySelector('#email')

    const value = name.value + " " + email.value
    
    window.location.href = "home.html";
})
