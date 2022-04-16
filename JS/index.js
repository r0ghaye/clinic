const $ = query => document.querySelector(query);
const usernameInput = $(".specifications__input");
const userLastInput = $(".last-input");
const nameMsg = $(".name-msg");
const lastNamemsg = $(".lastname-msg");
const contactInput = $(".contact__input");
const emailMsg = $(".email-msg");
const subJectmsg = $(".subj-msg");
const subjectContact = $(".subject-msg");
const inquiryInput = $(".inquiry__input");
const inquiryMsg = $(".inquriy-msg");
const buttonInput = $(".specifications__btn");
const singBtn = $(".sing-msg");
const form = $(".contact__form");

buttonInput.addEventListener("click", singIn);
function singIn(event) {
  event.preventDefault();
  nameMsg.innerText = "";
  lastNamemsg.innerText = "";
  emailMsg.innerText = "";
  const usernameValue = usernameInput.value;
  console.log(usernameValue);
  const userLastValue = userLastInput.value;
  const contactValue = contactInput.value;
  const subjectCont = subjectContact.value;
  const inquiryValue = inquiryInput.value;

  let ifsendData = true;

  if (usernameValue.length === 0) {
    nameMsg.innerText = "Please enter your name";
    ifsendData = false;
  } else {
    nameMsg.innerText = null;
  }

  if (userLastValue.length === 0) {
    lastNamemsg.innerText = "Please enter your Lastname";
    ifsendData = false;
  } else {
    lastNamemsg.innerText = null;
  }

  if (
    contactValue.length === 0 ||
    contactValue.indexOf("@") === -1 ||
    contactValue.indexOf(".") === -1
  ) {
    emailMsg.innerText = "Please enter a valid Email";
    ifsendData = false;
  }

  if (subjectCont.length === 0) {
    subJectmsg.innerText = "Please enter your message";
    ifsendData = false;
  } else {
    subJectmsg.innerText = null;
  }

  if (inquiryValue.length === 0) {
    inquiryMsg.innerText = "Please enter your inquiry message";
    ifsendData = false;
  } else if (inquiryValue.length <= 10) {
    inquiryMsg.innerText = "your message is too short";
    ifsendData = false;
  } else {
    inquiryMsg.innerText = null;
  }

  if (ifsendData) {
    const body = JSON.stringify({
      username: usernameValue,
      lastname: userLastValue,
      email: contactValue,
      message: subjectCont,
      inquirymessage: inquiryValue,
    });

    const headers = {
      "Content-Type": "application/json",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        singBtn.innerText = "your message sent";
      }
    });
  }
}
