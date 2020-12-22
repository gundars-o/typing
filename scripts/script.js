/*Container to put all elements in.*/
const app = document.getElementById( "App" );
/*Three parts (sections) the screen will be divided.*/
const head = document.createElement( "header" );
const main = document.createElement( "main" );
const foot = document.createElement( "footer" );
    /*Header section*/
const headHeader = document.createElement( "div" );
        /*Title*/
const headHeaderTitle = document.createElement( "h1" );
const headHeaderTitleTextNode = document.createTextNode( "Typing Excercises" );
headHeaderTitle.appendChild( headHeaderTitleTextNode );
head.appendChild( headHeaderTitle );
        /*Navigation*/
const headNav = document.createElement( "ul" );
const headNavLinkToExercise1 = document.createElement( "li" );
const headNavLinkToExercise1TextNode = document.createTextNode( "Learn The Layout" );
headNavLinkToExercise1.appendChild( headNavLinkToExercise1TextNode );
headNav.appendChild( headNavLinkToExercise1 );
const headNavLinkToExercise2 = document.createElement( "li" );
const headNavLinkToExercise2TextNode = document.createTextNode( "Learn Sequences" );
headNavLinkToExercise2.appendChild( headNavLinkToExercise2TextNode );
headNav.appendChild( headNavLinkToExercise2 );
head.appendChild( headNav );
/*Main section*/
/*Footer section*/
/*Put all in one container*/
app.appendChild( head );
