/*document.getElementById('load-form').addEventListener('submit', function (e) {
    //hide ressult
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateResults, 5000);
    e.preventDefault();
  });*/

// let gName = prompt(`What is your na,me?`)
// let bName = prompt(`What is your na,me?`)

//assign major variables

 let bname = "";
 let gname = "";



 
let percentage = Math.floor(Math.random() * 101);
console.log(percentage);

let btn = document.getElementById('btn');
let loadForm = document.getElementById('load-form');

let highMsg = document.getElementById('high-msg');
let lowMsg = document.getElementById('low-msg');

loadForm.addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('results').style.display = 'none';
  //hide loader
  document.getElementById('loading').style.display = 'block';


  let calculateResults = () => {
    if(percentage > 80) {
      highMsg.style.display = 'block';
      highMsg.style.color = 'green';

      document.getElementById('loading').style.display = 'none';
      document.getElementById('results').style.display = 'block';

      bname = document.getElementById("bname").value;
      gname = document.getElementById("gname").value;
      
      
      highMsg.innerHTML = `Dear  <span id="name1">${bname}</span> and 
      <span id="name2">${gname}</span>,<br/> You have ${percentage}% chance of getting in,
       Lmao you should shoot your shot already 😂❤ `;
    }
    else if(percentage  > 40 && percentage <= 80) {
      lowMsg.style.display = 'block';
      lowMsg.style.color = 'blue';

      document.getElementById('loading').style.display = 'none';
      document.getElementById('results').style.display = 'block';
     

      bname = document.getElementById("bname").value;
      gname = document.getElementById("gname").value;

      lowMsg.innerHTML = `Well <span id="name1">${bname}</span><br/>You have ${percentage}% chance of getting in, Lmao you should try your luck👀👀  <span id="name2">
      ${gname}</span> might fall,`;
      
      // let name1 = document.getElementById('name1');
      // let name2 = document.getElementById('name2');

      // name1.style.color = 'black';
      // name2.style.color = 'black';

   
    }
    else {
      lowMsg.style.display = 'block';
      lowMsg.style.color = 'red';

      document.getElementById('results').style.display = 'block';
      document.getElementById('loading').style.display = 'none';

      bname = document.getElementById("bname").value;
      gname = document.getElementById("gname").value;
     

      lowMsg.innerHTML = `Omoo <span id="name1">${bname}</span> ,<br/>You have ${percentage}% chance of getting in. Just forget Comrade,<span id="name2"> ${gname}</span> is not your kind`;
    }  
  }

  setTimeout(calculateResults, 5000);
  let name1 = document.getElementById('name1');
  let name2 = document.getElementById('name2');

  name1.style.color = 'black';
  name2.style.color = 'black';

  window.reloa
});
// bname = firtName();
// gname = secondName();
// alert(bname); 
// alert(bname, gname);
//Change text contents

// name1.textContent = bName;
// name2.textContent = gName;
// percent.textContent = percentage;

// name1.innerHTML  = bName;
// name2.innerHTML = gName;
// percent.innerHTML = percentage;

  
// alert(percent);

//To display results according to conditions 
 
/*function calculateResults(e) {
  let highMsg = document.getElementById("high-msg");
  let lowMsg = document.getElementById("low-msg");
  let gName = document.getElementById("gname");
  let bName = document.getElementById("bname");
else {
    document.getElementById('results').style.display = 'block';
//     //   //hide loader
  document.getElementById('loading').style.display = 'none';
}  
//     alert(`Dear ${firtName()} and ${secondName()}, You have ${percentage}% chance of getting in,  Just forget Comrade, she's not your kind`)
// }

}*/

// Function to formalize Name
// function firtName(){
// let slicedFirstLetter = bname.slice(0,1);
//  slicedFirstLetter = slicedFirstLetter.toUpperCase();
// let firstLength = bname.length;
// let slicedRest = bname.slice(1, firstLength);
// slicedRest = slicedRest.toLowerCase();
// return slicedFirstLetter + slicedRest;
// }

// function secondName(){
//     let slicedFirstLetterOfSecondName = gname.slice(0,1);
//     slicedFirstLetterOfSecondName = slicedFirstLetterOfSecondName.toUpperCase();
//     let secondLength = gname.length;
//     let slicedSecondRest = gname.slice(1, secondLength);
//     slicedSecondRest = slicedSecondRest.toLowerCase();
//     return slicedFirstLetterOfSecondName + slicedSecondRest;
//     }





















  
  

 
//     const highMsg = document.getElementById('high-msg');
//     const lowMsg = document.getElementById('low-msg');
//     const personName = document.querySelector('.name');
    
//     //  const main = score1 + score2 + score3 + score4 + score5;
//     //  const total = Number(main);
//     personName.textContent = userName;

  
//       if (numb > 40) {
//         highMsg.style.display = 'block';
//         lowMsg.style.display = 'none';
//         highMsg.style.color = 'green';
//       } else {
//         lowMsg.style.display = 'block';
//         highMsg.style.display = 'none';
//         lowMsg.style.color = 'blue';
//       }
  
//     //   // console.log(waecOutput);
//     //   
//     //  else {
//     //   //console.log('please check your number')
//     //   showError('please check your number');
//     // }
  
  
//   //erroe
  
//   function showError(error) {
//     //hide error during error display
//     document.getElementById('results').style.display = 'none';
//     //hide loader
//     document.getElementById('loading').style.display = 'none';
//     // create the error element
//     const errorDiv = document.createElement('div');
  
//     //get element
//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');
//     //add a class
//     errorDiv.className = 'alert alert-danger';
//     //append created element to text node
//     errorDiv.appendChild(document.createTextNode(error));
//     // insert it before header
//     card.insertBefore(errorDiv, heading);
  
//     //clear error timeout
  
//     setTimeout(clearError, 2000);
//   }
  
//   function clearError() {
//     document.querySelector('.alert').remove();
//   }
  