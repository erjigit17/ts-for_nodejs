import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

import Messenger from './src/controllers/createMessage';
import settings from './settings';

const app = express();

// mongoose connection
mongoose.connect(settings.database);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// instance of our class
const messages = new  Messenger(settings.PORT)



function getName <T>(name: T): T {
    return name
}

const myName = getName<number>(22)

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(myName)
);

app.listen(settings.PORT, () =>
    console.log(myName, messages.printMessage())
);