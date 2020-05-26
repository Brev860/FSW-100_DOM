const form = document.formData;



        form.addEventListener('submit', function(e){
                e.preventDefault();
               const title = form.title.value;
               const description = form.description.value;

                let newPost = {
                title: title,
                description: description
            
                
             };
            axios.post(`https://api.vschool.io/brevan1/todo/`, newPost)
            .then(response  => {
                
                const output = document.createElement('p');

                output.innerHTML = `<strong> Todo List: </strong> <br> Task:${title} <br> Description: ${description} `;
                document.getElementById("output").append(output);
                window.location.reload();
                  
            })       
            .catch(error => alert(error));

            
        });

        axios.get("https://api.vschool.io/brevan1/todo/")
        .then(response  => {
        for(i = 0; i < response.data.length; i++){
            const results1 = response.data[i].title;
            const results2 = response.data[i].description;
            const ID = response.data[i]._id;
                   
            const p = document.createElement('p');
            
            p.innerHTML = `Title: ${results1} <br> <br> Description: ${results2} <br><br> ${ID}`;

            document.getElementById('output').prepend(p); 

            const buttton = document.createElement('button');
            buttton.textContent = `Delete ID: ${ID}`;
            document.getElementById('output').append(buttton);
            buttton.addEventListener('click', () =>{
    
                axios.delete(`https://api.vschool.io/brevan1/todo/${ID}`)
                .then(response => {
                    alert(`${ID} has been deleted from your list of Todos`);
                    location.reload();
                });
         
        });
           
    }
})
         .catch(error => alert(error));
     
    