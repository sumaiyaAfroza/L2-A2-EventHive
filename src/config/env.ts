import "dotenv/config"

interface Envtype {
    port: number
}

export const envConfig : Envtype = {
  port : Number(process.env.PORT || 3000)

}