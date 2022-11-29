function bodyFuncs()
{
  window.onload = navBar();
  window.onload = openMulti();
  window.onload = rollingNews();
  window.onload = ColorChange();
}

function navBar()
{
    document.getElementById("Home").innerHTML = "Home";
    document.getElementById("News").innerHTML = "News";
    document.getElementById("Contact").innerHTML = "Contact";
    document.getElementById("About").innerHTML = "About";
}

function navHomeon()
{
    // setting variables for each category
    const Home = document.getElementById("Home");
    const News = document.getElementById("News");
    const Contact = document.getElementById("Contact");
    const About = document.getElementById("About"); 

    //Trigger the mouseover for each tab
        //Home
    Home.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
        //News
    News.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
        //Contact
    Contact.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
        //About
    About.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
}

function navMouseoff()
{
    // setting variables for each category
    const Home = document.getElementById("Home");
    const News = document.getElementById("News");
    const Contact = document.getElementById("Contact");
    const About = document.getElementById("About");

    //Trigger the mouseover for each tab
        //Home
    Home.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "red";
    })
        //News
    News.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "red";
    })
        //Contact
    Contact.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "red";
    })
        //About
    About.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "red";
    })
}