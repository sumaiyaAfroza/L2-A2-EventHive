import { pool } from "./db"

export const dbSchemas : string[] = [`
     CREATE TABLE IF NOT EXISTS users (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name VARCHAR(25) NOT NULL,
     email VARVHAR(50) UNIQUE NOT NULL,
     Password VARCHAR(100) NOT NULL,
     role VARCHAR(20) NOT NULL DEFAULT 'attendee' CHECK (role IN('attendee','organizer')),
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
     )
    `]

    

    export const databaseSchema = async() : Promise<void> => {
        for (const schema of dbSchemas) {
        await pool.query(schema)
    }
 }
