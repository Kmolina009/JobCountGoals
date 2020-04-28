// *************************
const form = document.querySelector('form')
const jobNumber = document.querySelector('#jobCnt');
const hoursNumber = document.querySelector('#hours');
const submitBtn = document.querySelector('#submitBtn')  
const results = document.querySelector('#results')
//**********created elements ******************
const errorMsg = document.createElement('div');
let mainResultMsg = document.createElement('div');

results.appendChild(mainResultMsg)
// form.appendChild('div');
//Main Result

//List of sub result

//**********Functions******************

function perTime(e){
    e.preventDefault()
    // let perHour = jobNumber.value / hoursNumber.value
    let jobs = Number(jobNumber.value)
    let hours = Number(hoursNumber.value);
//error is thrown here
    //Error handling different inputs, NaN or no input
    if( Number.isNaN(jobs) || Number.isNaN(hours)){
        e.preventDefault()
        //send error message under form components div -> h3
        wrongInputType();
        
    } else {

    let result = jobs/hours;
    //

    let hoursPerJobMsg =`Evenly speaking, this is ${result} `;
    let mainOutput = document.createTextNode(hoursPerJobMsg);
    return mainResultMsg.append(mainOutput);
    //TODO If there is a  new input, replace old out put with new input
    }
    //if either is not a number, return error message to user
    let subHours = [];
    //What other ways allow me to generate values(Class - object? key value -> perSubhour : value, or Hours, Weeks, Months, Years(?))
    // let subPut = perHour/2
    // for(let i = 0; i < 2; i++){

    // }
    //sub output
    //sub-sub output
    //outputs to DOM
    //mainResult = perHour
    //store in "other results"
    //TextContent 
    
}
function wrongInputType(){
    let inputError = document.createTextNode("I'm Sorry, but I can only take numbers");
    errorMsg.append(inputError) 
    results.appendChild(errorMsg)
    //set timer till disappears

}


function clearTimeOut(){

}
//****************************
submitBtn.addEventListener('click', perTime)
//****************************
//****

//************************ task pacer(distributed beeps indicating stages)
//how many stages
//how much time do you have to work with (Maybe it could be add up towards the job count)