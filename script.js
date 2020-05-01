// *************************
const form = document.querySelector('form');
const jobNumber = document.querySelector('#jobCnt');
const hoursNumber = document.querySelector('#hours');
const submitBtn = document.querySelector('#submitBtn');
const results = document.querySelector('#results');
//**********created elements ******************
const errorMsg = document.createElement('div');
let mainResultMsg = document.createElement('div');

//Main result Output
results.appendChild(mainResultMsg);

//List of sub result

//**********Functions******************

function perTime(e){
    e.preventDefault()
    mainResultMsg.innerText = '';
    // let perHour = jobNumber.value / hoursNumber.value
    let jobs = Number(jobNumber.value)
    let hours = Number(hoursNumber.value);
    let formEval = (jobs && hours);
if(formEval === 0 || isNaN(formEval)){
    // e.preventDefault();
    console.log(
    userError(formEval));
} else {

    let result = jobs/hours;
    //

    let hoursPerJobMsg =`try to get ${result.toFixed(1)} per hour.`;
    let mainOutput = document.createTextNode(hoursPerJobMsg);
    // mainOutput.document.style.color = 'red';
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
    
};

// Error Msgs
function userError(err){
    let msg = ''
    if(err === 0){
        msg = 'but one of these input\'s is a tad too small... :(';
    }else if(isNaN(err)){
        msg ='but I can only take numbers.';   
    }
    let inputError = document.createTextNode(`I'm Sorry, ${msg}`);
    errorMsg.append(inputError);
//TODO style output letter color to be "red"
    results.id = 'error';
    errorMsg.style.color = "red"
    results.append(errorMsg);    
//no duplicates

    if(errorMsg.innerText != ''){
        setTimeout(clearTimeOut,5000)
    }  
};

//get rid of error message, switch id back to results
function clearTimeOut(){
    // console.log('tick tock')  
    errorMsg.innerText = '';  
    error.id = 'results'
};

//****************************
submitBtn.addEventListener('click', perTime)
//autofocus inputs to submit btn once both inputs are filled after half or 
//third a second

}
//****************************
//****

//************************ task pacer(distributed beeps indicating stages)
//how many stages
//how much time do you have to work with (Maybe it could be add up towards the job count)