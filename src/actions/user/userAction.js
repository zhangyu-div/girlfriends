import {userLoginTypes} from "./userType";
import {createAction} from "redux-actions";
import {loginApi} from "api/user"

export const loginAsyncAction=(username,password)=>{
    let loginAction=createAction(userLoginTypes,data=>data)
    return  async()=>{
        let data=await loginApi(username,password);
        console.log(data);
    }
}