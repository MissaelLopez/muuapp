import { Text } from 'react-native';
import { styles } from './Styles';

const Subtitle = (props) => {
  return (
    <Text style={styles.subtitule}>{props.text}</Text>
  )
}

export default Subtitle