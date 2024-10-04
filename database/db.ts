import { SQLiteDatabase } from "expo-sqlite";

async function initializeDatabase(db: SQLiteDatabase) {
    try {
        const stocksQuery = `
            CREATE TABLE IF NOT EXISTS stocks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                image TEXT,
                quantity TEXT,
                price TEXT
            )
        `
        await db.execAsync(stocksQuery)
    } catch (error) {
        console.log("Error while initializing database: ", error)
    }
}

export default initializeDatabase;