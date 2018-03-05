// import 

export function styleItem(restaurant) {
    return {
            backgroundImage: `linear-gradient(to top, rgb(49,49,49) 0px, transparent, rgba(255,255,255, 0.3) 180px, transparent), url(${restaurant.backgroundImageURL})`,
    }
}