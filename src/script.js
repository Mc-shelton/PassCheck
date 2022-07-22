var passBox = document.getElementById('passBox');
var passErr = document.getElementById('passErr');

passBox.addEventListener('keyup', e => {
  var passData = e.target.value;

  //defining feedback strings

  let string =
    'Warning! Please check if your password has atleast 8 character, has atleast one character,has atleast one lowercase letter, has atleast one uppercase letter and has atleast one number';
  //using regex to meet conditions
  let testPass = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  );
  let err = [];
  if (passData.search(/[a-z]/) < 0) {
    //lowercase
    let string1 = 'Password must have lowercase';
    if (!err.includes(string1)) {
      err.push(string1);
    }
  }
  if (passData.length < 8) {
    //number of digits

    let string1 = 'Password must be atleast 8 characters';
    if (!err.includes(string1)) {
      err.push(string1);
    }
  }
  if (passData.search(/[A-Z]/) < 0) {
    // uppercase

    let string1 = 'Password must have atleast one uppercase';
    if (!err.includes(string1)) {
      err.push(string1);
    }
  }

  // if (passData.search(/[a-z]/)<0) {
  //   // number
  // }

  if (passData.search(/[0-9]/) < 0) {
    // number

    let string1 = 'Password must have atleast one digit';
    if (!err.includes(string1)) {
      err.push(string1);
    }
  }
  if (passData.search(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
    // character

    let string1 = 'Password must have atleast one special Character';
    if (!err.includes(string1)) {
      err.push(string1);
    }
  }

      passErr.innerHTML = '';
    err.forEach((val, ind) => {
      let par = document.createElement('p')
      let node = document.createTextNode(val)
      par.appendChild(node)

      passErr.appendChild(par)
    });
});


const seePass = ()=>{
 if(passBox.type=='password'){
passBox.type='text'
 }else{
   passBox.type='password'
 }

}