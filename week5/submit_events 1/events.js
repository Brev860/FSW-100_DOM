const form = document.formData;

let results = '';

form.addEventListener("submit", () => {
     const name = 'Name: ' + form.name.value;
     const email = 'Email: ' + form.email.value;
     const subject = 'Subject: ' + form.subject.value;
     const textData = 'Message: '+ form.myTextArea.value;


     let message = `The following has been submited for review. \n You will recieve a confirmation email shortly \n ${name} \n ${email} \n ${subject} \n ${textData}`;

     alert(message);
});


