let inputElement =document.querySelector("input");
        inputElement.addEventListener("change", event => {
           let inputValue = inputElement.value;
           console.log(`Input is ${inputValue}`);
            fetch(`http://localhost:8080/helloTo/${inputValue}`)
        .then(response =>{return response.text()
        }).then(data => {
            let output = document.querySelector("h1");
            output.textContent = data;
        });
        });