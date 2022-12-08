const screen_width = screen.width;

function highlight_default(wdth) {
	const buttons = document.querySelectorAll(".chose_amount_radio")
	const money = document.querySelectorAll("span.money")
	const input = document.querySelector("input.an_amount")
	//if (wdth < 999) {
		buttons[5].classList.add("checked");
		money[5].classList.add("money_checked");
		input.value = 100;
	//}
	//else {
	//	buttons[2].classList.add("checked");
	//	money[2].classList.add("money_checked");
	//	input.value = 1000
	//}
};

highlight_default(screen_width);

function removeCheck() {
	const buttonPriv = document.querySelector(".checked")
	const moneyPriv = document.querySelector("span.money.money_checked")
	try {
		buttonPriv.classList.remove("checked");
	}
	finally {
		moneyPriv.classList.remove("money_checked");
	}
}

function clickamnt(n) {
	try {
		removeCheck()
	}
	finally {
		const buttons = document.querySelectorAll(".chose_amount_radio")
	const money = document.querySelectorAll("span.money")
	const input = document.querySelector("input.an_amount")
	const moneyValues = [5000, 2000, 1000, 500, 250, 100, 50, 25]

	buttons[n].classList.add("checked");
	money[n].classList.add("money_checked");
	input.value = moneyValues[n];
	}
	

};


function inputamnt(inpt) {
	const x = document.querySelector("input.an_amount")
	if (x.value.length >2) {
		x.value = x.value.slice(x.value.length - 3, x.value.length)
	}
}

function inputsame(inpt) {
	const buttons = document.querySelectorAll(".chose_amount_radio")
	const money = document.querySelectorAll("span.money")
	const moneyValues = [5000, 2000, 1000, 500, 250, 100, 50, 25];
	const index = moneyValues.indexOf(parseInt(inpt))
	console.log(index)
	if (index == -1) {
		removeCheck()
	}
	else {
		try {
			removeCheck()
		}
		finally {
		buttons[index].classList.add("checked");
		money[index].classList.add("money_checked");
		}
	}
}




//burger menu


function showMenu() {
	const menu = document.querySelector("#nav_phone")
	//menu.classList.add("show")
	menu.style.display = 'block'
}

function hideMenu() {
	const menu = document.querySelector("#nav_phone")
	
	//menu.classList.remove("show")
	if (event.target.id == 'nav_phone' ||  event.target.id == 'cross_menu') {
		menu.style.display = ''
	}
}




//main page


//
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


var setAnimals;
var setCurrent = 0;
var back = true;

function random(data) {
	// Returns a random integer from 0 to 10:
	let num;
	let poped;
	let list = [[], [], []];
	for (let i = 0; i<3; ++i) {
		for (let j = 0; j<7; ++j) {
			num = Math.floor(Math.random() * 15);
			console.log(list)
			list[i].push(data[num]);
			if (list[i].indexOf(data[num]) != j) {
				j=j-1;
				list[i].pop()
			}
		}
	}
	setAnimals = list;
	placeAnimals();
}

fetch('./animals.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            random(data)
        });


function placeAnimals() {
	if (setCurrent<0) {
		setCurrent = setAnimals.length-1;
	}
	if (setCurrent>=setAnimals.length) {
		setCurrent=0;
	}

	let animalPhoto = document.getElementsByClassName('animal_photo');
	let animalFood = document.getElementsByClassName('icon');
	let animalName = document.getElementsByClassName('btn');
	let animalNative = document.getElementsByClassName('small-p');

	if (back) {
		for (let i = 0; i<animalPhoto; i+2) {
			back = false;
			animalPhoto[i].src = setCurrent[i/2].imgLink
			animalFood[i].classList[1] = setCurrent[i/2].icon
			animalFood[i].src = `${setCurrent[i/2].icon}.png`
			animalName[i].innerHTML = setCurrent[i/2].name
			animalNative[i].innerHTML = setCurrent[i/2].small_p
		}
	}
	else {
		for (let i = 1; i<animalPhoto; i+2) {
			back = true;
			animalPhoto[i].src = setCurrent[(i-1)/2].imgLink
			animalFood[i].classList[1] = setCurrent[(i-1)/2].icon
			animalFood[i].src = `${setCurrent[(i-1)/2].icon}.png`
			animalName[i].innerHTML = setCurrent[(i-1)/2].name
			animalNative[i].innerHTML = setCurrent[(i-1)/2].small_p
		}
	}
}




async function rotate(dir) {
	const arr = document.querySelectorAll('.arrow');
	arr[0].setAttribute('onclick', '')
	arr[1].setAttribute('onclick', '')
	const card = document.querySelectorAll('.grid-item-border');
	const gridItem = document.querySelectorAll('.grid-item-border')
	if (card[0].classList[1] != 'rotateR') {

		if (dir == "left") {
			setCurrent -= 1;
			placeAnimals()

			for (let i = card.length-1; i>=0; --i) {
			card[i].classList.add('rotateR')
			card[i].classList.remove('rotateL')
			await delay(100)
		}
	}
		else {
			setCurrent+=1;
			placeAnimals();

			for (let i = 0; i<card.length; ++i) {
			card[i].classList.add('rotateR')
			card[i].classList.remove('rotateL')
			await delay(100)
		}
		
	}
		//gridItem[i].style.background = 'none';
	}
	else {
		//for (let i = 0; i<card.length; ++i) {

	if (dir == "left") {
			setCurrent-=1;
			placeAnimals();

			for (let i = card.length-1; i>=0; --i) {
			card[i].classList.add('rotateL')
			card[i].classList.remove('rotateR')
			await delay(100)
		}
	}
		else {
			setCurrent+=1;
			placeAnimals();

			for (let i = 0; i<card.length; ++i) {
			card[i].classList.add('rotateL')
			card[i].classList.remove('rotateR')
			await delay(100)
		}
	}
}
	
	await delay(2000)
	arr[0].setAttribute('onclick', 'rotate("left")')
	arr[1].setAttribute('onclick', 'rotate("right")')
	//await delay(3000);
	//for (let i = 0; i<card.length; ++i) {
	//	card[i].classList.remove('rotate')
		//gridItem[i].style.background = 'linear-gradient(to bottom right, #FA6F32, #FE9013)';
	//}
}
























