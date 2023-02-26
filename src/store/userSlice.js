import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, db, googleProvider, useFirebase, } from '../config/Firebase';
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

import { errorAlert, errorAlertFirebase, loginAlert, myAlert, errorEmail, errorPassword } from '../myAlert';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { doc, getDoc, getDocs, query, where, deleteDoc } from "firebase/firestore";






//_______________________________Register User_____________________________________
export const userSignUp = createAsyncThunk('userSignUp', async (item) => {
    const register = createUserWithEmailAndPassword(auth, item.email, item.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            const UserAuthId = userCredential.user.uid;
            console.log("User Register Slice", user);
            console.log("User Register Slice", UserAuthId);
            alert("User Register Successfully");
            item.cb && item.cb()
            myAlert();
            //_______________Store data in Fire store_________________
            try {
                let newItem = {
                    name: item.name,
                    email: item.email,
                    password: item.password,
                    userRole: "user",
                    authID: UserAuthId,
                    createdAt: new Date().toLocaleDateString(),
                }
                console.log("🚀 ~newItem", newItem);
                await addDoc(collection(db, "auth"), newItem);
                return newItem

            } catch (error) {
                console.log("Error Fire Store: ", error)
                alert("Error Fire Store: ", error);
                errorAlertFirebase();
            }
            //_______________End Store data in Fire store________________
            // console.log("USER REG ", register)
        })
        .catch((error) => {
            //auth/email-already-in-use
            if (error.code === "auth/email-already-in-use") {
                errorAlert()
            }
            else {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorMessage);
                alert(errorMessage);
            }
        });
    return register


});
//_____________________________End Register User___________________________________



//_______________________________GOOGLE LOGIN User_____________________________________
export const signInWithGoogle = createAsyncThunk('signInWithGoogle', async () => {
    signInWithPopup(auth, googleProvider)
        .then(async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("🚀 ~ file: userSlice.js:76 ~ .then ~ token:", token)
            // The signed-in user info.
            const user = result.user;
            // console.log("🚀 ~ file: userSlice.js:79 ~ .then ~ user:", user)
            // console.log("User uid", user.uid)
            // console.log("User displayName", user.displayName)
            // console.log("User Token", user.email)
            // console.log("User accessToken", user.accessToken)
            alert("Successfully Login Google ")
            //_______________Store data in Fire store_________________
            try {
                let newItem = {
                    token: token,
                    userId: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    accessToken: user.accessToken,
                    createdAt: new Date().toLocaleDateString(),
                }
                // console.log("🚀 ~newItem", newItem);
                await addDoc(collection(db, "signGoogle"), newItem);
                return newItem

            } catch (error) {
                console.log("Error Fire Store: ", error)
                alert("Error Fire Store: ", error);
                errorAlertFirebase();
            }
            //_______________End Store data in Fire store________________
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            alert(error)
            alert("errorCode", errorCode)
            alert("errorMessage", errorMessage)
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert("Error", credential)
            console.log("🚀 ~ file: userSlice.js:105 ~ .then ~ credential:", credential)
            console.log("🚀 ~ file: userSlice.js:98 ~ .then ~ error:", error)
        });

});
//_____________________________End GOOGLE LOGIN User___________________________________



//_______________________________Login User_____________________________________
export const userLogin = createAsyncThunk('userLogin', async (item) => {
    // const navigate = useNavigate();

    const loginUser = signInWithEmailAndPassword(auth, item.email, item.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            // console.log("User Login Slice", user);
            // console.log("User Login Slice uid", user.email);
            // console.log("User Login Slice uid", user.uid);


            alert("---User login Successfully---");
            // navigate('/')
            item.cb && item.cb()
            loginAlert();
            //_______________Store data in Fire store_________________
            try {

                //---get data firestore-------

                let newItem = {
                    id: user.uid,
                    email: item.email,
                    password: item.password,
                    userRole: "user"

                }

                // console.log("🚀 ~newItem", newItem);
                await addDoc(collection(db, "userLoginDetails"), newItem);

                return newItem

            } catch (error) {
                //auth/wrong-password
                if (error.code === "auth/wrong-password") {
                    errorPassword()
                }
                // auth/user-not-found
                else if (error.code === "auth/user-not-found") {
                    errorEmail()
                }
                else {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error", errorMessage);
                    alert(errorMessage);
                }

            }
            //_______________End Store data in Fire store________________
            // console.log("USER REG ", loginUser)
        })
        .catch((error) => {
            //auth/email-already-in-use
            if (error.code === "auth/email-already-in-use") {
                errorAlert()
            }
            else {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorMessage);
                alert(errorMessage);
            }
        });
    return loginUser


});
//_____________________________End Login User___________________________________


