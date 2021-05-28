//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here


//prgression1 code
var array=[];
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{

  array=[managerName,managerAge,currentTeam,trophiesWon]
  return array
 
  
}




// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];


//write your function here
function createFormation(formation){
  if (formation.length==0){
    return null;
  }
  var play={
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]
  }
  return play;
}





// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

var specific_debut_year=[]
function filterByDebut(year){
  var data =players.filter(player=>player.debut==year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
var argPosition
var res=[]
function filterByPosition(argPosition)
{
   res=players.filter(players=>players.position==argPosition)

   return res
}

//Progression 5 - Filter players that have won ______ award

var filteredAwardee=[]
function filterByAward(awardName)
{
  var sort_byAward=[]
  for(let i=0;i<players.length;i++)
  {
    for(let j=0;j<players[i].awards.length;j++)
    if(players[i].awards[j].name==awardName)
    sort_byAward.push(players[i])
  }
  return sort_byAward
}





//Progression 6 - Filter players that won ______ award ____ times


function filterByAwardxTimes(awardName,noofTimes){
  var player_awards = [];
  var count =[];
  var times=0;
  for(var i=0;i < players.length;i++)
  {
    for( var j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      {
    times++;
      }
    }
    count[i]=times;
    times=0;
  }
  for( i=0;i < players.length;i++)
  {
      if(count[i]==noofTimes)
      {
         player_awards.push(players[i]);
      }
  }
  return player_awards;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
{
  
   var sorted_players=[];
   for( let i=0;i<players.length;i++)
   {
     for( let j=0;j<players[i].awards.length;j++)
        {
               if((players[i].awards[j].name==awardName) && (players[i].country==country))
               sorted_players.push(players[i])
        }
      

   }
   return sorted_players

}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
 function filterByNoOfAwardsxTeamxAge(NoOfAwards,Team,Age)
{
   var count=0;
    var playerslist = [];
   for(let i=0;i<players.length;i++)
   {
        if((players[i].awards.length >= NoOfAwards ) && (players[i].team==Team) && (players[i].age<Age) )
            {
               count++;
              playerslist.push(players[i]);
            }
  
  }
  if(count==0)
  return [];
   else
    return playerslist;
  
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
