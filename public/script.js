console.log('chicken');
console.log("we are in the browser");

// what to do when we recieve the request
// var responseHandler = function() {
//   console.log("response text", this.responseText);
//   console.log("status text", this.statusText);
//   console.log("status code", this.status);
// };

// // make a new request
// var request = new XMLHttpRequest();



// // listen for the request response
// request.addEventListener("load", responseHandler);

// // ready the system by calling open, and specifying the url
// // var url = "https://swapi.co/api/people/1";
// var url = "http://127.0.0.1:3000/banana";
// request.open("GET", url);



// // send the request
// request.send();

window.onload = () => {

    let deleteButtonsArray = document.querySelectorAll(".delete");
    console.log(deleteButtonsArray )
    deleteButtonsArray.forEach( button => {
        button.addEventListener("click",()=>{
            console.log("stuff deleting")
            fetch(`/question/${button.id}`, {
               method:"DELETE"
                })
                    })
                    console.log(button.id)
                })

    let delButtonsArray = document.querySelectorAll(".deleteBrainstorm");
    console.log(delButtonsArray )
    delButtonsArray.forEach( button => {
        button.addEventListener("click",()=>{
            console.log("stuff deleting")
            fetch(`/brainstorm/${button.id}`, {
               method:"DELETE"
                })
                    })
                    console.log(button.id)
                })


    let deleteButtonArray = document.querySelectorAll(".deletePoll");
    console.log(deleteButtonArray )
    deleteButtonArray.forEach( button => {
        button.addEventListener("click",()=>{
            console.log("stuff deleting")
            fetch(`/poll/${button.id}`, {
               method:"DELETE"
                })
                    })
                    console.log(button.id)
                })
}

//================================

// window.addEventListener('load', () => {
//   var app = {
//     pollLogo: document.querySelectorAll('.poll-logo'),
//     frameworks: ['Angular', 'Ember', 'React', 'Vue']
//   }