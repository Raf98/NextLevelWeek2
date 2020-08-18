import React, { useState } from 'react';

import styles from './styles';
import { View, ScrollView, _ScrollView, Text} from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { TextInput, RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function TeacherList() {

    const [areFiltersVisible, setFiltersVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    function handleToggleFiltersVisible() {
        setFiltersVisible(!areFiltersVisible)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                });

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    function loadAllTeachers() {
        api.get('classes').then(response => {
            console.log(response.data)
            setTeachers(response.data);
        })
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject, week_day, time
            }
        });

        //console.log(response.data)

        handleToggleFiltersVisible();
        setTeachers(response.data)

    }


    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}>
                {areFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput style={styles.input} 
                    placeholderTextColor="#c1bccc" 
                    placeholder="Qual disciplina?"
                    value={subject}
                    onChangeText={text => setSubject(text)} />


                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input} 
                            placeholderTextColor="#c1bccc" 
                            placeholder="Que dia?"
                            value={week_day} 
                            onChangeText={text => setWeekDay(text)}
                             />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput style={styles.input} 
                            placeholderTextColor="#c1bccc" 
                            placeholder="Em que horário?" 
                            value={time}
                            onChangeText={text => setTime(text)}/>
                        </View>
                    </View>

                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}

            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                {teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} 
            favorited={favorites.includes(teacher.id)}/>})}
                
            </ScrollView>
        </View>
    );
}