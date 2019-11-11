// import { realpathSync } from "fs";

// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    return (
    
        <div className="d-flex flex-column align-items-center">
        {
            circles.map(function (circle, index) {
                console.log(circles)
                return <div style={{
                    width: (circle.radius * 2), 
                    height: (circle.radius * 2), 
                    borderRadius: circle.radius, 
                    backgroundColor: circle.color
                }}
                key={index}></div>
            })
        }
    </div>
    )
}

const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component