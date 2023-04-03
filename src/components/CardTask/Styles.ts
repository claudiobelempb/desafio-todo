import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../utils';

export const Styles = StyleSheet.create({
  CardContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  CardContent: {
    marginBotton: 20,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: colors.gray500,
    columnGap: 10,
    alignItems: 'center',
    borderRadius: 5,
    
  },
  CardParagraph: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    
  },
  CardButtonRadio: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.blue,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },

  CardImageChecked: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.purpleDark,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.purpleDark,
  }
});