//_______________________________LogOut User_____________________________________

export const userLogoutFirebase = createAsyncThunk('userLogoutFirebase', async () => {
    try {
        await auth.signOut();
        // The user has been signed out.
        console.log("Logout User Slice ..........................")
    } catch (error) {
        console.log('Error signing out:', error);
    }
});
//_____________________________End LogOut User___________________________________




//_____________________________get all  User Data___________________________________

//getTodo import in Todo.js,,
export const getUserData = createAsyncThunk('getUserData', async () => {

    try {
        const querySnapshot = await getDocs(collection(db, "events"));
        let loginUserDetails = [];
        querySnapshot.forEach((doc) => {
            loginUserDetails.push({
                authId: doc.data().id,
                name: doc.data().name,
                email: doc.data().email,
                date: doc.data().date,
                time: doc.data().time,
                location: doc.data().location,
                desc: doc.data().desc,
                createdAt: doc.data().createdAt,
                join: "Join Event",

            });
            // console.log(doc.id, " => ", doc.data());
            // console.log("🚀 ~ file: todoSlice.js:37 ~ getTodo ~ loginUserDetails", loginUserDetails)
        });
        return loginUserDetails;

    } catch (error) {
        console.log("🚀 ~ file: todoSlice.js:49 ~ get ~ error", error);
    }

});
//_________________________________End get user details___________________________________

//________________________________Get Single User Data____________________________________
export const getLoginUser = createAsyncThunk('getLoginUser', async (item) => {
    console.log("🚀 ~ file: userSlice.js:240 ~ getLoginUser ~ item:", item)
    try {

        const q = query(collection(db, "auth"), where("email", "==", item));
        let allUserList = [];
        const querySnapshot = await getDocs(q);
        console.log("🚀 ~querySnapshot", querySnapshot)
        querySnapshot.forEach((doc) => {
            allUserList.push({
                authId: doc.data().authID,
                name: doc.data().name,
                email: doc.data().email,
                password: doc.data().password,
                userRole: doc.data().userRole,
                createdAt: doc.data().createdAt,

            });

        });
        return allUserList;

    } catch (error) {
        console.log("🚀 ~ file: todoSlice.js:49 ~ get ~ error", error);
    }

});







//-------------------------Add events in firebase----------------------
export const addEvents = createAsyncThunk('addEvents', async (item) => {

    // console.log("_____________________________________________________________________")
    console.log("🚀 ~ file: todoSlice.js:37 ~ addEvents ~ item", item);
    // console.log("_____________________________________________________________________")

    try {
        let newItem = {
            id: item.id,
            email: item.email,
            name: item.name,
            date: item.date,
            time: item.time,
            location: item.location,
            desc: item.desc,
            createdAt: new Date().toLocaleDateString(),
            status: "Incomplete",
        }
        console.log("🚀 ~ file: todoSlice.js:20 ~  ~ join Events ", newItem);
        await addDoc(collection(db, "events"), newItem);
        return newItem

    } catch (error) {
        console.log("Error : ", error)
    }

});

//-------------------------Add addJoinsEvents in firebase----------------------
export const addJoinsEvents = createAsyncThunk('addJoinsEvents', async (item) => {

    console.log("_____________________________________________________________________")
    console.log("🚀 ~ file: todoSlice.js:37 ~ addJoinsEvents ~ item", item);
    console.log("_____________________________________________________________________")

    try {
        let newItem = {
            id: item.authId,
            email: item.email,
            name: item.name,
            date: item.date,
            location: item.location,
            desc: item.desc,
            createdAt: new Date().toLocaleDateString(),
            status: "yes"
        }
        console.log("🚀 ~ file: addJoinsEvents ~  ~ newItem", newItem);
        await addDoc(collection(db, "joinEvents"), newItem);
        return newItem

    } catch (error) {
        console.log("Error : ", error)
    }

});

//____________________________________________________________________________________________


//_____________________________get all  User Events___________________________________

//getTodo import in Todo.js,,
export const getJoinEvent = createAsyncThunk('getJoinEvent', async () => {

    try {
        const querySnapshot = await getDocs(collection(db, "joinEvents"));
        let loginUserDetails = [];
        querySnapshot.forEach((doc) => {
            loginUserDetails.push({
                authId: doc.data().id,
                name: doc.data().name,
                email: doc.data().email,
                date: doc.data().date,
                time: doc.data().time,
                location: doc.data().location,
                desc: doc.data().desc,
                createdAt: doc.data().createdAt,
                join: "yes",
            });
            // console.log(doc.id, " => ", doc.data());
            // console.log("🚀 ~ file: todoSlice.js:37 ~ getTodo ~ loginUserDetails", loginUserDetails)
        });
        return loginUserDetails;

    } catch (error) {
        console.log("🚀 ~ file: todoSlice.js:49 ~ get ~ error", error);
    }

});


