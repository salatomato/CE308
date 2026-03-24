import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ProfileApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
     
      <View style={[styles.header ,{ backgroundColor: '#43084c9e' }]}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

     
      <View style={styles.row}>
        <View style={[styles.infoBox, { backgroundColor: '#13118879' }]}>
          <Text style={styles.boxTitle}>รหัส</Text>
          <Text style={styles.boxText}>66110385</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: '#88115679' }]}>
          <Text style={styles.boxTitle}>คณะ</Text>
          <Text style={styles.boxText}>วิทยาลัยวิศวกรรมศาสตร์และเทคโนโลยี</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: '#11668879' }]}>
          <Text style={styles.boxTitle}>สาขา</Text>
          <Text style={styles.boxText}>วิศวกรรมคอมพิวเตอร์</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ข้อมูลส่วนตัว:</Text>
        <View style={styles.card}><Text>ชื่อ-นามสกุล: รรินทร์ธร ช่างกล่อม</Text></View>
        <View style={styles.card}><Text>อีเมล: 66110385@Dpu.ac.th</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>การศึกษา:</Text>
        <View style={styles.card}><Text>มหาวิทยาลัยธุรกิจบัณฑิตย์</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>สิ่งที่ชอบ:</Text>
        <View style={styles.card}><Text> ชอบดู ซีรีส์ เพราะนักแสดงหล่อมากๆๆๆๆๆ</Text></View>
        <View style={styles.card}><Text> นอน เพราะไม่ต้องทำอะไร</Text></View>
        <View style={styles.card}><Text> ทำอาหารแบบเยอะๆเพราะสนุก</Text></View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>สิ่งที่ไม่ชอบ:</Text>
        <View style={styles.card}><Text> น้องเจนและน้องตอง</Text></View>
        <View style={styles.card}><Text> เด็กชายเอ็มกับมิสเตอร์โคนันมันชอบหลอกผี</Text></View>
        <View style={styles.card}><Text> หนังผี</Text></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 100, 
    backgroundColor: '#2C3E50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    marginBottom: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',  
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxText: {
    color: 'white',
    fontSize: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  card: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#4e032f9e', // 
  },
});
export default ProfileApp;