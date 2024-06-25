import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/customButton';

//tambahkan setCurrentPage sebagai prop
const NoteCard = ({ item, setCurrentPage, setCurrentNote, deleteNote }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>{item.desc}</Text>
        <View style={styles.buttons}>
            <CustomButton
                backgroundColor='#2c6bf2'
                color='#fff'
                text='Ubah'
                fontSize={12}
                width={100}
                onPress={() => { //tuliskan layar Edit ketika tombol ditekan
                    setCurrentNote(item)
                    setCurrentPage('edit')
                }}
            />
            <CustomButton
                backgroundColor='#D82148'
                color='#fff'
                text='Hapus'
                fontSize={12}
                width={100}
                onPress={() => {
                    deleteNote(item.id)
                }}
            />
        </View>
    </View>
)

//tambahkan setCurrentPage sebagai prop
const Home = ({ noteList, setCurrentPage, setCurrentNote, deleteNote }) => (
    <View style={styles.container}>
        <CustomButton
        backgroundColor='#71109e'
        color='#f5f0fa'
        text='Tambahkan Note'
        width='100%'
        //tulis layar Add ketika tombol ditekan
        onPress={() => {
            setCurrentPage('add')
        }}
        />
        <FlatList
            showsVerticalScrollIndicator={false}
            data={noteList}
            //tambahkan function setCurrentPage ke component NoteCard
            renderItem={({ item }) => (
                <NoteCard item={item} setCurrentPage={setCurrentPage} setCurrentNote={setCurrentNote} deleteNote={deleteNote} />
            )} //function setCurrentPage diteruskan ke App.js dan dijalankan tiap masing-masing tombol ditekan
            keyExtractor={(item) => item.id}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 25,
    },
    card: {
        padding: 10,
        marginVertical: 15,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 5,
    },
    cardTitle: {
        fontWeight: '600',
        color: '#203239',
        fontSize: 16,
        marginBottom: 5,
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default Home