// document.getElementById('signup-btn').addEventListener('submit', signup);
// const form = document.querySelector('#form');
// form.addEventListener('submit', (e) =>{signup()});
function signup()
{
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let phone = document.getElementById('phone').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        console.log(user);

        
        return db.collection('users').doc(userCredential.user.uid).set({
            username:username,
            phone: phone,
            email: email,
            password: password,
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }).then(()=>{
            var url = "./login.html";
            window.location.href = url;
        });
    }).catch(error =>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}
