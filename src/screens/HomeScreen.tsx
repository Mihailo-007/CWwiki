import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const battles = [
  { id: 'umbara', title: 'Битва за Умбару' },
  { id: 'geonosis2', title: 'Друга битва за Джеонозис' },
  { id: 'kashyyyk', title: 'Оборона Кашиїка' },
  { id: 'coruscant', title: 'Битва за Корусант' },
];

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch] = useState("");

  const filteredBattles = battles.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Важливі битви клонів</Text>

      <TextInput
        style={styles.search}
        placeholder="Пошук битви..."
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredBattles}
        keyExtractor={(item) => item.id}
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

  header: {
    color: '#fff',
    fontSize: 26,
    marginBottom: 16,
    fontWeight: 'bold'
  },

  search: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2a72ff"
  },

  card: {
    backgroundColor: '#1e1e1e',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12
  },

  cardTitle: { color: '#fff', fontSize: 20 },
});
