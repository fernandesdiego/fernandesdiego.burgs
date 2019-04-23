let defaultbname = document.getElementById('name');
let contentBurger = document.getElementById('content');
let charLimit = 5;
function generate(){
	let bname = "";
	let burger = "";
		while(bname.length < charLimit){
			let rand = Math.floor(Math.random()*5)+1;
			switch(rand){
				case 1:{
					bname += "ham";
					burger += "<img src='img/upb.png' id='hamburger' class='upb'/>";
				}
				break;
				case 2:{
					bname += "bur";
					burger += "<img src='img/lettuce.png' id='hamburger'/>";
					burger += "<img src='img/tomato.png' id='hamburger'/>";
					burger += "<img src='img/cheese.png' id='hamburger'/>";
					burger += "<img src='img/meat.png' id='hamburger'/>";
				}
				break;
				case 3:{
					bname+= "ger";
					burger += "<img src='img/dwb.png' id='hamburger' class='dwb'/>";
				}
				break;
				case 4:{
					bname += "u";
					burger += "<img src='img/tomato.png' id='hamburger'/>";
				}
				break;
				case 5:{
					bname += "ur";
					burger += "<img src='img/tomato.png' id='hamburger'/>";
					burger += "<img src='img/meat.png' id='hamburger'/>";
					
				}
				break;
			}
		}
		charLimit = bname.length;
		defaultbname.innerHTML = bname + bname;
		contentBurger.innerHTML=burger;
}