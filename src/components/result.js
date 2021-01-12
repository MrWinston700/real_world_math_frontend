import React from 'react';

const result = (response) => {
    console.log(response)
    if (response === "good") {
        return (
            alert("correct")
        );
    } else {
        return (
            alert("incorrect")
            );
    }
};

export default result;
