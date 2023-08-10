
let section = document.getElementById("section");
let news = document.getElementById("news");
let boo= document.getElementById("boo")


let star =  document.getElementById('star')
let ar = []
let dislike = document.getElementById("dislike")
let book = document.getElementById("books")
let flash = document.getElementById("flash")
let serche = document.getElementById("secrhe")

function vali(){
    book.style.display="block"
    book.style.top="75px"
    book.style.padding="0"
}

function hom() {
    window.location.href= "index.html"
}

function roll(id) {
    if (id=="tshirt"||"pants"||"watch"||"shose"){
        book.style.display="none"
    }
}

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
function homeImg() {
    const imgs = ["123.jpg", "125.jpg", "222.jpg", "1234.jpg", "128.jpg"];
    setInterval(() => {
        let rool = Math.floor(Math.random(imgs) *imgs.length)
        let fin = imgs[rool] 
        section.style.backgroundImage= `url(img/${fin})`;
    },3000);
}
homeImg()

const newz =["pexels-anne-985635.jpg","pexels-photomix-company-291759.jpg","pexels-sachin-bharti-1631181.jpg"]
let contIMG = 0;

function inc(){
contIMG++
if (contIMG<newz.length){
    news.style.backgroundImage=`url(img/new/${newz[contIMG]})`;
    return contIMG
}};

function dic(){ 
    contIMG=0;
    news.style.backgroundImage=`url(img/new/${newz[contIMG]})`
}

function serch(){
    if (serche.value == "man"||serche.value =="boy"||serche.value =="homme") {
        serche.value = ""
        window.location.href= "man.html"
    }
    else if(serche.value == "women"||serche.value =="girl"||serche.value =="womens"||serche.value =="girls"){
        serche.value = ""
        window.location.href= "women.html"
    }
}
