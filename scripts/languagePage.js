/*Container to put all elements in.*/
const app = document.getElementById( "App" );
/*Three parts (sections) the screen will be divided.*/
const header = document.createElement( "header" );
const main = document.createElement( "main" );
const footer = document.createElement( "footer" );
    /*Header section*/
        /*Title*/
const headerTitle = document.createElement( "h1" );
header.appendChild( headerTitle );
headerTitle.innerHTML = "Select a language";
    /*Main section*/
        /*Navigation*/
const mainNav = document.createElement( "ul" );
const links = [];
const namesOfLinks = [
    "English",
    "Russian",
    "Latvian",
    "Numbers",
    "go back"
];
const targetsOfLinks = [
    "keyboard.html",
    "keyboard.html",
    "keyboard.html",
    "keyboard.html",
    "index.html"
];
fillNavigation( namesOfLinks, targetsOfLinks );
function fillNavigation( namesOfLinks, targetsOfLinks ) {
    const numberOfExistingLinks = mainNav.querySelectorAll( "li" ).length;
    namesOfLinks.forEach(
        ( n, i )  => {
            if ( i+1 > numberOfExistingLinks ) {
                links[ i ] = document.createElement( "li" );
                mainNav.appendChild( links[ i ] );
            };
            links[ i ].innerHTML = `<a href=${ targetsOfLinks[ i ] } onclick='setLanguage( "${ namesOfLinks[ i ] }" )'> ${ namesOfLinks[ i ] }</a>`;
        }
    );
};
function setLanguage( n ) {
    localStorage.setItem('gundarsTypingKeyboardLanguage', n );
};
main.appendChild( mainNav );
    /*Footer section*/
/*Put all in one container*/
app.appendChild( header );
app.appendChild( main );
app.appendChild( footer );
