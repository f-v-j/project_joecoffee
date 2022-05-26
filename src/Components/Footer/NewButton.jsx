import React from 'react';

export const NewButton = React.forwardRef((props, ref) => (
    <div>
        <p>child</p>
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    </div>
));

