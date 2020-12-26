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
const textToWriteArea = document.createElement( "p" );
mainNav.appendChild( textToWriteArea );
textToWriteArea.className += "textToWriteArea";
const textToWrite = newTextToWrite();
const textArea = document.createElement( "textarea" );
// textArea.setAttribute( "onchange", "hello" );
textArea.setAttribute( "autofocus", true );
mainNav.appendChild( textArea );
textArea.addEventListener(
    "input", ( event ) => {
        // textToWriteFormated( textToWrite, event.target.value  );
        console.log( event.target.value ); 
        textToWriteArea.innerHTML = textToWriteFormated( textToWrite, event.target.value );
    }
);
textArea.innerText = "";
textToWriteArea.innerHTML = textToWriteFormated( textToWrite );
main.appendChild( mainNav );
/*Footer section*/
/*Put all in one container*/
app.appendChild( header );
app.appendChild( main );
app.appendChild( footer );
function textToWriteFormated( t, ta ) {
    console.log( ta );
    let h = "";
    if ( t.length > 0 ) {
        for ( i = 0; i < t.length; i++ ) {
            let spanClassName = "";
            if ( ta && i < ta.length ) {
                if ( t[ i ] === ta[ i ] ) {
                    spanClassName = ' class="green"';
                } else {
                    spanClassName = ' class="red"';
                };
            };
            h += `<span${ spanClassName }>${ t[ i ] }</span>\n`;
        };
    };
    console.log( h );
    return h;
};
function newTextToWrite() {
    return "jkl;fdsa";
};
function fillNavigation( namesOfLinks, targetsOfLinks ) {
    const numberOfExistingLinks = mainNav.querySelectorAll( "li" ).length;
    namesOfLinks.forEach(
        ( n, i )  => {
            if ( i+1 > numberOfExistingLinks ) {
                links[ i ] = document.createElement( "li" );
                mainNav.appendChild( links[ i ] );
            };
            links[ i ].innerHTML = `<a href=${ targetsOfLinks[ i ] }>${ namesOfLinks[ i ] }</a>`;
        }
    );
};
