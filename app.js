let a = "This is sparta";
console.log(a);

let results = {
  tag: "",
  free: true,
  role: false,
  user: "vyenkateshkhamborkar1111",
  email: "vyenkateshkhamborkar1111@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

// let str = ``
// for(items of Object.keys(results)){
//     console.log(items);
//      str = str + `<div>${items}:${results[items]}</div>`;
// }
// console.log(str);
// console.log(results);

// resultCont.innerHTML = str;

// key = "ema_live_iyBsUdUCNLlAXx4MF0Wtpyop3kqixxe1QthGgPuv";
// let URL = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;


let button = document.querySelector("#submitBtn");
console.log(button);

button.addEventListener("click", async(e) => {
    e.preventDefault();
  console.log("Button is Clicked!");
  resultCont.innerHTML = `<img src="loading.svg" alt style ="width: 70px;">`; 
  let key = "ema_live_iyBsUdUCNLlAXx4MF0Wtpyop3kqixxe1QthGgPuv";
  let email = document.getElementById("username").value;
  let URL = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(URL);
  let results = await res.json();
 //   return

  let str = ``
  for (items of Object.keys(results)) {
    // console.log(items);
    str = str + `<div>${items}:${results[items]}</div>`;
  }
  console.log(str);
  console.log(results);

  resultCont.innerHTML = str;
});