//-------------------Delete events in firebase--------------------
//DeleteTodo import in Todo.js,,
export const deleteEvents = createAsyncThunk('deleteEvents', async (item) => {
    console.log("🚀 ~ file: todoSlice.js:64 ~ deleteEvnts ~ item", item)
    try {
        await deleteDoc(doc(db, "events", item.id))
            .then(() => {
                // File deleted successfully
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });

        return item
    } catch (error) {
        console.log("🚀 ~ file: todoSlice.js:66 ~ deleteEvnts ~ error", error)
    }

});




//_______________________________________________________________________________________________________________
//----------------------------------------Step two make builder---------------------------------------------
// Register  thunk slice 
const userSlice = createSlice({
    name: "users",
    initialState: { users: [], error: null },
    extraReducers: (builder) => {
        // builder-------------------------Register---------------------------
        builder.addCase(userSignUp.fulfilled, (state, action) => {
            // console.log("state : ", state)
            // console.log("state : ", action)
            let newState = {
                ...state,
                users: [...state.users, action.payload],
            };
            // console.log("Action : ", newState)
            return newState;
        });
        // builder------------------------End Register------------------------

        // builder-------------------------GOOGLE LOGIN---------------------------
        builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
            // console.log("state : ", state)
            // console.log("state : ", action)
            let newState = {
                ...state,
                users: [...state.users, action.payload],
            };
            // console.log("Action : ", newState)
            return newState;
        });
        // builder------------------------End GOOGLE LOGIN------------------------



        // builder-------------------------Login---------------------------
        builder.addCase(userLogin.fulfilled, (state, action) => {
            // console.log("state : ", state)
            // console.log("state : ", action)
            let newState = {
                ...state,
                users: [...state.users, action.payload],
                // loginUser: action.payload,
            };
            // console.log("Action : ", newState)
            return newState;
        });
        // builder------------------------End Login------------------------




        // builder-------------------------GetSingle User---------------------------
        builder.addCase(getLoginUser.fulfilled, (state, action) => {
            // console.log("state : ", state)
            // console.log("state : ", action)
            // users: [...state.users, action.payload],
            let newState = {
                ...state,
                loginUser: action.payload,
            };
            console.log("Action : ", newState)
            return newState;
        });
        // builder------------------------End L------------------------

        // builder-------------------------Logout---------------------------
        builder.addCase(userLogoutFirebase.fulfilled, (state, action) => {
            console.log("state : ", state)
            console.log("state : ", action)
            let newState = {
                ...state,
                users: [...state.users, action.payload],
            };
            console.log("Action : ", newState);
            return newState;
        });
        // builder------------------------End logout------------------------

        // builder------------------------get data------------------------

        builder.addCase(getUserData.fulfilled, (state, action) => {
            let getState = {
                ...state,
                allUserData: action.payload,
            };
            return getState;
        });

        // builder-------------------------add Events-----------------------
        builder.addCase(addEvents.fulfilled, (state, action) => {
            console.log("state : ", state)
            console.log("state : ", action)
            let newState = {
                ...state,
                events: [...state.users, action.payload],
            };
            console.log("Action : ", newState)
            return newState;
        });


        // builder-------------------------add join Events-----------------------
        builder.addCase(addJoinsEvents.fulfilled, (state, action) => {
            console.log("state : ", state)
            console.log("state : ", action)
            let newState = {
                ...state,
                joinEvents: [...state.users, action.payload],
            };
            console.log("Action : ", newState)
            return newState;
        });
        // builder--------------------------End-----------------------------


        // builder------------------------get data------------------------

        builder.addCase(getJoinEvent.fulfilled, (state, action) => {
            let getState = {
                ...state,
                joinEvents: action.payload,
            };
            return getState;
        });

        // builder-------------------------Delete todo-----------------------
        builder.addCase(deleteEvents.fulfilled, (state, action) => {
            const todo = state.todo;
            const item = action.payload;
            let filterTodo = todo.filter((todoItem) => {
                return item.id !== todoItem.id
            })
            let deleteState = {
                ...state,
                todo: filterTodo,
            };
            return deleteState;
        });

    }
});










// Action creators are generated for each case reducer function
export const { updateTodo } = userSlice.actions

export default userSlice.reducer