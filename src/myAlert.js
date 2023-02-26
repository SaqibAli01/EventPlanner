//Signed in successfully
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const myAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Register successfully'
    })
}

//create events -----
export const myEventsAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Successfully Create Events'
    })
}
//login----------------------------
export const loginAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Login successfully'
    })
}

//---------------------------
export const errorAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email already used kindly Tri Another Email',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

//---------------------------
export const errorAlertFirebase = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Firestore Data add Error',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

//login Password error
export const errorPassword = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is incorrect for this email!',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

//-----Both password and email are incorrect!
export const errorEmail = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Both password and email are incorrect',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

//-----------------------Logout Successfully---------------
export const logoutAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Logout successfully'
    })
}