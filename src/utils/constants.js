export const ENV = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TEST: 'test',
    SHEETS: {
        SHEETID: import.meta.env.VITE_SHEET_ID,
        APIKEY: import.meta.env.VITE_SHEET_API_KEY,
        RANGE: import.meta.env.VITE_SHEET_RANGE,
        RANGE_PROGRAMMING: import.meta.env.VITE_SHEET_RANGE_PROGRAMMING
    },
    WHATSAPP_NUMBER: "3195888599",
};
