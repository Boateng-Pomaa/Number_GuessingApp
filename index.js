
   function random_game(range){
   //Get username and save in a cookie 
    let username = prompt('Please enter your username: ');
      
  //Generate random number and takes user's guess
     let isTrue = true ;
     let x = 1;
     let game_range = range ;
     let points = 0 ;

            
       while(isTrue){
      let random_number = Math.floor((Math.random() * game_range) +1) ;
       console.log("Welcome to stage " + x);
      let text = "Hi there, please enter a number between 0 and " +game_range ;
      let userGuess = prompt(text);
      userGuess = Number(userGuess) ; 
      if(random_number == userGuess){
       x = x + 1;
      game_range = range + 1 ;
     points = points + 1 ;  
     console.log("Success," + points + "points "+ ' awarded.'  + " Proceed to stage"+  x );
  }                 
   else{  
     console.log("Sorry correct number is: " + random_number + " Please try again later");
                    isTrue = false ;
                }
            }
          }

          random_game(2)
  
 
