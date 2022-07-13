import { Text } from 'react-native'
import { styles } from './Styles'

const ForgotPassText = (props) => {
  return (
    <Text style={styles.forgotPass}>{props.text}</Text>
  )
}

export default ForgotPassText