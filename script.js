

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/jackass-forever-character-guide.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5", "https://ntvb.tmsimg.com/assets/p17644454_v_h8_ad.jpg?w=1280&h=720","https://m.media-amazon.com/images/I/A1T+lZ6iUZL._SL1500_.jpg"];
	 let action =["https://www.thebatman.com/images/share.jpg", "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg","https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"];
	 let drama =["https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg", "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/joker_key_art.jpg","https://m.media-amazon.com/images/M/MV5BMzhmNGMzMDMtZDM0Yi00MmVmLWExYjAtZDhjZjcxZDM0MzJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
    }
   }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestiongenre=$(".suggestion-genre").val();
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
if( suggestiongenre === "comedy"){
comedy.push(suggestion);
}
    else if( suggestiongenre === "action"){
action.push(suggestion);
}
    else if( suggestiongenre === "drama"){
drama.push(suggestion);
}
    
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	//comedy.push(suggestion);
     console.log(comedy);
    //action.push(suggestion);
    console.log(action);
    //drama.push(suggestion);
    console.log(drama);

    
});