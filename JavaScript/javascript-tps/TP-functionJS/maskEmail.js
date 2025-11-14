const maskEmail = (email) => {
  let atIndex = email.indexOf('@');
  if (atIndex !== -1) {
    let username = email.slice(0, atIndex);
    let admin = email.slice(atIndex);
    let masked = username.charAt(0) + '*'.repeat(username.length -2) + username.charAt(username.length - 1);
    return masked + admin;
  }
}


let email = "abdel@gmail.com";
console.log(maskEmail(email))


