const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const labels = document.querySelectorAll('label');

const form = document.querySelector('form');
const body = document.querySelector('body');
const formHeader = document.querySelector('.form-header');
const btn = document.querySelector('button');
const doc = document.documentElement;

console.log(body.style.backgroundColor);

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);
btn.addEventListener('click', copyToClipboard);

function updateColor() {
	let color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
	/* body.style.backgroundColor = color; */
	doc.style.setProperty('--r', red.value);
	doc.style.setProperty('--g', green.value);
	doc.style.setProperty('--b', blue.value);
	formHeader.innerText = color;
}

function copyToClipboard() {
	navigator.clipboard
		.writeText(formHeader.innerText)
		.then(() => {
			console.log('Copied!');
		})
		.catch((err) => {
			console.log('error', err);
		});
}
