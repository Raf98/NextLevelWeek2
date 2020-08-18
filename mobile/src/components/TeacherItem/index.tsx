import React, { useState } from 'react';

import styles from './styles';
import { View, Image, Text, Linking } from 'react-native';


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteButtonIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

export interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}



const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited);


    function handleLinkToWhatsapp() {
        api.post('connections', {
            user_id: teacher.id,
        });

        Linking.openURL(`whatsapp://send?phone=55${teacher.whatsapp}`);

    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            });

            favoritesArray.splice(favoritedIndex, 1);
            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleToggleFavorite}
                    style={[
                        styles.favoriteButton,
                        isFavorited ? styles.favorited : styles.unfavorited]
                    }>
                    {isFavorited ? <Image source={unfavoriteButtonIcon} /> :
                        <Image source={heartOutlineIcon} />}


                </RectButton>

                <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default TeacherItem;