import React from 'react';

import styles from './styles';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
        </View>
    );
}