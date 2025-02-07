
const menuItems = [
        {
        displayNavn: "Hjem",
        link: "hjem.html"
    },
    {
        displayNavn: "Om",
        link: "om.html"
    },
    {
        displayNavn: "Ydelser",
        link: "ydelser.html"
    },
    {
        displayNavn: "Kontakt",
        link: "kontakt.html"
    }
];
output=document.getElementById("menuContainer")
for ( i=0; i< menuItems.length;i++) {
    let menuContainer = '<li><a href=kontakthtml>'+ menuItems[i].link + '>'+ menuItems[i].displayNavn + '</a></li>'
    output.innerHTML+=menuContainer
}