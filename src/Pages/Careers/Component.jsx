
import React from "react";





const Component = React.forwardRef((props,ref) => (


        <div>

            <h1 ref={ref}>Component</h1>

        </div>

))

export default Component;