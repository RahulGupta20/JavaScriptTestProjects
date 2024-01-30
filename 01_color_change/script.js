// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });




/*

const buttons = document.querySelectorAll(".button");
// console.log(buttons)
const body = document.querySelector("body");

buttons.forEach(function(button) {
    // console.log(button)
    button.addEventListener('click', function(e) {
		// console.log(e)
		console.log(e.target)

		// if(e.target.id === 'grey') {
		// 	body.style.backgroundColor = e.target.id;
		// }
		// if(e.target.id === 'white') {
		// 	body.style.backgroundColor = e.target.id;
		// }
		// if(e.target.id === 'blue') {
		// 	body.style.backgroundColor = e.target.id;
		// }
		// if(e.target.id === 'yellow') {
		// 	body.style.backgroundColor = e.target.id;
		// }
		// if(e.target.id === 'purple') {
		// 	body.style.backgroundColor = e.target.id;
		// }

		// With Switch Case
		// switch (e.target.id) {
		// 	case 'grey':
		// 		body.style.backgroundColor = e.target.id;
		// 		break;
		// 	case 'white':
		// 		body.style.backgroundColor = e.target.id;
		// 		break;
		// 	case 'blue':
		// 		body.style.backgroundColor = e.target.id;
		// 		break;
		// 	case 'yellow':
		// 		body.style.backgroundColor = e.target.id;
		// 		break;
		// 	case 'purple':
		// 		body.style.backgroundColor = e.target.id;
		// 		break;
		
		// 	default:
		// 		break;
		// }
	})
});

*/


/*==========================
2. Updated Code Concept
===========================*/

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const resetBtn = document.querySelector('#reset');

buttons.forEach(function(button) {
	button.addEventListener('click', function(e) {
		console.log(e.target.id)

		body.style.backgroundColor = e.target.id;
	})
});

resetBtn.addEventListener('click', function() {
	body.removeAttribute('style')
})