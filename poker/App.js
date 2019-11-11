const Card = ({cardz})=>{
    // let { card} = props;
    console.log(cardz, "*********")
    return (
            <img style={{ width: 100 }} src={`cards/${cardz.value}${cardz.suit}.png`} />
    );
}





// Render the cards using React!
const App = props => {
//   return (<Card cards={props}/>)
let { cards } = props;
// console.log(cards, '~~~~~~~~')
return (
    
    <React.Fragment>
        {cards.map((cardObject, index)=>  (
            <Card cardz={cardObject} index={index}/>
           
            )
        )}
    </React.Fragment>
)
};


// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
// const Card = null;  