import { Platform, StyleSheet } from 'react-native';
import { colors } from './src/utils';

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  Header: {
    backgroundColor: colors.gray700,
    height: 170,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    color: colors.gray300,
    fontWeight: 'bold',
  },
  SubTitle: {
    fontWeight: '400',
    color: colors.gray300,
  },
  InputContainer: {
    flexDirection: 'row',
    padding: Platform.OS === 'ios' ? 15 : 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35,
    columnGap: 5,
  },
  ButtonContaine: {
    backgroundColor: colors.blueDark,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  Content: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16
  },
  ContainerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 32,
  },
  ContentInfo: {
    flexDirection: 'row',
    columnGap: 5,
  },
  ImageCliboard: {
    width: 56
  },
  Paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  BorderContainer: {
    paddingLeft: Platform.OS === 'ios' ? 1 : 10,
  },
  Border: {
    height: 1,
    width: '95%',
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Shap: {
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: colors.gray400,
    color: colors.gray200,
    paddingLeft: 5,
    paddingRight: 5,
    width: 30,
    height: 20,
  }
});