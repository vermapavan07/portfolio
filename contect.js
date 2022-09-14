const form = document.getElementById("sheetdb-form")

//submit from data
form.addEventListener("submit", e => {
    e.preventDefault();
    if(1)
    {
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form"))
        }).then(
            Response => Response.json()
        ).then(alert("your responce submit successfully! We will contect you leter"))
       clearForm();
    }
    else{
        alert("Input Data in not correct.")
    }
})

//Clear form once submitted
function clearForm(){
    form.reset();
}


