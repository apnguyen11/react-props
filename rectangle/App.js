// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;
    console.log(props)
    return (
        <div style={{
            width: rectangle.width,
            height: rectangle.height,
            backgroundColor: rectangle.color
        }}></div>
    )
}
