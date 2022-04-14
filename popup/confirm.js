const login = confirm("anda ingin login");

if(login) {
    const name = prompt("what is your name?");
    alert(`hello ${name}`);
} else {
    alert("anda tidak ingin login");
}