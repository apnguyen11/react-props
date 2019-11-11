// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    return (
        <div className="d-flex flex-column align-items-center">
            {
                nameTags.map((e, index) => {
                    return <div class="nametag mx-auto w-50 text-center border m-1">
                                <div class="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
                                <div class="name h4 p-5">e</div>
                    key={index}</div>
                })
            }
        </div>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = null;  