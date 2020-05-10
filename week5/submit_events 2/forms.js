const forms = document.formInPut;
let data = '';

forms.addEventListener("submit", () => {
    const name1 = 'First Name: ' + forms.fName.value;
    const name2 = 'Last Name: '+ forms.lName.value;
    const age = 'Age: ' + forms.age.value;
    const gender = `Geneder: `+ forms.gender.value;
    const location =  `Location: ` + forms.location.value;
    const checkDiet = [];
    

    for(i = 0; i < forms.diet.length; i++){
        if(forms.diet[i].checked){
            checkDiet.push(forms.diet[i].value);
        }
    }
   
   
   
    data = `You've successfully submited: \n ${name1} \n ${name2} \n ${age} \n ${gender} \n ${location} \n Dietary Restrictions: ${checkDiet}`;

    alert(data);
})

