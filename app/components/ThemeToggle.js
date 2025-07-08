// components/ThemeToggle.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ style }) => {
  const { isDark, toggleTheme, theme } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[styles.toggleButton, { backgroundColor: theme.surface }, style]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <Text style={[styles.toggleIcon, { color: theme.text }]}>
        {isDark ? '☀️' : '🌙'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleIcon: {
    fontSize: 18,
  },
});

export default ThemeToggle;