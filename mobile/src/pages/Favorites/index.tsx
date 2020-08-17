import React from 'react';

import styles from './styles';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
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