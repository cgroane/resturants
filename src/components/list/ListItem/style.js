import React from 'react';
import {css} from 'emotion';

export function styleItem(restaurant) {
    return 
           css`
                background-image: backgroundImage: linear-gradient(to top, rgb(49,49,49) 0px, rgba(255,255,255,0), rgba(255,255,255, 0.3) 180px, rgba(255,255,255,0)), url("${restaurant.backgroundImageURL}");
                
           `
    
}