
function addUser()
{
    user_name = document.getElementById("username").value;

    localStorage.setItem("user_name", user_name);

    window.location = "lets_chat_page.html";
}
    

    
