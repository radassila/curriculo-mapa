import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D95B6F', dark: '#813643' }}
      headerImage={
        <Image
          source={require('@/assets/images/perfil.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Radássila Silva</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Explore meu currículo</ThemedText>
        <HelloWave />
      </ThemedView>
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  reactLogo: {
    height: 180,
    width: 180,
    left: 115,
    top:40,
    borderRadius:100,
    position: 'relative',
    borderWidth: 1, 
    borderColor: '#000000',
  },

  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
 
});
