window.onload = function () {
    let num1 = (document.getElementById('num1').value)/100
    let num2 = document.getElementById('num2').value
    let alertbtn = document.getElementById('alertbtn')
    let del = document.getElementById('del')
    let list = document.getElementById('list')
    let result = (num1)/Math.pow(num2,2)
    let prediction = ""
    if(result<18.8){
         prediction = "Underweight"
    }
    else if(result>=18.5 && result<=25){
        prediction = "Healthy weight"
    }
    else if(result>25){
        prediction = "Overweight"
    }
    alertbtn.onclick = function () {
        let item = document.createElement('li')
        let item2 = document.createElement('li')
        item.innerHTML = `
        <span>${result}</span>
        `
        item2.innerHTML = `
        <span>${prediction.value}</span>
        `
        num1.value = " "
        num2.value = " "
        list.appendChild(item)
        list.appendChild(item2)
    }

    del.onclick = function (){
        list.innerHTML = " "
    }
}
    