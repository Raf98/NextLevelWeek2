import React from 'react';

import styles from './styles';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { BorderlessButton } from 'react-native-gesture-handler';


interface PageHeaderProps {
    title: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const { navigate } = useNavigation();

    function handleGoback() {
        navigate('Landing')
    }


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logo} resizeMode="contain" />
            </View>

    <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

export default PageHeader;