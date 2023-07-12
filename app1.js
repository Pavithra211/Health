let formEl = document.forms.report; //by name



formEl.addEventListener("submit", (event) => {
    event.preventDefault();


    const fullNameEl = formEl.elements.fullName; //by name
    const ageEl = formEl.elements.age;
    const weightEl = formEl.elements.weight;
    const emailEl = formEl.elements.email;
    const fileEl = formEl.elements.file;


    const formData = [... new FormData(formEl)];

    //JSON

    const jsonData = JSON.stringify(Object.fromEntries(formData));

    console.log(jsonData);
    alert("Form has been submitted successfully !");

});



