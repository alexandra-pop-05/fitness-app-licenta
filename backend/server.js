const express = require('express');
const userRouter = require('./routes/users_routes');
const authRouter = require('./routes/auth_routes');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser);

app.use('/api/users', userRouter);
app.use('/api', authRouter); //authentication 


app.listen(3000, () => {
    console.log('Server running on port 3000...');
});