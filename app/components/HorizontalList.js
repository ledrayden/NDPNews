import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';

const HorizontalList = ({ title, data }) => {
    return (
        <>
            <Title size={20}>{title}</Title>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SmallCard item={item} />}
            />
        </>
    )
};

const styles = StyleSheet.create({
    container: {},
});

export default HorizontalList;