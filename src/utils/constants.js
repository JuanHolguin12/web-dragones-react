export const ENV = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TEST: 'test',
    SHEETS: {
        SHEETID: import.meta.env.VITE_SHEET_ID,
        APIKEY: import.meta.env.VITE_SHEET_API_KEY,
        RANGE: import.meta.env.VITE_SHEET_RANGE,
        RANGE_PROGRAMMING: {
            saturday: import.meta.env.VITE_SHEET_RANGE_PROGRAMMING + '!A2:I2000',
            sunday: import.meta.env.VITE_SHEET_RANGE_PROGRAMMING + '!K2:S2000',
            monday: import.meta.env.VITE_SHEET_RANGE_PROGRAMMING + '!U2:AC2000',
            thusday: import.meta.env.VITE_SHEET_RANGE_PROGRAMMING + '!AE2:AM2000',
        }
    },
    SOCIAL_MEDIA: {
        WHATSAPP_NUMBER: "3195888599",
        FACEBOOK: "https://www.facebook.com/clubdragonesdebaloncesto?locale=es_LA",
        INSTAGRAM: "https://www.instagram.com/club_dragones/",
    }
};
