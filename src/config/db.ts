import { Pool } from "pg";
import { envConfig } from "./env";

export const pool = new Pool({
    connectionString: envConfig.database_url
})