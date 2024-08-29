//display the number
function displayNumber(num){
    // document.getElementById("result").value+=num;
    result.value+=num;

}

function displayClear(){
    // document.getElementById("result").value=' ';
    result.value = ''

    //0r instead of result.value =' '

}


function operations(){
    result.value=eval(result.value)
}


function deleteLast() {
    var display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
