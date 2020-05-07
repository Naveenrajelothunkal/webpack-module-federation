import { connect } from 'react-redux'
import { loginUserAction } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => ({
  porps: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  userLogin: (email) => dispatch(loginUserAction(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)