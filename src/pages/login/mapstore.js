// import {loginAsyncAction} from "actions/user/userAction"

export const mapStateToProps = (state) => ({

})


export const mapDispatchToProps=(dispatch)=>({
    handleLogin(e){
        e.preventDefault();
                this.props.form.validateFields( async (err, values) => {
            if (!err) {
               //reduxThunk的返回值是一个promise
                dispatch(loginAsyncAction())
            }
        });
    }
})