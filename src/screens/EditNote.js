import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';


const EditNote = ({ setCurrentPage, editNote, selectedNote }) => {
    const [id, setId] = useState(selectedNote.id)
    const [title, setTitle] = useState(selectedNote.title)
    const [desc, setDesc] = useState(selectedNote.desc)

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label='Judul'
                placeholder='Judul'
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label='Deskripsi'
                placeholder='Deskripsi'
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor='#2c6bf2'
                    color='#fff'
                    text='Update'
                    width='100%'
                    //jalankan function addNote dan arahkan kembali ke Home
                    onPress={() => {
                        editNote(id, title, desc)
                        setCurrentPage('home')
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor='#71109e'
                    color='#f5f0fa'
                    text='Kembali ke Home'
                    width='100%'
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
})

export default EditNote