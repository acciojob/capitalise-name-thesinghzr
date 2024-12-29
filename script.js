//your JS code here. If required.
const input = document.querySelector("#fname")
input.addEventListener("mouseleave",(e)=>{
	let a = input.value
	e.target.value = a.toUpperCase()
	// console.log(e.target.value)
})