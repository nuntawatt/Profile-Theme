// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Light Theme Colors
const lightTheme = {
  // Background colors
  primary: '#667eea',
  secondary: '#764ba2',
  background: '#ffffff',
  surface: '#f8f9fa',
  card: '#ffffff',
  
  // Text colors
  text: '#333333',
  textSecondary: '#666666',
  textOnPrimary: '#ffffff',
  textOnSurface: '#333333',
  
  // Accent colors
  accent: '#FF6B6B',
  accentSecondary: '#FF8E8E',
  
  // Border and shadow
  border: '#e1e1e1',
  shadow: '#000000',
  
  // Status bar
  statusBar: 'light-content',
  
  // Gradient
  gradientStart: '#667eea',
  gradientEnd: '#764ba2',
  
  // Skill card colors
  skillCard1: '#E3F2FD',
  skillCard2: '#F3E5F5',
  skillCard3: '#E8F5E8',
  
  // Button colors
  buttonPrimary: '#FF6B6B',
  buttonSecondary: 'transparent',
  buttonBorder: '#ffffff',
};

// Dark Theme Colors
const darkTheme = {
  // Background colors
  primary: '#1a1a2e',
  secondary: '#16213e',
  background: '#0f0f0f',
  surface: '#1e1e1e',
  card: '#2a2a2a',
  
  // Text colors
  text: '#ffffff',
  textSecondary: '#cccccc',
  textOnPrimary: '#ffffff',
  textOnSurface: '#ffffff',
  
  // Accent colors
  accent: '#FF6B6B',
  accentSecondary: '#FF8E8E',
  
  // Border and shadow
  border: '#333333',
  shadow: '#000000',
  
  // Status bar
  statusBar: 'light-content',
  
  // Gradient
  gradientStart: '#1a1a2e',
  gradientEnd: '#16213e',
  
  // Skill card colors
  skillCard1: '#2d3748',
  skillCard2: '#44337a',
  skillCard3: '#22543d',
  
  // Button colors
  buttonPrimary: '#FF6B6B',
  buttonSecondary: 'transparent',
  buttonBorder: '#ffffff',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load theme preference from storage
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setIsDark(JSON.parse(savedTheme));
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      await AsyncStorage.setItem('theme', JSON.stringify(newTheme));
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  const value = {
    isDark,
    theme,
    toggleTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};