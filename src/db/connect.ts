import mongoose , {ConnectOptions} from 'mongoose';
import config from 'config';
import log from '../logger'

function Dbconnection() {
    const dbUri = config.get("dbUri") as string;

    return  mongoose
            .connect(dbUri ,  {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
            .then(() => {
                log.info("Database connected")
            })
            .catch(( err ) => {
                log.error("db error", err)
            })
}

export default Dbconnection