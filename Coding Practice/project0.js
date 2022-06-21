/*
function downwardBlockDiagonal(n) { 
    var line1 = "+-+" ; 
    var line2 = "| |" ;
    var line3 = "+-+-+" ;
    var space = "" ; 
    for( var i = 1; i <= n; i++ ) {
        if( i == n ) {
            line3 = line1; 
        }
        if( i == 1 ) {
            console.log(line1);
            console.log(line2);
            console.log(line3);
        }
        else( n < 999 ) ;
            space += "  ";
            console.log( space + line2 );
            console.log( space + line3 );
        } 
    }
downwardBlockDiagonal(1);
*/



function downwardBlockDiagonal(n) {
    var line1 = "+-+" ; 
    var line2 = "| |" ;
    var line3 = "+-+-+" ;
    var space = "" ; 
    for( var i = 1; i <= n; i++) {
        if( i == 1 ) {
            console.log( line1 );
            console.log( line2 );
            if ( i == n ) {
                console.log( line1 );
            }
            else{
                console.log( line3 );
            }
        }
        else{
            space += "  ";
            console.log( space + line2 );
            if ( i == n ) {
                console.log( space + line1 );
            }
            else{
                console.log( space + line3 );
            }
        }
    }
}