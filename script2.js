
let book = document.getElementById("books")
let flash = document.getElementById("flash")
let bigSmal = document.getElementById("bigsmal")
let big = document.querySelector(".big")
let cart = document.querySelectorAll('.carte');
let car = document.getElementById("car")
let carshop = document.getElementById("carshop");
let tshirt = document.getElementById("tshirtt");
let pants = document.getElementById("pantst");
let watch = document.getElementById("watcht");
let shose = document.getElementById("shoset");
let discript = document.getElementById("discript");
let imgs = document.querySelectorAll("imgs");
let vanish = document.getElementById("vanish")
//inject prodect into html
let tshirtman = [
    {
        photo:"img/mal/tshirt/tshirt mal 1.jpg",
        name:"man t-shirt" ,
        price:40,
        rate:["<i></i>","<i></i>","<i></i>","<i></i>","<i></i>"],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, 
    {
        photo:"img/mal/tshirt/tshirt mal 2.jpg",
        name:"man t-shirt" ,
        price:50,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/tshirt/tshirt mal 3.jpg",
        name:"man t-shirt" ,
        price:50,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/tshirt/tshirt mal 4.jpg",
        name:"man t-shirt" ,
        price:60,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/tshirt/tshirt mal 11.jpg",
        name:"man t-shirt" ,
        price:40,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }
]

let pantsman = [
    {
        photo:"img/mal/pont/jason-leung-EtOMMg1nSR8-unsplash.jpg",
        name:"man pant" ,
        price:50,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, 
    {
        photo:"img/mal/pont/matthew-moloney-YeGao3uk8kI-unsplash.jpg",
        name:"man pant" ,
        price:55,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/pont/pont mal 1.jpg",
        name:"man pant" ,
        price:30,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/pont/pont mal 2.jpg",
        name:"man pant" ,
        price:60,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/pont/pont mal 3.jpg",
        name:"man pant" ,
        price:40,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }
]

let watchman = [
    {
        photo:"img/mal/watch/man watch 1.jpg",
        name:"man watch" ,
        price:400,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, 
    {
        photo:"img/mal/watch/man watch 2.jpg",
        name:"man watch" ,
        price:500,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/watch/man watch 3.jpg",
        name:"man watch" ,
        price:500,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/watch/man watch 4.jpg",
        name:"man watch" ,
        price:400,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/watch/man watch 5.jpg",
        name:"man watch" ,
        price:350,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }
]

let shosman = [
    {
        photo:"img/mal/shos/mal chos 3.jpg",
        name:"man shos" ,
        price:40,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, 
    {
        photo:"img/mal/shos/mal chos 4.jpg",
        name:"man shos" ,
        price:50,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/shos/mal chos 5.jpg",
        name:"man shos" ,
        price:50,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/shos/man chos 2.jpg",
        name:"man shos" ,
        price:60,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }, {
        photo:"img/mal/shos/man shos 1.jpg",
        name:"man shos" ,
        price:40,
        rate:[],
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
        prodectdiscription:"",
    }
]
// creat a cart in order 
for (let i = 0; i < tshirtman.length; i++) {
tshirt.innerHTML+= `
    <div id="newcart" class="carte">
                <img id="imgs"  src="${tshirtman[i].photo}">
                <div class="par">
                    <h2 class="cartby">${tshirtman[i].name} <span>$${tshirtman[i].price}</span></h2>    
                    <p class="cartby">${tshirtman[i].prodectData}</p>
                    <div class="star"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">like this prodect</p> 
                            <i style="font-size:1.5em;" class="fa-solid fa-heart "></i>
                        </h1>
                    </div>
                    <button id="buy">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < pantsman.length; i++) {
    pants.innerHTML += `
    <div id="newcart" class="carte">
                <img id="imgs" src="${pantsman[i].photo}">
                <div class="par">
                    <h2 class="cartby">${pantsman[i].name} <span>$${pantsman[i].price}</span></h2>    
                    <p class="cartby">${pantsman[i].prodectData}</p>
                    <div class="star"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buy">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < watchman.length; i++) {
    watch.innerHTML += `
    <div id="newcart" class="carte">
                <img id="imgs"  src="${watchman[i].photo}">
                <div class="par">
                    <h2 class="cartby">${watchman[i].name} <span>$${watchman[i].price}</span></h2>    
                    <p class="cartby">${watchman[i].prodectData}</p>
                    <div class="star"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buy">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < shosman.length; i++) {
    shose.innerHTML += `
    <div id="newcart" class="carte">
                <img id="imgs"  src="${shosman[i].photo}">
                <div class="par">
                    <h2 class="cartby">${shosman[i].name} <span>$${shosman[i].price}</span></h2>    
                    <p class="cartby">${shosman[i].prodectData}</p>
                    <div class="star"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buy">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
let buy = document.querySelectorAll("#buy")
let imgss = document.querySelectorAll("#imgs");
let newcart = document.querySelectorAll('#newcart');
let star =  document.querySelectorAll(".star  i");

star.forEach(el=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("heart")
    })
})

// dropdown menu
function vali(){
    book.style.display="block"
    book.style.top="75px"
    book.style.padding="0"
}
// on click home botton redirect to home page
function hom() {
    window.location.href= "index.html"
}

// serch by id 
function roll(id) {
    if (id=="tshirt"||"pants"||"watch"||"shose"){
        book.style.display="none"
    }
}

// scrole event 
onscroll = function  (){
    if (this.scrollY>=150) {
        flash.style.display="block"
    }else{
        flash.style.display="none"
    }
}
function up(){
    window.scroll({
        top:0
    })
}
let count;
buy.forEach((el,id) =>{
    el.addEventListener("click",(e)=>{
        vanish.style.display="none"
        document.querySelector(".content").style.display="none"
        vanish.style.display="none"
        imgss.forEach((el,id2) =>{
                let body = document.getElementById("body");
                    body.innerHTML=`
    <div class="lastpage">
        <div class="chosenOne">
            <img id="cars" src=${imgss[id].src} >
        </div>
        <br>
        <h1 style="font-size:40px ;" id="titel"></h1>
        <form >
        <h1 style="margin: 0 0 20px">price <span id="lastpag-price">$</span></h1>
        <div id="sizediv">
        <br>
        <input name="size" type="radio" id="s" value="s">
        <label name="size" for="s"> - S  </label>
        <input  name="size" type="radio" id="m" value="m">
        <label for="m"> - m  </label>
        <input  name="size" type="radio" id="l" value="l">
        <label for="l">- l  </label>
        <input  name="size" type="radio" id="xl" value="xl">
        <label for="xl"> - xl  </label>
        <input   name="size" type="radio" id="xxl" value="xxl">
        <label for="xxl"> - xxl  </label>
        <h1 style="margin: 0 0 20px">choose your size</h1>
        </div>
        <input min="0" onchange="getvalue(this.value)" max="10" placeholder="0" type="number" id="countiti">
        <label for="countiti">determin how much you need</label>
        <h1 id="finalprice" ></h1>
        <div id="colordiv">
        <h1 style="margin: 0 0 20px">choose your color</h1>
        <br>
        <input   name="color" type="radio" id="red" value="red">
        <labe for="red"> - red  </labe>
        <input   name="color" type="radio" id="blue" value="blue">
        <label for="blue"> - blue  </label>
        <input  name="color" type="radio" id="white" value="white">
        <label for="white"> - white  </label>
        <input   name="color" type="radio" id="black" value="black">
        <label for="black"> - black  </label>
        <input   name="color" type="radio" id="mixd" value="mixd">
        <label for="mixd"> - mixd  </label>
        </div>
        <br>
        <br>
        <h1>choose the appropriate delivery method</h1><p style="color: red;">(fast cost you +20$)</p>
        <input   name="dilliver" type="radio" id="s" value="fast">
        <label for="s">fast dilivery</label>
        <input   name="dilliver" type="radio" id="m" value="reguler" checked>
        <label for="s">riguler delivery</label>
        <br>
        <br>
        <div id="col"> 
        <h2 onclick="cartss()" style="padding: 5px; width:fit-content;padding:18px; border-radius:20px;cursor: pointer; background-color: aqua;">ADD TO CART</h2>
        </div>
    </form>
    <div class="dilivertim">
        <h1>deliver time in :</h1>
        H:<span id="hour">48</span>
        M:<span id="minut">00</span>
        S:<span id="secend">00</span>
    </div>
    <div class="ditaill">
        <h1>prodect ditaille</h1>
        <p style="font-size: 1.4em;color: #4e4c4c;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum obcaecati alias voluptatibus 
            est aspernatur, minus tempora accusantium quisquam impedit eligendi, rem amet repellat. Vel, officia
            quibusdam deserunt velit enim iure! Iste nesciunt ea voluptatibus quisquam, fugit minima laboriosam,
            consectetur molestiae adipisci soluta id inventore dolorem ad, quibusdam temporibus. Nam?
        </p>
    </div>
    </div>
    
    <div class="satasfy">
        <h1>satisfied customers :</h1>
        <div>
            <img src="img/mal/person/hom1.jpg" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, officiis!</p>
        </div>
        <div>
            <img src="img/mal/person/hom2.jpg" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, officiis!</p>
        </div>
        <div>
            <img src="img/fimal/person/fam1.jpg" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, officiis!</p>
        </div>
        <div>
            <img src="img/fimal/person/fam2.jpg" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, officiis!</p>
        </div>
        <div>
            <img src="img/fimal/person/fam3.jpg" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, officiis!</p>
        </div>
    </div>
    ` 
    // get elm price from arry to body inerhtml
    if (id<5) {
    document.getElementById("lastpag-price").innerHTML+=`${tshirtman[id].price}`
    document.getElementById("titel").innerHTML+="t-shirt "
    }else if (id<10){
        document.getElementById("titel").innerHTML+="pants "
        document.getElementById("lastpag-price").innerHTML+=`${pantsman[id-5].price}`
    }else if (id<15){
        document.getElementById("titel").innerHTML+="watch"
        document.getElementById("sizediv").innerHTML=""
        document.getElementById("colordiv").innerHTML=""
        document.getElementById("lastpag-price").innerHTML+=`${watchman[id-10].price}`
    }else if (id<20){
        document.getElementById("titel").innerHTML+="shos"
        document.getElementById("lastpag-price").innerHTML+=`${shosman[id-15].price}`
    };
    
    // add to cart final 
    
// get input type radio values
let inpvalue = document.querySelectorAll("input");
// inpvalue.forEach(el=>{
//         el.addEventListener("click", (e)=>{
//             let calle = document.getElementById("col")
//             calle.innerHTML= 
            
//         })
//     })
});

// set delivery time
let h = document.getElementById("hour");
let m = document.getElementById("minut");
let s = document.getElementById("secend");

const starthour = 48 ;
const startmin = starthour*60;
let startsec = startmin*60

setInterval(update,1000)
function update(){
    const hour = Math.floor(startmin/60)
    const min = Math.floor((startsec/60)%60);
    let sec = startsec % 60;
    h.innerHTML=`${hour}`
    m.innerHTML=`${min}`
    s.innerHTML=`${sec}`
    startsec--}})});

// // vu IMG
imgss.forEach((el,id) => {
    let cares = document.getElementById("cars")
        el.addEventListener("click",function(){
            bigImg()
            bigSmal.src = `${el.src}`
        })
    });
    
function bigImg(){
    big.style.display="block"
}

// // (no) vu IMG
function stop(){
    big.style.display="none";
    bigSmal.src = "";
}


// push elment ditaill in arry
let car_array = [];
let tchirt_arr =[];
let pants_arr=[];
let watch_arr=[];
let shos_arr=[];
    newcart.forEach((el,id)=>{
        el.addEventListener("click",el=>{
            if (id<5) {
                tchirt_arr = [tshirtman[id].price,tshirtman[id].name,tshirtman[id].photo]
                }else if (id<10){
                pants_arr =[pantsman[id-5].price,pantsman[id-5].name,pantsman[id-5].photo]
                }else if (id<15){
                watch_arr =[watchman[id-10].price,watchman[id-10].name,watchman[id-10].photo]
                }else if (id<20){
                shos_arr = [shosman[id-15].price,shosman[id-15].name,shosman[id-15].photo]
                };
                // when click at add to cart make boo
                body.style.display="block"
        })
    })

    // add to cart click return to main page 
function cartss(){
    if (tchirt_arr.length>0) {
        car_array.push(tchirt_arr)
    } else if(pants_arr.length>0){
        car_array.push(pants_arr)
    }else if (watch_arr.length>0){
        car_array.push(watch_arr)
    }else if (shos_arr.length>0){
            car_array.push(shos_arr)
    }
    car.style.display="block"
    body.style.display="none"
    document.querySelector(".content").style.display="block"
    vanish.style.display="block"
}




// appir and doisappir carchop
car.addEventListener("click",function(){
    carshop.style.display="block"
})
document.querySelector(".xxx").addEventListener("click",()=>{
    carshop.style.display="none"
})


