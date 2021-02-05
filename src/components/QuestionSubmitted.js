import swal from 'sweetalert';

const result = (response) => {
    console.log(response)
    if (response === true) {
        return (
            swal("Your question was submitted and is pending approval")
        );
    } else {
        return (
            swal("question was not submitted")
            );
    }
};

export default result;
