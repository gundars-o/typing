let languageOfKeyboard = localStorage.getItem( 'gundarsTypingKeyboardLanguage' );
let level = 1;
let correctTimes = 0;
let allLevelsOfOneLanguage;
let setOfAllowedSymbols;
let countRightInThisLevel = 0;
let countWrongInThisLevel = 0;
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
getAllLevelsOfChosenLanguage();
getTheSetOfAllowedSymbols();
let textToWrite = newTextToWrite();
const textArea = document.createElement( "textarea" );
textArea.setAttribute( "autofocus", true );
mainNav.appendChild( textArea );
textArea.addEventListener(
    "input", ( event ) => {
        if ( textToWrite === event.target.value ) {
            correctTimes++;
            if ( correctTimes === 3 ) {
                countRightInThisLevel = textToWrite.length * correctTimes;
                correctTimes = 0;
                const mistakesPercentageInThisLevel = countWrongInThisLevel / countRightInThisLevel * 100;
                if ( level < allLevelsOfOneLanguage.length && mistakesPercentageInThisLevel <= 1 ) {
                    level++;
                };
                if ( level > 1 && mistakesPercentageInThisLevel > 1 ) {
                    level--;
                };
                getTheSetOfAllowedSymbols();
                footerLevel.innerHTML = `Level ${ level }${ level === allLevelsOfOneLanguage.length ? " ( max )" : "" }`;
                countRightInThisLevel = 0;
                countWrongInThisLevel = 0;
            };
            textToWrite = newTextToWrite();
            event.target.value = ""
            textArea.innerText = "";
        };
        const help = textToWriteFormated( textToWrite, event.target.value );
        textToWriteArea.innerHTML = help;
    }
);
textArea.innerText = "";
textToWriteArea.innerHTML = textToWriteFormated( textToWrite, "" );
main.appendChild( mainNav );
/*Footer section*/
const footerLevel = document.createElement( "p" );
footer.appendChild( footerLevel );
footerLevel.setAttribute( "class", "level" );
footerLevel.innerHTML = `Level ${ level }`;
/*Put all in one container*/
app.appendChild( header );
app.appendChild( main );
app.appendChild( footer );
function putCharacterInStringAtPosition( character, string, position ) {
    return string.substring( 0, position ) +
        character +
        string.substring( position + 1, string.length );
};
function randomOrderOfSymbols() {
    let randomSetOfAllowedSymbols = setOfAllowedSymbols;
    let symbolsLeft = randomSetOfAllowedSymbols.length - 1;
    let position;
    let temporarySymbol;
    while ( symbolsLeft ) {
        position = Math.floor( Math.random() * ( symbolsLeft + 1 ) );
        temporarySymbol = randomSetOfAllowedSymbols[ symbolsLeft ];
        randomSetOfAllowedSymbols = putCharacterInStringAtPosition (
            randomSetOfAllowedSymbols.charAt( position ),
            randomSetOfAllowedSymbols,
            symbolsLeft
        );
        randomSetOfAllowedSymbols = putCharacterInStringAtPosition (
            temporarySymbol,
            randomSetOfAllowedSymbols,
            position
        );
        symbolsLeft--;
    };
    return randomSetOfAllowedSymbols;
};
function getTheSetOfAllowedSymbols() {
    setOfAllowedSymbols = "";
    for ( i = 1; i <= level; i++ ) {
        setOfAllowedSymbols += allLevelsOfOneLanguage[ i-1 ];
    };
};
function getAllLevelsOfChosenLanguage() {
    switch( languageOfKeyboard ) {
        case "Latvian":
            allLevelsOfOneLanguage = dataLatvian;
            break;
        case "English":
            allLevelsOfOneLanguage = dataEnglish;
            break;
        case "Russian":
            allLevelsOfOneLanguage = dataRussian;
            break;
        default:
            console.log( "Language not available" );
    };
    console.log( allLevelsOfOneLanguage );
};
function textToWriteFormated( t, ta ) {
    let h = "";
    if ( t.length > 0 ) {
        for ( i = 0; i < t.length; i++ ) {
            let spanClassName = "";
            if ( ta && i < ta.length ) {
                if ( t[ i ] === ta[ i ] ) {
                    spanClassName = ' class="green"';
                } else {
                    spanClassName = ' class="red"';
                    countWrongInThisLevel++;
                };
            };
            h += `<span${ spanClassName }>${ t[ i ] }</span>\n`;
        };
    };
    return h;
};
function newTextToWrite() {
    return randomOrderOfSymbols();
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
