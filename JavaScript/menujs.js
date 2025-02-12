const menuItems = [
    {
        displayName: "Home",
        link: "home.html"
    },
    {
        displayName: "About",
        link: "about.html"
    },
    {
        displayName: "Services",
        link: "services.html"
    },
    {
        displayName: "Contact",
        link: "contact.html"
    },
]

const menulist = document.getElementById("menu");


for (let i = 0; i < menuItems.length; i++) {
    menulist.innerHTML += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].displayName + '</a></li>';
}