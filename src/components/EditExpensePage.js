import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is where to edit expenses. With id of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;
