import image00 from '../assets/images/items/jungle-explorer.png';
import image01 from '../assets/images/items/underwater-explorer.png';
import image02 from '../assets/images/items/under-night-sky.png';
import image03 from '../assets/images/items/night-hero.png';
import image04 from '../assets/images/items/bubbles-party.png';
import image05 from '../assets/images/items/swimming-pool.png';
import image06 from '../assets/images/items/skiing-magical-sky.png';
import image07 from '../assets/images/items/umbrella-night-ride.png';

import bundle from '../assets/images/bundle.png';
import phoneWallpaper from '../assets/images/phone.png';
import desktopWallpaper from '../assets/images/desktop.png';

const freePhoneWallpaperDescription = 'Dimensions: 1024 x 1536 px\nFile Format: PNG\nLicense: Free for personal use\n\nDownload this wallpaper for free. This wallpaper is perfect for your phone.';
const freeDesktopWallpaperDescription = 'Dimensions: 1920 x 1080 px\nFile Format: PNG\nLicense: Free for personal use\n\nDownload this wallpaper for free. This wallpaper is perfect for your desktop.';
const paidPhoneWallpaperDescription = 'Dimensions: 1024 x 1536 px\nFile Format: PNG\nLicense: Personal Use\n\nDownload this wallpaper for $2.00. This wallpaper is perfect for your phone.';
const paidDesktopWallpaperDescription = 'Dimensions: 1920 x 1080 px\nFile Format: PNG\nLicense: Personal Use\n\nDownload this wallpaper for $2.00. This wallpaper is perfect for your desktop.';

const itemsData = [
    {
        id: 1000,
        imagePath: image00,
        sliderImagePath: [image00, image01],
        title: 'Jungle Explorer Pikachu Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['jungle', 'explorer'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 3
    },
    {
        id: 1001,
        imagePath: image01,
        sliderImagePath: [image01, image02],
        title: 'Underwater Explorer Pikachu Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['underwater', 'explorer', 'ocean', 'boat'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 2
    },
    {
        id: 1002,
        imagePath: image02,
        title: 'Pikachu under a Night Sky Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['night', 'sky', 'stars', 'moon'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 0
    },
    {
        id: 1003,
        imagePath: image03,
        title: 'Night Hero Pikachu Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['night', 'hero', 'moon', 'stars'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 4
    },
    {
        id: 1004,
        imagePath: image04,
        title: 'Bubbles Party Pikachu Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['bubble', 'party'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 1
    },
    {
        id: 1005,
        imagePath: image05,
        title: 'Pikachu in the Swimming Pool Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['swimming', 'pool'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 0
    },
    {
        id: 1006,
        imagePath: image06,
        title: 'Pikachu Skiing under a Magical Sky Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['ski', 'magical', 'sky', 'stars'],
        type: 'Phone Wallpaper',
        free: false,
        description: paidPhoneWallpaperDescription,
        numberOfTimePurchased: 6
    },
    {
        id: 1007,
        imagePath: image07,
        title: 'Umbrella Night Ride Pikachu Phone Wallpaper',
        price: '2.00',
        iconPath: phoneWallpaper,
        tags: ['umbrella', 'night', 'ride'],
        type: 'Phone Wallpaper',
        free: true,
        description: freePhoneWallpaperDescription,
        numberOfTimePurchased: 0
    }
];

export default itemsData;