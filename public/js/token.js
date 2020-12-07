function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

const inputToken = document.getElementById('token');
inputToken.value = getCookie('token');

/*const form = document.forms.updatePartnerForm;

document.getElementById("updatePartnerForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    let data = new FormData(document.getElementById("updatePartnerForm"));
    const token = getCookie("token");
    const partnerId = window.location.href.split('/')[4];
    let option = { headers: {
        Authorization: "Bearer " + token,
},}
    //data.append("header", JSON.stringify(option))
 
    let url = `http://localhost:3000/api/partner/${partnerId}`;
    console.log([...data])
    await fetch(url, {
        method: "PUT",
        body: data
    });
});*/
