// app/index.jsx
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, Linking } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const { theme, isDark } = useTheme();

  const dynamicStyles = StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.background},
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.gradientStart,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.textOnPrimary,
      letterSpacing: 2,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backIcon: {
      fontSize: 20,
      color: theme.text,
    },
    profileName: {
      fontSize: 26,
      fontWeight: '800',
      color: theme.textOnPrimary,
      marginBottom: 5,
      textShadowColor: 'rgba(0,0,0,0.3)',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
    profileRole: {
      fontSize: 16,
      color: theme.textOnPrimary,
      marginBottom: 15,
      fontWeight: '500',
      opacity: 0.9,
    },
    profileBio: {
      fontSize: 14,
      color: theme.textOnPrimary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 25,
      paddingHorizontal: 20,
      opacity: 0.8,
    },
    messageButton: {
      borderWidth: 2,
      borderColor: theme.buttonBorder,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 25,
      backgroundColor: theme.buttonSecondary,
    },
    messageButtonText: {
      color: theme.textOnPrimary,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 1,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: '800',
      color: theme.textOnPrimary,
      marginBottom: 5,
    },
    statLabel: {
      fontSize: 12,
      color: theme.textOnPrimary,
      fontWeight: '600',
      letterSpacing: 1,
      opacity: 0.8,
    },
    contentCard: {
      backgroundColor: theme.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 30,
      paddingHorizontal: 20,
      minHeight: height * 0.6,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    universityCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      padding: 20,
      borderRadius: 20,
      marginBottom: 30,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    universityIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.card,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    universityName: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: 5,
    },
    studentId: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: '500',
    },
    skillCard: {
      width: '48%',
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 15,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    skillCard1: {
      backgroundColor: theme.skillCard1,
    },
    skillCard2: {
      backgroundColor: theme.skillCard2,
    },
    skillCard3: {
      backgroundColor: theme.skillCard3,
    },
    skillCard4: {
      backgroundColor: theme.skillCard4,
    },
    skillCard5: {
      backgroundColor: theme.skillCard5,
    },
    skillName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: 5,
    },
    skillCount: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '500',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      padding: 18,
      borderRadius: 15,
      marginBottom: 10,
    },
    contactText: {
      fontSize: 14,
      color: theme.text,
      fontWeight: '500',
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <View style={dynamicStyles.gradientBackground} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Link href="/about" asChild>
            <TouchableOpacity style={dynamicStyles.backButton}>
              <Text style={dynamicStyles.backIcon}>ℹ️</Text>
            </TouchableOpacity>
          </Link>
          <Text style={dynamicStyles.headerTitle}>PROFILE</Text>
          <ThemeToggle />
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileBorder}>
              <Image
                source={require("../assets/image/profile.jpg")}
                style={styles.profileImage}
              />
            </View>
          </View>
          
          <Text style={dynamicStyles.profileName}>Nuntawat Saehuam</Text>
          <Text style={dynamicStyles.profileRole}>Computer Science Student</Text>
          
          <Text style={dynamicStyles.profileBio}>
            Hi, I'm Morgorn studying Computer Science at KKU.
            Passionate about mobile development and UI/UX design.
          </Text>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.followButton}
                onPress={() => Linking.openURL('https://www.instagram.com/morgorn.n/?hl=en')}>
              <Text style={styles.followButtonText}>FOLLOW</Text>
              </TouchableOpacity>

              <TouchableOpacity style={dynamicStyles.messageButton}
                onPress={() => Linking.openURL('https://www.facebook.com/nuntawat.morgorn')}>
              <Text style={dynamicStyles.messageButtonText}>MESSAGE</Text>
              </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={dynamicStyles.statNumber}>3.22</Text>
              <Text style={dynamicStyles.statLabel}>GPA</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={dynamicStyles.statNumber}>2025</Text>
              <Text style={dynamicStyles.statLabel}>YEAR</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={dynamicStyles.statNumber}>CS</Text>
              <Text style={dynamicStyles.statLabel}>MAJOR</Text>
            </View>
          </View>
        </View>

        {/* Content Card */}
        <View style={dynamicStyles.contentCard}>
          {/* University Info */}
          <View style={styles.sectionHeader}>
            <Text style={dynamicStyles.sectionTitle}>My Education</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={dynamicStyles.universityCard}>
            <View style={dynamicStyles.universityIcon}>
              <Text style={styles.universityEmoji}>🎓</Text>
            </View>
            <View style={styles.universityInfo}>
              <Text style={dynamicStyles.universityName}>Khon Kaen University</Text>
              <Text style={dynamicStyles.studentId}>Student ID: 653450510-0</Text>
            </View>
          </View>

          {/* Skills Section */}
          <View style={styles.sectionHeader}>
            <Text style={dynamicStyles.sectionTitle}>My Skills</Text>
          </View>

          <View style={styles.skillsGrid}>
            <View style={[dynamicStyles.skillCard, dynamicStyles.skillCard1]}>
              <Text style={styles.skillIcon}>⚛️</Text>
              <Text style={dynamicStyles.skillName}>React Native</Text>
              <Text style={dynamicStyles.skillCount}>Advanced</Text>
            </View>
            <View style={[dynamicStyles.skillCard, dynamicStyles.skillCard2]}>
              <Text style={styles.skillIcon}>🖌️</Text>
              <Text style={dynamicStyles.skillName}>UI/UX Design</Text>
              <Text style={dynamicStyles.skillCount}>Intermediate</Text>
            </View>
            <View style={[dynamicStyles.skillCard, dynamicStyles.skillCard3]}>
              <Icon name="js" size={30} color="#f7df1e" style={styles.skillIcon} />
              <Text style={dynamicStyles.skillName}>JavaScript</Text>
              <Text style={dynamicStyles.skillCount}>Advanced</Text>
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.sectionHeader}>
            <Text style={dynamicStyles.sectionTitle}>Contact Information</Text>
          </View>

          <View style={styles.contactContainer}>
            <TouchableOpacity style={dynamicStyles.contactItem}>
              <Text style={styles.contactIcon}>📧</Text>
              <Text style={dynamicStyles.contactText}>nuntawat.s@kkumail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dynamicStyles.contactItem}>
              <Text style={styles.contactIcon}>📱</Text>
              <Text style={dynamicStyles.contactText}>+62 520 6392</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Static styles (unchanged by theme)
const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  profileImage: {
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 4,
    borderColor: '#fff',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  followButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 10,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewAllText: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  universityInfo: {
    flex: 1,
  },
  universityEmoji: {
    fontSize: 24,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  skillIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 15,
  },
});

export default Home;