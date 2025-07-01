import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>PROFILE</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
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
          
          <Text style={styles.profileName}>Nuntawat Saehuam</Text>
          <Text style={styles.profileRole}>UI/UX Designer & Developer</Text>
          
          <Text style={styles.profileBio}>
            Hi, My name is Morgorn studying at KKU.{'\n'}
            I’m passionate about web design and committed to continuous learning.
          </Text>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>FOLLOW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>MESSAGE</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3.67</Text>
              <Text style={styles.statLabel}>GPA</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2025</Text>
              <Text style={styles.statLabel}>YEAR</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>CS</Text>
              <Text style={styles.statLabel}>MAJOR</Text>
            </View>
          </View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* University Info */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Education</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.universityCard}>
            <View style={styles.universityIcon}>
              <Text style={styles.universityEmoji}>🎓</Text>
            </View>
            <View style={styles.universityInfo}>
              <Text style={styles.universityName}>Khon Kaen University</Text>
              <Text style={styles.studentId}>ID: 653450510-0</Text>
            </View>
          </View>

          {/* Skills Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Skills</Text>
          </View>

          <View style={styles.skillsGrid}>
            <View style={[styles.skillCard, styles.skillCard1]}>
              <Text style={styles.skillIcon}>⚛️</Text>
              <Text style={styles.skillName}>React Native</Text>
              <Text style={styles.skillCount}>Advanced</Text>
            </View>
            <View style={[styles.skillCard, styles.skillCard2]}>
              <Text style={styles.skillIcon}>🎨</Text>
              <Text style={styles.skillName}>UI Design</Text>
              <Text style={styles.skillCount}>Expert</Text>
            </View>
            <View style={[styles.skillCard, styles.skillCard3]}>
              <Text style={styles.skillIcon}>💻</Text>
              <Text style={styles.skillName}>JavaScript</Text>
              <Text style={styles.skillCount}>Advanced</Text>
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contact</Text>
          </View>

          <View style={styles.contactContainer}>
            <TouchableOpacity style={styles.contactItem}>
              <Text style={styles.contactIcon}>📧</Text>
              <Text style={styles.contactText}>nuntawat@email.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem}>
              <Text style={styles.contactIcon}>📱</Text>
              <Text style={styles.contactText}>+62 520 6392</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#667eea',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  scrollContent: {
    paddingBottom: 30,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 2,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    fontSize: 18,
  },

  // Profile Section
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
  profileName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  profileRole: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 15,
    fontWeight: '500',
  },
  profileBio: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 25,
    paddingHorizontal: 20,
  },

  // Action Buttons
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
  messageButton: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },

  // Stats
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    letterSpacing: 1,
  },

  // Content Card
  contentCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    minHeight: height * 0.6,
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '600',
  },

  // University Card
  universityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  universityIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  universityEmoji: {
    fontSize: 24,
  },
  universityInfo: {
    flex: 1,
  },
  universityName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  studentId: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  // Skills Grid
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  skillCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  skillCard1: {
    backgroundColor: '#E3F2FD',
  },
  skillCard2: {
    backgroundColor: '#F3E5F5',
  },
  skillCard3: {
    backgroundColor: '#E8F5E8',
  },
  skillIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  skillCount: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },

  // Contact
  contactContainer: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 18,
    borderRadius: 15,
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});

export default Home;