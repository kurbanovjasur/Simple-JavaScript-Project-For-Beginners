 //header
    const headerMessage = ()=> {
       console.log('Tip Calculator')
    }

//service quality
const serviceQuality = (billEntered, userOption ) => {
    const userInput = Number(userOption);
    switch(userInput){
      case 1:
        return (billEntered * 0.3)
        break;
      case 2:
       return(billEntered * 0.2)
        break;
      case 3:
       return(billEntered * 0.1)
        break;
      case 4:
        return(billEntered * 0.05)
        break;
    }
}

const tipCalulcator = () => {
  headerMessage()
  const enterBill = prompt('Please tell me bill amount: $ ');
  console.log(`Bill amount was $ ${enterBill}`)
   console.log(`How was your service ? Please enter number of the options`)
  const enterOption = prompt(`  1) Outstanding (30%) 
  2) Good (20%)
  3) It was ok (10%)
  4) Terrible (5%)`)

  const result = serviceQuality(enterBill, enterOption);
  console.log(`Tip amount ${result}`)
  const total = Number(enterBill) + result;
  console.log(`Overall paycheck ${total}`)
}

tipCalulcator();
