import React, { useState } from 'react';

import styles from './styles';
import { View, ScrollView, _ScrollView, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function TeacherList() {

    const [areFiltersVisible, setFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setFiltersVisible(!areFiltersVisible)
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
                    <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual disciplina?" />

                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Que dia?" />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Em que horário?" />
                        </View>
                    </View>

                    <RectButton  style={styles.submitButton}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}