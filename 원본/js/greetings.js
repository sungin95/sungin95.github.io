const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "uesrname";

function onLoginSubmit(event){//로그인을 한다는건  
  event.preventDefault();//기존 순서 멈추고
  loginForm.classList.add(HIDDEN_CLASSNAME);//기존 펌 숨기고
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);//로컬에 유저네임 저장
  paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(){
  const uesrname = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello  ${uesrname}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);//보여 준다.
  loginForm.addEventListener("submit", onLoginSubmit);//로그인 할 준비
} else {
  paintGreetings();
  
}