import { Text } from 'react-native';
import { styles } from './Styles';

const Subtitle = (props) => {
  return (
    <Text style={styles.subtitle}>{props.text}</Text>
  )
}

export default Subtitle