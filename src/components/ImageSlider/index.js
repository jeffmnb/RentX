import React from 'react';
import { FlatList } from 'react-native';

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage
} from './styles';

export const ImageSlider = ({ image }) => {
    return (
        <Container>

            <ImageIndexes>
                {
                    image.map((item) => (
                        <ImageIndex active={true} />
                    ))
                }
            </ImageIndexes>

            <FlatList
                data={image}
                keyExtractor={key => key}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item }}
                            resizeMode='contain'
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />



        </Container>
    );
}