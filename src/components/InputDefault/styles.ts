import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../utils';

export const Styles = StyleSheet.create({
  Container: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    borderRadius: 5,
  },
  InputContainer: {
    backgroundColor: colors.gray500,
    color: colors.gray300,
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 5,
    flex: 1
  },
});