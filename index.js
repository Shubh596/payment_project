document.querySelector("#subbrn").addEventListener("sumbit", myFun);

function myFun(){

    var arr = JSON.parse(localStorage.getItem("payment")) || [];

    var obj ={
        fname : document.querySelector("#fname").value,
        lname :document.querySelector("#lname").value,
        email : document.querySelector("#email").value,
        date : document.querySelector(".dob").value,
        male : document.querySelector("b1").value,
        female: document.querySelector("#b2").value,
        creditCard : document.querySelector("#bc1").value,
        paypal : document.querySelector("#bc2").value,
        card : document.querySelector("#cardNumber").value,
        cvv : document.querySelector("#cvv").value,
        expaire : document.querySelector("#expaire").value,
    }

    arr.push(obj)
    // console.log(arr)
    localStorage.setItem("payment",JSON.stringify(arr))
    alert("congrats!! YOUR PAYMENT IS SECCESSFULL")

}
