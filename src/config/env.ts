import "dotenv/config"

interface Envtype {
    port: number,
    database_url: string | undefined

}

export const envConfig : Envtype = {
  port : Number(process.env.PORT || 3000),
  database_url: process.env.DATABASE_URL

}