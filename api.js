const getAPIButton = document.querySelector("#getAPIButton");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2")
const getAPISumButton = document.querySelector("#getAPISum");
const nam= document.getElementById("name");
const clas= document.getElementById("class");
const APISubmitName= document.querySelector("#APISubmitName");
console.log(getAPIButton)
// getAPIButton.addEventListener('click',()=>{
//     fetch('http://127.0.0.1:5000/api/get')
//     .then(response => response.json())
//     .then(data => {
//         // Display the data in the HTML
//         document.getElementById('getAPIResult').innerHTML = data.message ;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// })

// getAPISumButton.addEventListener('click',()=>{
//     fetch(`http://127.0.0.1:5000/api/sum?num1=${num1.value}&num2=${num2.value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Display the data in the HTML
//         document.getElementById('getAPISumResult').innerHTML = data.result ;
//     })
//     .catch(error => console.error('Error fetching data:', error));

// })



APISubmitName.addEventListener('click',()=>{
    fetch(`http://127.0.0.1:5000/API/Jokes/m`)
    .then(response => response.json())
    .then(data => {
        // Display the data in the HTML
        // console.log(data)
        document.getElementById('StatusResult').innerHTML = (data.status)
        document.getElementById('NameResult').innerHTML = (data.joke)
    })
    // console.log('nam')
    // fetch(`http://127.0.0.1:5000/api/v1/input?name=${nam.value}&class=${clas.value}`)
    // .then(response => response.json())
    // .then(data => {
    //     // Display the data in the HTML
    //     console.log(data)
    //     document.getElementById('StatusResult').innerHTML = (data.status)
    //     document.getElementById('NameResult').innerHTML = (data.message) ;
    // })
    .catch(error => console.error('Error fetching data:', error));
})
// console.log(nam)
//     fetch(`http://127.0.0.1:5000/api/v1/input?name=${nam.value}&class=${clas.value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Display the data in the HTML
//         document.getElementById('nam').innerHTML = data.message ;
//     })
//     .catch(error => console.error('Error fetching data:', error));