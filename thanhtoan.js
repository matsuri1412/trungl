const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText

        addcart(productPrice, productImg,productName)
    }})


})

function addcart(productPrice, productImg,productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")

    for(var i = 0; i < cartItem.length; i++)
    {
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName)
        {
            alert("Sản phẩm của bạn đã có trong vỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex;  align-items: center;"><img src="'+productImg+'" alt="" style="width: 70px ; "><span class= "title">'+productName+'</span></td><td> <p><span class = "prices">'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class = "cartt-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    cartotal()
    deletecart()
}   



//TotalPrice


function cartotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for(var i = 0; i < cartItem.length; i++)
    {
        var inputvalue = cartItem[i].querySelector("input").value
        
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        
        totalA = inputvalue*productPrice*1000
      
        totalC = totalC + totalA

    }

    var cartotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartotalA.innerHTML = totalC.toLocaleString("de-DE")
    cartPrice.innerHTML = totalC.toLocaleString("de-DE")
    inputchange()
}

//Deletecart

function deletecart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++)
    {
        var productT = document.querySelectorAll(".cartt-delete") 
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR  = cartDelete.parentElement.parentElement
            cartItemR.remove()
            cartotal()
        })
       
    }
}

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++)
    {
        var inputvalue = cartItem[i].querySelector("input") 
        inputvalue.addEventListener("change",function(){
            cartotal()
        })

       
    } 
}


const carbtn = document.querySelector(".fa-xmark")

const cartshow = document.querySelector(".fa-basket-shopping")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})

carbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})

