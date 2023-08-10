let tshirts = document.getElementById("tshirts");
let pantss = document.getElementById("pantss");
let watchs = document.getElementById("watchs");
let shoses = document.getElementById("shoses");
let titelStar =document.querySelectorAll(".titel1")
let book = document.getElementById("bookss")
let bigSmal = document.getElementById("bigsmal")
let big = document.querySelector(".big")
let car = document.getElementById("car")
let carshop = document.getElementById("carshop");
let vanish = document.getElementById("vanish")

function vali(){
    book.style.display="block"
    book.style.top="75px"
    book.style.padding="0"
}

function roll(id) {
    if (id=="tshirt"||"pants"||"watch"||"shose"){
        book.style.display="none"
    }
}
let tshirtwomen = [
    {
        photo:"img/fimal/tshirt/tshirt fam 1.jpg",
        name:"women t-shirt" ,
        price:41,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    },{
        photo:"img/fimal/tshirt/tshirt fam 2.jpg",
        name:"women t-shirt",
        price:53,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/tshirt/tshirt fam 3.jpg",
        name:"women t-shirt",
        price:52,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/tshirt/tshirt fam 4.jpg",
        name:"women t-shirt",
        price:66,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/tshirt/tshirt fam 5.jpg",
        name:"women t-shirt",
        price:44,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }
]

