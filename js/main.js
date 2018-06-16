//fooConstructor
/*var a = 2;
var b = 6;
function fooOuter(){
	var a =5;
	var b = 8;
	var foo = new Function('','console.log(a)');
	foo();
}

fooOuter();*/

//hoisting
/*var a = 2;*/

//cunstom constructors....
//js strings

/*\'	single quote
	\"	double quote
	\\	backslash*/

/*var str = 'Hello \'world\'\b \rne\vw ';
console.log('\b' + str)
document.write(str)*/
/*\b	Backspace
	\r	Carriage Return
	\f	Form Feed
	\t	Horizontal Tabulator
	\v	Vertical Tabulator*/

/*var x = "It's alright";
var y = "We are the so-called \"Vikings\" from the north."

document.write(y)
*/

/*var x = "John";
var y = new String("John");
console.log(y);
console.log(x);
console.log(x == y)// true; === - false;
console.log(typeof(y));
console.log(typeof(x));
document.write(x.length + "<br>");
document.write(y.length);
*/

// methods and prop

//length
/*var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

document.write(sln);
*/

//indexOf

/*var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

document.write(pos)
*/

//lastIndexOf;

/*var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.write(pos)
*/

//search

/*var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

document.write(pos);
*/

//slice ()

/*var str = "Apple, Banana, Kiwi";
var res = str.slice(7, str.length);
document.write(str + '<br>');
document.write(res);
*/

/*var str = "Apple, Banana, Kiwi";
var res = str.slice(-12,-6);
*/

/*var res = str.slice(7);*/

//substring

/*var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13);
document.write(res);
*/

//substr

/*var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
document.write(res);
*/

//replace

/*var str = "Please visit Microsoft Microsoft Microsoft Microsoft!";
var n = str.replace("Microsoft","BrainAcademy");
document.write(n)


*/

//touppercase tolowercase

/*var text1 = "Hello World!";       
var text2 = text1.toUpperCase();  
document.write(text2)



var text1 = "Hello World!";       
var text2 = text1.toLowerCase();  
document.write(text2)
*/

//concat

/*var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ",text2);


var text = "Hello".toLowerCase() + " " + "World!".to;
var text = "Hello".concat(" ","World!");
console.log(typeof text);



var str = "a,b,c,d,e,f";
var arr = str.split(",");
document.write(arr[0])
console.log(arr);
*/
//Number.INFINITY, Number.NEGATIVE_INFINITY

/*var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>"
}

document.write(text);

*/

// Date constructor

/*var myDate = new Date();

document.write('Сегодняшняя дата ' + myDate + "<br>");


// Date Methods

var fullYear = myDate.getFullYear();
document.write('Year - ' + fullYear + '<br>');


var month = myDate.getMonth();
document.write('Month -' + (month+1) + '<br>');

var date = myDate.getDate();
document.write('Date -' + date + '<br>');


var day = myDate.getDay();
document.write('Day - ' + day + '<br>');


var time = myDate.getTime();
document.write('Time' + time + '<br>');


var hours = myDate.getHours();
document.write('Hours -' + hours + '<br>');


var minutes = myDate.getMinutes();
document.write('Minutes' + minutes + '<br>');


var seconds = myDate.getSeconds();
document.write('Seconds' + seconds + '<br>');


var milliseconds = myDate.getMilliseconds();
document.write('Miliseconds' + milliseconds + '<br>');*/

function myFunction() {
	var message, x;
	message = document.getElementById('message');
	message.innerHTML = '';
	x = document.getElementById('demo').value;
	try {
		if (x == '') throw 'empty';
		if (isNaN(x)) throw 'not a number';
		x = Number(x);
		if (x < 5) throw 'too low';
		if (x > 10) throw 'too high';
	} catch (err) {
		message.innerHTML = 'Input is ' + err;
	}
}

demo.onkeyup = myFunction;

function myFunction2(x) {
	var x;
	try {
		if (x == '') throw 'empty';
		if (isNaN(x)) throw 'not a number';
		x = Number(x);
		if (x < 5) throw 'too low';
		if (x > 10) throw 'too high';
	} catch (err) {
		console.error('Input is ' + err);
	}
}
myFunction2(1);


