let contactus = {
    nome:"",
    email:"",
    pais:""
}
    



function func(){
    contactus.nome = document.getElementById("nome").value;
    contactus.email = document.getElementById("email").value;
    contactus.pais = document.getElementById("Pais").value;
    console.log(contactus)
}

const header = document.querySelector(".header");
const converted = {
  "#menu #li1": {
    borderRadius: ["4px", "4px"],
    fontSize: "inherit",
    padding: "0.25em 0.5em",
    boxShadow: "0 0 4px 0px #e2e2e2",
    position: "relative"
  },
  "#menu #li1::after,\n#menu #li1::before": {
    content: '""',
    position: "absolute",
    bottom: "0px",
    top: "0px",
    left: "0px",
    right: "0px",
    transition: "transform 0.3s ease-in-out",
    zIndex: -1000
  },
  "#menu #li1::before": {
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
    transform: "scaleY(0)"
  },
  "#menu #li1::after": {
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    transform: "scaleX(0)"
  },
  "#menu #li1:hover::before": { transform: "scaleY(1)" },
  "#menu #li1:hover::after": { transform: "scaleY(1)" }
}


window.onscroll = function(){
var top = window.scrollY 
console.log(top);
var img = document.getElementById("img");
  if (top > 80) {
    document.getElementById("header").style.padding = "1px";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.boxShadow = "0 0 10px 0px #e2e2e2";
    document.getElementById("li1").style.top = "10px";
    img.src ="../imagens/LOGO123.png";
  } else {
    img.src ="../imagens/LOGO12.png";
    document.getElementById("li1").style.top = "40px";
    document.getElementById("header").style.padding = "2rem";
    document.getElementById("header").style.backgroundColor = "#0099ff";
    document.getElementById("header").style.boxShadow = "0 0 0px 0px #e2e2e2";
    


  }
}