let pantswomen = [
    {
        photo:"img/fimal/pont/pont 2.jpg",
        name:"women pant" ,
        price:51,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, 
    {
        photo:"img/fimal/pont/pont 3.jpg",
        name:"women pant",
        price:56,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/pont/pont 4.jpg",
        name:"women pant",
        price:32,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/pont/pont fam 1.jpg",
        name:"women pant",
        price:65,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/pont/pont fam 5.jpg",
        name:"women pant",
        price:48,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }
]

let watchwomen = [
    {
        photo:"img/fimal/watch/fam watch 1.jpg",
        name:"women watch" ,
        price:400,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, 
    {
        photo:"img/fimal/watch/fam watch 3.jpg",
        name:"women watch",
        price:500,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/watch/fam watch 4.jpg",
        name:"women watch",
        price:500,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/watch/fam watch 5.jpg",
        name:"women watch",
        price:400,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/watch/fam watch 6.jpg",
        name:"women watch",
        price:350,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }
]

let shoswomen = [
    {
        photo:"img/fimal/shos/fam chos 1.jpg",
        name:"women shos" ,
        price:40,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, 
    {
        photo:"img/fimal/shos/fam chos 2.jpg",
        name:"women shos",
        price:50,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/shos/fam chos 3.jpg",
        name:"women shos",
        price:50,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/shos/fam chos 4.jpg",
        name:"women shos",
        price:60,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }, {
        photo:"img/fimal/shos/fam chos 5.jpg",
        name:"women shos" ,
        price:40,
        prodectData: "Lorem ipsum dolor sit amet consectetur  adipisicing elit." ,
    }
]
//  creat a cart in order 
for (let i = 0; i < tshirtwomen.length; i++) {
    tshirts.innerHTML += `
    <div id="newcartt" class="carte">
                <img id="imgss"  src="${tshirtwomen[i].photo}">
                <div class="par">
                    <h2 class="cartby">${tshirtwomen[i].name} <span>$${tshirtwomen[i].price}</span></h2>    
                    <p class="cartby">${tshirtwomen[i].prodectData}</p>
                    <div class="starss"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">like this prodect</p> 
                            <i style="font-size:1.5em;" class="fa-solid fa-heart "></i>
                        </h1>
                    </div>
                    <button id="buys">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < pantswomen.length; i++) {
    pantss.innerHTML += `
    <div id="newcartt" class="carte">
                <img id="imgss" src="${pantswomen[i].photo}">
                <div class="par">
                    <h2 class="cartby">${pantswomen[i].name} <span>$${pantswomen[i].price}</span></h2>    
                    <p class="cartby">${pantswomen[i].prodectData}</p>
                    <div class="starss"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buys">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < watchwomen.length; i++) {
    watchs.innerHTML += `
    <div id="newcartt" class="carte">
                <img id="imgss" src="${watchwomen[i].photo}">
                <div class="par">
                    <h2 class="cartby">${watchwomen[i].name} <span>$${watchwomen[i].price}</span></h2>    
                    <p class="cartby">${watchwomen[i].prodectData}</p>
                    <div class="starss"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buys">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
for (let i = 0; i < shoswomen.length; i++) {
    shoses.innerHTML += `
    <div id="newcartt" class="carte">
                <img id="imgss" src="${shoswomen[i].photo}">
                <div class="par">
                    <h2 class="cartby">${shoswomen[i].name} <span>$${shoswomen[i].price}</span></h2>    
                    <p class="cartby">${shoswomen[i].prodectData}</p>
                    <div class="starss"> 
                        <h1 style="text-align: center; padding: 5px;" class="titel1" id="star">
                            <p style="color: #000000bb;padding: 5px ">rate this prodect</p>
                            <i style="font-size:1.5em;" class="fa-solid fa-heart"></i>
                        </h1>
                    </div>
                    <button id="buys">buy it</button>
                    <input id="discript" style="outline: none; background-color: #0f959cbb; border:none; border-bottom: black; padding: 5 px;" type="text" placeholder="write a comment">
                </div>
    </div>
    `
}
let imgs = document.querySelectorAll("#imgss");
let buys = document.querySelectorAll("#buys")
let imgsss = document.querySelectorAll("#imgss");
let newcartt = document.querySelectorAll('#newcartt');
let starss =  document.querySelectorAll(".starss  i");
starss.forEach(el=>{
el.addEventListener("click", ()=>{
el.classList.toggle("heart")
})
})
function hom() {
    window.location.href= "index.html"
}

buys.forEach((el,id) =>{
el.addEventListener("click",(e)=>{
    vanish.style.display="none"
    let bodys = document.getElementById("bodys")
    bodys.style.display="block"
    document.querySelector(".contents").style.display="none"
    imgsss.forEach((el,id2) =>{
bodys.innerHTML=`
<div class="lastpage">
<div class="chosenOne">
<img id="cars" src=${imgsss[id].src} >
</div>
<br>
<h1 style="font-size:40px ;" id="titels"></h1>
<form >
<h1 style="margin: 0 0 20px">price <span id="lastpag-prices">$</span></h1>
<div id="sizedivs">
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
<input id="count" min="0" max="10" placeholder="0" type="number" id="countiti">
<label for="countiti">determin how much you need</label>
<h1 id="finalprice" ></h1>
<div id="colordivs">
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
<h2 onclick="strss()" style="padding: 5px; width:fit-content;padding:18px; border-radius:20px;cursor: pointer; background-color: aqua;">ADD TO CART</h2>
</div>
</form>
<div class="dilivertim">
<h1>deliver time in :</h1>
H:<span id="hours">48</span>
M:<span id="minuts">00</span>
S:<span id="secends">00</span>
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
</div>` 
str=document.getElementById("str")
//get elm price from arry to body inerhtml
if (id<5) {
document.getElementById("lastpag-prices").innerHTML+=`${tshirtwomen[id].price}`
document.getElementById("titels").innerHTML+="t-shirt "
}else if (id<10){
document.getElementById("titels").innerHTML+="pants "
document.getElementById("lastpag-prices").innerHTML+=`${pantswomen[id-5].price}`
}else if (id<15){
document.getElementById("titels").innerHTML+="watch"
document.getElementById("sizedivs").innerHTML=""
document.getElementById("colordivs").innerHTML=""
document.getElementById("lastpag-prices").innerHTML+=`${watchwomen[id-10].price}`
}else if (id<20){
document.getElementById("titels").innerHTML+="shos"
document.getElementById("lastpag-prices").innerHTML+=`${shoswomen[id-15].price}`
}

//get input type radio values
let inpvalue = document.querySelectorAll("input");
// inpvalue.forEach(el=>{
// el.addEventListener("click", (e)=>{
// let calle = document.getElementById("col")
// calle.innerHTML= `<h2  style="padding: 5px; width:fit-content;padding:18px; border-radius:20px;cursor: pointer; background-color: aqua;">ADD TO CART</h2>
// `
// })// set delivery time
// let hs = document.getElementById("hours");
// let ms = document.getElementById("minuts");
// let ss = document.getElementById("secends");

// const starthours = 48 ;
// const startmins = starthours*60;
// let startsecs = startmins*60

// setInterval(update,1000)
// function update(){
// const hours = Math.floor(startmins/60)
// const mins = Math.floor((startsecs/60)%60);
// let secs = startsecs % 60;
// hs.innerHTML=`${hours}`
// ms.innerHTML=`${mins}`
// ss.innerHTML=`${secs}`
// startsecs--
// }
// })
// set delivery time
let h = document.getElementById("hours");
let m = document.getElementById("minuts");
let s = document.getElementById("secends");

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
    startsec--}

})});
});

