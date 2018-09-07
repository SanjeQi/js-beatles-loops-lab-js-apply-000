
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

 function theBeatlesPlay(musicians, instruments) {
   let band = [];
   for(let i = 0; i < musicians.length; i++){
     let playsWhat = musicians[i] + ' plays ' + instruments[i];
     band.push(playsWhat);
   }
   return band;
 }
 
 
 