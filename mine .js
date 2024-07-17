//submission

document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault() ;
    clearForm();
    // let form = document.getElementById("form2");
    // let formData = new FormData(form);
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:",password);
});
function clearForm(){
    document.getElementById("form2").reset();
 
    

}
