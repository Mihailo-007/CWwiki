import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const battles = [
  { id: 'umbara', title: 'Битва за Умбару' },
  { id: 'geonosis2', title: 'Друга битва за Джеонозис' },
  { id: 'kashyyyk', title: 'Оборона Кашиїка' },
  { id: 'coruscant', title: 'Битва за Корусант' },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Важливі битви клонів</Text>

      <FlatList
        data={battles}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Battle', { id: item.id })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
  header: { color: '#fff', fontSize: 26, marginBottom: 16, fontWeight: 'bold' },
  card: { backgroundColor: '#1e1e1e', padding: 18, borderRadius: 10, marginBottom: 12 },
  cardTitle: { color: '#fff', fontSize: 20 },
});
