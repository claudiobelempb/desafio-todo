import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import ImageTrahs from '../../assets/images/trahs.png'
import ImageChecked from '../../assets/images/vector.png'
import { Styles } from './Styles'

interface ICardTask extends TouchableOpacityProps {
  id: string
  title: string
  isComplete?: boolean
  onRemoveTask: (id: string) => void
  onToggleTaskCompletion: (id: string) => void
}

export function CardTask({ ...props }: ICardTask): JSX.Element {
  return (
    <View style={Styles.CardContainer}>
      <View style={Styles.CardContent}>
        <TouchableOpacity
          style={Styles.CardButtonRadio}
          onPress={() => props.onToggleTaskCompletion(props.id)}
        >
          {props.isComplete && (
            <View style={Styles.CardImageChecked}>
              <Image source={ImageChecked} />
            </View>
          )}
        </TouchableOpacity>
        <Text
          style={[
            Styles.CardParagraph,
            props.isComplete ? { textDecorationLine: 'line-through' } : false,
          ]}
        >
          {props.title}
        </Text>
        <TouchableOpacity onPress={() => props.onRemoveTask(props.id)}>
          <Image source={ImageTrahs} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
