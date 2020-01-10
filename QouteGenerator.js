//startGenerate
const startGenerate = () =>{
  console.log('This is random quote generator');
  const startInput = prompt('Please enter \'start\' to generate quotes');
  if(startInput === "start"){
    console.log(listOfQuotes())
  }else{
    console.log('Incorrect entry');
  }
}

//Generate Quotes
const listOfQuotes = () =>{
  //random number from 0-2
  const random = Math.floor(Math.random()*2);

  switch(random){
    case 0:
      return 'When you’re playing small and want to break out of your current limitations…'
      break;
    case 1:
      return 'When you’re feeling blue or things are a little flat…';
      break;
    case 2:
      return 'When you want to make your life feel better and your thoughts more positive…';
      break;
  }
};

startGenerate();
