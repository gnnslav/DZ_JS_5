
// Task 1

var task1 = document.getElementById('task1');
var button1 = document.getElementById('button1');

button1.onclick = function(){
		var text = document.getElementById('textLength').value;
		task1.innerHTML = 'Длинна строки - ' + text.length;
}


// Task 2

var task2 = document.getElementById('task2');

var pictures = [
"img/1.jpg",
"img/2.jpg",
"img/3.jpg",
"img/4.jpg",
"img/5.jpg"
];

pictures.forEach(function(image, i, pictures){
		task2.innerHTML += `<img src =${image}>`;
});


/*var task2 = document.getElementById('task2');

var pictures = [
"img/1.jpg",
"img/2.jpg",
"img/3.jpg",
"img/4.jpg",
"img/5.jpg"
];

pictures.forEach(function(image, i, pictures){
		task2.innerHTML += "<img src =" + image + ">";
});*/

// Task 3

var arr = ['https://', 'http://'];

var button3 = document.getElementById('button3');
button3.onclick = function(){
	var adress = document.getElementById('adress').value;
	var task3 = document.getElementById('task3');
  	arr.forEach(function getAdress(elem){
		if(adress.indexOf(elem) >= 0){
			task3.innerHTML = adress.slice(elem.length);
		} 
	});
}

// Task 4

var arr4 = ['http://www.', 'https://www.', 'https://', 'http://'];

var button4 = document.getElementById('button4');
button4.onclick = function(){
	var site = document.getElementById('site').value;
	var task3 = document.getElementById('task3');
  	arr4.some(function getAdress(el){
		if(site.indexOf(el) >= 0){
			return task4.innerHTML = site.slice(el.length);
			return task4.innerHTML = site;
		} 
	});
}

// Task 5

var task5 = document.getElementById('task5');
var button5 = document.getElementById('button5');

button5.onclick = function(){
	var surname = document.getElementById('surname').value;
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	
	task5.innerHTML = (!surname.trim()) ? 'Введите фамилию' : 
					  (!name.trim()) ? 'Введите имя' : 
					  (password.length < 5) ? "Пароль имеет меньше 5 символов" : 
					  (email.indexOf("@",0)<=0) ? 'Введите email' : "Форма заполнена правильно";
}
/*var task5 = document.getElementById('task5');
var button5 = document.getElementById('button5');

button5.onclick = function(){
	
	var surname = document.getElementById('surname').value;
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	
	if (!surname.trim()){
		task5.innerHTML = 'Введите фамилию';
		
	} else if (!name.trim()){
		task5.innerHTML = 'Введите имя';
		
	} else if(password.length < 5){
		task5.innerHTML = "Пароль имеет меньше 5 символов";
		
	} else if(email.indexOf("@",0)<=0){
		task5.innerHTML = 'Введите email';
		
	}	else {
		task5.innerHTML = "Форма заполнена правильно";
		
	}
	
}*/

// Task 6

var task6 = document.getElementById('task6');
var button6 = document.getElementById('button6');

function getSymvol(){
		var text = document.getElementById('text').value;
		task6.innerHTML = `Код символа - ${text.charCodeAt(0)}`;
}
button6.addEventListener('click', getSymvol, false);
/*
var task6 = document.getElementById('task6');
var button6 = document.getElementById('button6');

function getSymvol(){
		var text = document.getElementById('text').value;
		task6.innerHTML = 'Код символа -' + text.charCodeAt(0);
}

button6.addEventListener('click', getSymvol, false);*/