var helpers = ["Your name must be in the form: \n first name, middle initial., last name",
    "Your email address must have the form:\ user@domain",
    "Your user ID must have at least six characters and it must include one digit",
    "Password must have 6 digits, it must include 1 capital letter and 1 special character",
    "This box provides advice on filling out the form on this page. Put the mouse cursor over any input field to get advice"
]

function messages(adviceNumber) {
    document.getElementById("adviceBox").value = helpers[adviceNumber];
}