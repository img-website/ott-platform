import { google } from "googleapis";

export const getSheetData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    })

    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() })
    // const range = "Sheet1!A:Z";
    const range = "Sheet2!A:E";

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        });
        console.log('response-->', response.data.values);
        let data = [];
        for (let i = 1; i < response.data.values.length; i++) {
            let obj = {};
            for (let j = 0; j < response.data.values[i].length; j++) {
                obj[response.data.values[0][j]] = response.data.values[i][j];
            }
            data.push(obj);
        }
        console.log(response.data.values)
        return extractData(response.data.values)
    } catch (error) {
        console.error("Error fetching sheets data:", error);
        return []
    }
}

const extractData = (arr) => {
    let data = [];
    for (let i = 1; i < arr.length; i++) {
        let obj = {};
        for (let j = 0; j < arr[i].length; j++) {
            obj[arr[0][j]] = arr[i][j];
        }
        data.push(obj);
    }

    console.log(data);
    // return data;
};
