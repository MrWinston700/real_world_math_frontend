import swal from 'sweetalert';

const result = (response) => {
    console.log(response)
    if (response === true) {
        return (
            swal("Good job!", "You got it!", "success")
        );
    } else {
        return (
            swal("So close!", "Yet so far", "error")
            );
    }
};

export default result;
