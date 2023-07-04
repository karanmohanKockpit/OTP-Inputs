const otpInputs = document.querySelectorAll(".otpInputs");

otpInputs.forEach((otp, index1) => {
    otp.addEventListener("keyup", (e) => {
        let currentOtpInput = otp;
        let nextOtpInput = otp.nextElementSibling;
        let prevOtpInput = otp.previousElementSibling;

       if(currentOtpInput.value.length > 1){
        currentOtpInput.value = "";
        return;
       }

       if(nextOtpInput && nextOtpInput.hasAttribute("disabled") && currentOtpInput.value !== ""){
        nextOtpInput.removeAttribute("disabled");
        nextOtpInput.focus();
        return
       }

       if(e.key === "Backspace"){
        otpInputs.forEach((input, index2) => {
            if(index1 <= index2 && prevOtpInput){
                input.setAttribute("disabled", true);
                input.value = ''
                prevOtpInput.focus();
            }
        })
       }
    })
});

window.addEventListener("load", ()=> otpInputs[0].focus());