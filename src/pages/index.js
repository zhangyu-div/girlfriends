import Loadable from "react-loadable";
import Loading from "common/loading";
export const Home =Loadable({
    loader:_=>import ('./home'),
    loading:Loading
})


export const Login=Loadable({
    loader:_=>import ("./login"),
    loading:Loading
})

export const Girllist=Loadable({
    loader:_=>import("./girls/girllist"),
    loading:Loading
})

export const Addgirl=Loadable({
    loader:_=>import("./girls/addgirl"),
    loading:Loading
})

export const Userlist=Loadable({
    loader:_=>import("./users/userlist"),
    loading:Loading
})


export const Userinfo=Loadable({
    loader:_=>import("./users/userinfo"),
    loading:Loading
})