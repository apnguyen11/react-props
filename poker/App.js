const CardUI = ({cardz})=>{
    console.log(cardz, "*********")
    return (
            <img style={{ width: 100 }} src={`cards/${cardz.value}${cardz.suit}.png`} />
    );
}





// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    // console.log(cards, '~~~~~~~~')
    return (
        <React.Fragment>
            {cards.map((cardObject, index)=>  (
                <CardUI cardz={cardObject} key={index}/>
                )
            )}
        </React.Fragment>
    )
};


// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
// const Card = null;  