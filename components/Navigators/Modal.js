import {createStackNavigator} from "react-navigation"
import HomeStackNavigator from './HomeStackNavigator'
import ForgotPassword from '../screens/ForgotPassword'
import DetailsScreen from '../screens/RestaurantsScreen/DetailsScreen'
export default Modal = createStackNavigator({
    Init: HomeStackNavigator,
    ForgotPass : ForgotPassword,
    Details: DetailsScreen
},{
    mode:'modal',
    headerMode:"none"
    }
);
