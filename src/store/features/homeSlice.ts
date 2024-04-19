import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../constants/types/user.type";

interface Users {
    users:UserType[]
}
const initialState:Users = {
    users:[]
}
export const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        addUser : (state,action:PayloadAction<{name:string}>)=>{
            state.users.push({
                name:action.payload.name
            })
        }
    }
})
export default homeSlice.reducer
export const {addUser} = homeSlice.actions