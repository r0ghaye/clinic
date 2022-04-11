const usernameInput = document.querySelector(".specifications__input");
const userLastInput = document.querySelector(".last-input");
const nameMsg = document.querySelector(".name-msg");
const lastNamemsg = document.querySelector(".lastname-msg");
const contactInput = document.querySelector(".contact__input");
const emailMsg = document.querySelector(".email-msg")
const subJectmsg = document.querySelector(".subj-msg");
const  subjectContact = document.querySelector(".subject-msg")
const inquiryInput = document.querySelector(".inquiry__input");
const inquiryMsg = document.querySelector(".inquriy-msg");
const buttonInput = document.querySelector(".specifications__btn");
const singBtn = document.querySelector(".sing-msg");



buttonInput.addEventListener("click", singIn);
function singIn(event) {
    event.preventDefault();
    //nameMsg.innerText = "";
    lastNamemsg.innerText = "";
    emailMsg .innerText = "";
    //const usernameValue = usernameInput.value;
    const userLastValue = userLastInput.value;
    const contactValue  = contactInput.value;
    const subjectCont= subjectContact.value;
    const inquiryValue = inquiryInput.value;

    let ifsendData = true;


    //if (usernameValue.length === 0) {
        //nameMsg.innerText = "Please enter your name";
        //ifsendData = false;
    //}
    
    if (userLastValue.length === 0) {
        lastNamemsg.innerText = "Please enter your name and your Lastname";
        ifsendData = false;
    }

    if (contactValue.length === 0 || contactValue.indexOf("@") === -1 ||contactValue.indexOf(".") === -1 ) {
        emailMsg .innerText = "Please enter a valid Email";
        ifsendData = false;
    }

    if (subjectCont.length === 0) {
        subJectmsg.innerText = "Please enter your message";
        ifsendData = false;
    }

    if (inquiryValue.length === 0) {
        inquiryMsg.innerText = "Please enter your inquiry message";
        ifsendData = false;
    } else if (inquiryValue.length <= 10) {
        inquiryMsg.innerText = "your message is too short";
         ifsendData = false;
    }


    
    if (ifsendData) {
        const body = JSON.stringify({
            //username: usernameValue,
            lastname: userLastValue,
            email: contactValue,
            message: subjectCont,
            inquirymessage: inquiryValue,

        })
    
   
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })

        .then(response => {
           if(response.ok) {
            singBtn.innerText = "your singed in successfully";
           }
       })
    
    }
}

