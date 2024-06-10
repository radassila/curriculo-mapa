import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D95B6F', dark: '#813643' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <Collapsible title="Contato">
        <ThemedText>
          Dois Unidos, Recife - PE{' '}
        </ThemedText>
        <ThemedText>
          Telefone: (81)98691-7006{' '}
        </ThemedText>

        <ThemedText>
        E-mail: <ExternalLink href="mailto:rebekaradassila@gmail.com">
          <ThemedText type="link">rebekaradassila@gmail.com</ThemedText>
        </ExternalLink>{' '}
        </ThemedText>

        <ThemedText>
          LinkedIn: <ExternalLink href="https://www.linkedin.com/in/radassilasilva">
          <ThemedText type="link">RadassilaSilva</ThemedText>
        </ExternalLink>{' '}
        </ThemedText>
        
        <ThemedText>
        GitHub: <ExternalLink href="https://github.com/radassila">
          <ThemedText type="link">Radássila Silva</ThemedText>
        </ExternalLink>{' '}
        </ThemedText>
  

        
      </Collapsible>
      <Collapsible title="Objetivos">
        <ThemedText>
        Aprimorar e por em prática as habilidades adquiridas ao decorrer do curso técnico e da graduação atual. Estou em busca da minha primeira experiência profissional em TI, para seguir nessa área.{' '}
        </ThemedText>
      </Collapsible>
      <Collapsible title="Idiomas">
        <ThemedText>
        Inglês intermediário nas modalidades de conversação, escrita e leitura.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Formação">
        <ThemedText>
          <ThemedText type="defaultSemiBold">* Tecnólogo em análise e desenvolvimento de sistemas/ 2023</ThemedText> {' '}
        </ThemedText>
        <ThemedText style={{ fontFamily: 'SpaceMono' }}>
        -Faculdade SENAC
          </ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
        -Cursando o 3° período 
          </ThemedText>

          <ThemedText>
          <ThemedText type="defaultSemiBold">* Técnico em Manutenção e suporte em Informática/ 2020 - 2022</ThemedText> {' '}
        </ThemedText>
        <ThemedText style={{ fontFamily: 'SpaceMono' }}>
        -Ensino médio técnico integral
          </ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          -Escola Técnica Estadual Professor Agamemnon Magalhães 
          </ThemedText>

      </Collapsible>
      <Collapsible title="Experiência Profissional">
      <ThemedText>
          <ThemedText type="defaultSemiBold">* Grupo Provider</ThemedText> {' '}
        </ThemedText>
        <ThemedText style={{ fontFamily: 'SpaceMono' }}>
        Período: 07/03/2023 - 27/05/2024
          </ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
         Cargo: Operador de telemarketing (receptivo)
          </ThemedText>
      </Collapsible>
  
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#DBDBDB',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
