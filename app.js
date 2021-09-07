//selecting elements
const container = document.querySelector('.container');
const h1 = document.querySelector('.container h1');
let count = 0;

//the clock function
const clock = () =>{
    //accessing the date object
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    count++;

    //adding a zero to the left of the time if it's less or equal than 9
    if(hours <= 9){
        hours = '0' + hours;
    } else if (minutes <= 9){
        minutes = '0' + minutes;
    } else if (seconds <= 9){
        seconds = '0' + seconds;
    }

    console.log(count);
        
    
    //adding the time to the h1 element
    h1.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
    //adding the animate class
    if (count == 5) {
    container.classList.toggle('animate');
    count = 0;
}
}
//calling the clock function after each second(1000ms).
setInterval(clock, 1000);