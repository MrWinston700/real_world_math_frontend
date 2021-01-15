
const result = (response) => {
    console.log(response)
    if (response === true) {
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
