import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children,isgooglesignin, inverted, signin, history,...otherProps}) => (
 

   <button className={`${inverted ? 'inverted':''} ${isgooglesignin ? 'google-sign-in':''} custom-button`} {...otherProps}>
     {children}
    </button>
)

export default CustomButton;