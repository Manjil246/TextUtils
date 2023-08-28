import React from 'react'

export default function About(props) {

    // const [myStyle,setStyle] = useState( {
    //         backgroundColor : "black",
    //         color : "white"
    // })
    // const [text, setText] = useState("Light Mode")

    // const toggleStyle = () => {
    //     if(myStyle.backgroundColor === "black"){
    //         setStyle( {
    //             backgroundColor : "white",
    //             color : "black",
    //         })
    //         setText("Dark Mode");
    //     }
    //     else{
    //         setStyle( {
    //             backgroundColor : "black",
    //             border:"1px solid white",
    //             color : "white"
    //         })
    //         setText("Light Mode");
    //     }
    // }

    return (

        <>
            <div class="accordion container" id="accordionExample">
                <div class="accordion-item" >
                    <h2 class="accordion-header" >
                        <button class="accordion-button" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"  aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-dark" onClick={toggleStyle} style = {myStyle}> {text}</button> */}
            </div>
            
        </>
    )
}
