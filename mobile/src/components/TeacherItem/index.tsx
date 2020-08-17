import React from 'react';

import styles from './styles';
import { View, Image, Text } from 'react-native';


import favoriteButtonIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteButtonIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: "https://avatars0.githubusercontent.com/u/20431901?s=460&u=7763a7fe255afe73043c8e2c92d2684fac835e5a&v=4" }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Rafael</Text>
                    <Text style={styles.subject}>Computação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Bio
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 100</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[
                        styles.favoriteButton,
                        styles.favorited]
                    }>
                    {<Image source={favoriteButtonIcon} />}


                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default TeacherItem;