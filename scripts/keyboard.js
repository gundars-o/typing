let languageOfKeyboard = localStorage.getItem( 'gundarsTypingKeyboardLanguage' );
let level = 1;
console.log( `languageOfKeyboard = ${ languageOfKeyboard }`);
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
headerTitle.innerHTML = `Keyboard Exersise for ${ languageOfKeyboard } language`
// headerTitle.innerHTML = `Level ${ level }`;
    /*Main section*/
        /*Navigation*/
const mainNav = document.createElement( "ul" );
const links = [];
const namesOfLinks = [
    "go back"
];
const targetsOfLinks = [
    "language.html"
];
fillNavigation( namesOfLinks, targetsOfLinks );
function fillNavigation( namesOfLinks, targetsOfLinks ) {
    const numberOfExistingLinks = mainNav.querySelectorAll( "li" ).length;
    namesOfLinks.forEach(
        ( n, i )  => {
            if ( i+1 > numberOfExistingLinks ) {
                console.log( "if" );
                links[ i ] = document.createElement( "li" );
                mainNav.appendChild( links[ i ] );
            };
            console.log( i );
            links[ i ].innerHTML = `<a href=${ targetsOfLinks[ i ] }>${ namesOfLinks[ i ] }</a>`;
        }
    );
};
main.appendChild( mainNav );
    /*Footer section*/
/*Put all in one container*/
app.appendChild( header );
app.appendChild( main );
app.appendChild( footer );
