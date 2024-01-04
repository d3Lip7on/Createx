const form_button = document.getElementById("input_button");
form_button.addEventListener("click", () => {
    let check = true;    
    const input_name = document.getElementById("input_name");
    const p_name = document.getElementById("p_name");
    const input_phone = document.getElementById("input_phone");
    const p_phone = document.getElementById("p_phone");
    const input_email = document.getElementById("input_email");
    const p_email = document.getElementById("p_email");
    const input_message = document.getElementById("input_message");
    const p_message = document.getElementById("p_message");

    p_name.textContent = "Name*"
    p_name.style.color = "black"
    input_name.style.borderColor = ""
    p_phone.textContent = "Phone*"
    p_phone.style.color = "black"
    input_phone.style.borderColor = ""
    p_email.textContent = "Email"
    p_email.style.color = "black"
    input_email.style.borderColor = ""
    p_message.textContent = "Message*"
    p_message.style.color = "black"
    input_message.style.borderColor = ""

    if (input_name.value.trim() === "") {
        check = false;
        p_name.textContent += " (Name must be required)";
        p_name.style.color = "red";
        input_name.style.borderColor = "red";
    }
    if (input_phone.value.trim() === "") {
        check = false;
        p_phone.textContent += " (Phone must be required)";
        p_phone.style.color = "red";
        input_phone.style.borderColor = "red";
    }else if(/\+?[0-9]{9,}/.test(input_phone.value.trim())){
        check = false;
        p_phone.textContent += " (Inappropriate Phone)";
        p_phone.style.color = "red";
        input_phone.style.borderColor = "red";
    }
    if(/\w+@w+\.\w+/.test(input_email.value.trim())){
        check = false;
        p_email.textContent += " (Incorrect email)";
        p_email.style.color = "red";
        input_email.style.borderColor = "red";
    }
    if (input_message.value.trim() === "") {
        check = false;
        p_message.textContent += " (Message must be required)";
        p_message.style.color = "red";
        input_message.style.borderColor = "red";
    }
    if(check){
        input_name.value = "";
        input_phone.value = "";
        input_email.value = "";
        input_message.value = "";
        alert("We send your message")
    }
});
