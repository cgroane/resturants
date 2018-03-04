import React from 'react';
import ListItem from './../ListItem/ListItem';

export function mapToCard (array) {
    return array.map((cur, ind, arr) => {
        return (
            <ListItem 
                key={ind} 
                name={cur.name}
                backgroundImageURL={cur.backgroundImageURL}
                category={cur.category}
                contact={cur.contact}
                location={cur.location}
                distance={cur.distance}
            />
        )
    })
}