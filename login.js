function  handleLogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errorMsg=document.getElementById('error');

    const LoginData=[
        {username:"username",password:"password"},
        {username:"cr7",password:"pass123"},
    ]

const isValid=LoginData.some((user)=>user.username===username && user.password===password);
if(isValid)
{
    window.location.href="flex.html"
    errorMsg.innerText="Login Successful"
}
else{
    errorMsg.innerText="Invalid credentials"
}
}