// push elment ditaill in arry
let car_array = [];
let tchirt_arr =[];
let pants_arr=[];
let watch_arr=[];
let shos_arr=[];
newcartt.forEach((el,id)=>{
        el.addEventListener("click",el=>{
            if (id<5) {
                tchirt_arr = [
                    {photo:tshirtwomen[id].photo,
                    name:tshirtwomen[id].name,
                    price:tshirtwomen[id].price
                    },]
                    console.log(shos_arr,id );
                }else if (id>5&&id<10){
                pants_arr =[
                    {photo:pantswomen[id-5].photo,
                        name:pantswomen[id-5].name,
                        price:pantswomen[id-5].price,
                        },]
                        console.log(shos_arr,id );
                }else if (id>10&&id<15){
                watch_arr= [{photo:watchwomen[id-10].photo,
                        name:watchwomen[id-10].name,
                        price:watchwomen[id-10].price,
                        },]
                        console.log(shos_arr,id );
                }else if (id>15&&id<20){
                shos_arr = [
                    {photo:shoswomen[id-15].photo,
                        name:shoswomen[id-15].name,
                        price:shoswomen[id-15].price,
                        },]
                        console.log(shos_arr,id );
                };})})
// vu IMG
    imgs.forEach((el,id) => {
            el.addEventListener("click",function(){
                bigImg()
                bigSmal.src = `${el.src}`
            })
        });
        function bigImg(){
            big.style.display="block"
        }
        //  close photo
        function stop(){
            big.style.display="none";
            bigSmal.src = "";
        }

    // add to cart click return to main page 
    function strss() {
        if (tchirt_arr.length>0) {
            car_array.push(tchirt_arr)
        } else if(pants_arr.length>0 ){
            car_array.push(pants_arr)
        }else if (watch_arr.length>0){
            car_array.push(watch_arr)
        }else if (shos_arr.length>0){
                car_array.push(shos_arr)
        }
        console.log(car_array);
        car.style.display="block"
        bodys.style.display="none"
        document.querySelector(".contents").style.display="block"

        for (let i = 0; i < car_array.length; i++) {
            carshop.innerHTML+=`
        <div>
        <div id="carilm" >
        <img class="bobob" src="${car_array[i][i].photo}" alt="">
        <h1>prodect name :${car_array[i][i].name} </h1>
        <span>price :${car_array[i][i].price} </span>
        <i style="color:red" class=" fa-solid fa-xmark fa-beat-fade" style="color: #ff0000;"></i>
        </div>
    </div>
        `
            vanish.style.display="block"}}

let flashs = document.getElementById("flash")
onscroll = function  (){
    if (this.scrollY>=150) {
        flashs.style.display="block"
    }else{
        flashs.style.display="none"
    }
}
function up(){
    window.scroll({
        top:0
    })
}
function non() {
    carshop.style.display="none"
    console.log("ok don");
}
car.addEventListener("click",function(){
    carshop.style.display="block"
})
