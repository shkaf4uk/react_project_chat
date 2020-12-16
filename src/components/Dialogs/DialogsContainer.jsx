import {addMassageActionCreator} from "../../redux/dialogs_reducer";
import store from "../../redux/redux_store";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state,
        dispatch: store.dispatch,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageText: (newMessage) => dispatch(addMassageActionCreator(newMessage)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);