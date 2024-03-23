import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BellRinging, CaretDown, MapPin } from 'phosphor-react-native';
import { styles } from "./styles";

import Sun from '../../assets/01d.svg';
import Sun02d from '../../assets/02d.svg';

export function Home() {
  return <LinearGradient
    colors={['#292A4E', '#715C77', '#C75C2E']}
    style={styles.container}
  >
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MapPin size={25} color="#fff" />
          <Text style={styles.headerLeftText}> São Paulo </Text>
          <CaretDown size={25} color="#fff" />
        </View>
        <BellRinging size={25} color="#fff" />
      </View>

      <View style={styles.info}>
        <Text style={styles.infoTextUser}>Bom dia, Hitalo</Text>
        <Sun width={200} height={200} />
        <Text style={styles.infoTextClima}>25°C</Text>
        <Text style={styles.infoTextMaxMin}>Max.: 28°C Min.: 22°C</Text>
      </View>
    </View>

    <View style={styles.footer}>
      <Text style={styles.footerText}>Previsão para os proxímos 7 dias</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Seg</Text>
          <Sun02d width={40} height={40} />
          <Text style={styles.footerPreview}>19°C</Text>
        </View>
      </ScrollView>
    </View>

  </LinearGradient>;
}