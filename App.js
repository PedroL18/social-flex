import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    

    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />


      <View style={styles.card}>


        <View style={styles.profile}>
          <Image source={require('./assets/avatar.png')} style={styles.avatar} />
          <Text style={styles.name}>Pedro Luis de Freitas Nascimento</Text>
          <Text style={styles.bio}>Dev Mobile</Text>
        </View>


        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Posts</Text>
            <Text style={styles.statValue}>48</Text>
          </View>


          <View style={[styles.statItem, styles.statDivider]}>
            <Text style={styles.statLabel}>Seguindo</Text>
            <Text style={styles.statValue}>120</Text>
          </View>


          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Seguidores</Text>
            <Text style={styles.statValue}>300</Text>
          </View>
        </View>


        <View style={styles.actions}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Seguir</Text>
          
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    padding: 16,
  },



  card: {
    width: '100%',
    maxWidth: 420,
    flex: 1,
    maxHeight: 620,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D9DEE5',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  

  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B2733',
  },
  bio: {
    fontSize: 16,
    color: '#5B6B7A',
  },

  

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E3E7EC',
    paddingVertical: 18,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  statDivider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E3E7EC',
  },
  statLabel: {
    fontSize: 14,
    color: '#5B6B7A',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B2733',
  },

  
  actions: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    paddingVertical: 14,
    backgroundColor: '#2C5A76',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
