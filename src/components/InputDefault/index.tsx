import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { Styles } from './styles'

interface IInputDefault extends TextInputProps {}

export function InputDefault({ ...props }: IInputDefault): JSX.Element {
  return (
    <>
      <TextInput style={Styles.InputContainer} {...props} />
    </>
  )
}
