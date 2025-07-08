// app/about.jsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const { width, height } = Dimensions.get('window');

const About = () => {
  const { theme } = useTheme();

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
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
    contentCard: {
      backgroundColor: theme.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 30,
      paddingHorizontal: 20,
      minHeight: height * 0.8,
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      color: theme.text,
      marginBottom: 20,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      marginBottom: 15,
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      color: theme.textSecondary,
      lineHeight: 24,
      marginBottom: 15,
      textAlign: 'justify',
    },
    courseCard: {
      backgroundColor: theme.surface,
      padding: 20,
      borderRadius: 15,
      marginBottom: 20,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    courseCode: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.accent,
      marginBottom: 5,
    },
    courseName: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 10,
    },
    courseDetail: {
      fontSize: 14,
      color: theme.textSecondary,
      lineHeight: 20,
    },
    infoCard: {
      backgroundColor: theme.surface,
      padding: 15,
      borderRadius: 12,
      marginBottom: 15,
      borderLeftWidth: 4,
      borderLeftColor: theme.accent,
    },
    infoTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 5,
    },
    infoText: {
      fontSize: 14,
      color: theme.textSecondary,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <View style={dynamicStyles.gradientBackground} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Link href="/" asChild>
            <TouchableOpacity style={dynamicStyles.backButton}>
              <Text style={dynamicStyles.backIcon}>←</Text>
            </TouchableOpacity>
          </Link>
          <Text style={dynamicStyles.headerTitle}>ABOUT COURSE</Text>
          <ThemeToggle />
        </View>

        <View style={dynamicStyles.contentCard}>
          <Text style={dynamicStyles.title}>IN405109 - Hybrid Mobile Application Programming</Text>

          {/* Course Info */}
          <View style={dynamicStyles.courseCard}>
            <Text style={dynamicStyles.courseCode}>IN405109 </Text>
            <Text style={dynamicStyles.courseName}>Hybrid Mobile Application Programming</Text>
            <Text style={dynamicStyles.courseDetail}>
              การเขียนโปรแกรมบนอุปกรณ์เคลื่อนที่แบบไฮบริด เน้นการใช้เฟรมเวิร์กข้ามแพลตฟอร์ม 
              เช่น React Native เพื่อพัฒนาแอปที่สามารถทำงานได้ทั้ง Android และ iOS
            </Text>
          </View>

          <Text style={dynamicStyles.sectionTitle}>ข้อมูลรายวิชา</Text>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>สาขาวิชา</Text>
            <Text style={dynamicStyles.infoText}>วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>หน่วยกิต</Text>
            <Text style={dynamicStyles.infoText}>3 หน่วยกิต (2-2-5)</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>เงื่อนไขรายวิชา</Text>
            <Text style={dynamicStyles.infoText}>IN402101</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>ภาคเรียน</Text>
            <Text style={dynamicStyles.infoText}>1/2568</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>ผู้สอน</Text>
            <Text style={dynamicStyles.infoText}>อ.ธนภัทร วงษ์คำจันทร์</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>วิทยาเขต</Text>
            <Text style={dynamicStyles.infoText}>หนองคาย</Text>
          </View>

          <Text style={dynamicStyles.sectionTitle}>ตารางเรียน</Text>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>วันอังคาร</Text>
            <Text style={dynamicStyles.infoText}>08:30-10:30 (C), 10:30-12:30 (L) - ห้อง NK2316, อาคาร NK 2</Text>
          </View>

          <Text style={dynamicStyles.sectionTitle}>การประเมินผล</Text>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>📝 งานมอบหมาย</Text>
            <Text style={dynamicStyles.infoText}>30%</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>🎯 โปรเจกต์กลางภาค</Text>
            <Text style={dynamicStyles.infoText}>20%</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>🏆 โปรเจกต์ปลายภาค</Text>
            <Text style={dynamicStyles.infoText}>30%</Text>
          </View>

          <View style={dynamicStyles.infoCard}>
            <Text style={dynamicStyles.infoTitle}>👨‍💻 การเข้าร่วมกิจกรรม</Text>
            <Text style={dynamicStyles.infoText}>20%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
});

export default About;
