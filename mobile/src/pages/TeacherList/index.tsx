import React from 'react';

import styles from './styles';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';

export default function TeacherList(){
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
        </View>
    );
}