import React from 'react';
import { TextInput, View, Text, TextInputProps, StyleSheet, Platform } from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : {},
          inputStyle
        ]}
        placeholderTextColor="#8E8EA0"
        autoCorrect={false}
        spellCheck={false}
        clearButtonMode="while-editing"
        {...props}
      />
      {error && (
        <Text style={[styles.errorText, errorStyle]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0D0D0D',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#0D0D0D',
    minHeight: 48,
    textAlignVertical: 'center',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  errorText: {
    fontSize: 14,
    color: '#EF4444',
    marginTop: 4,
  },
});
