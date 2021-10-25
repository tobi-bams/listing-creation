import React from 'react';

import classes from './MainContentContainer.module.css';

const MainContentContainer = (props) => {
    return (
        <div className={classes.Container}>
            {props.children}
        </div>
    )
}

export default MainContentContainer;