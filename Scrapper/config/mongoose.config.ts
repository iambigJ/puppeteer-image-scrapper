import { MongooseModule } from '@nestjs/mongoose';

export const mongooseConfig = MongooseModule.forRootAsync({
    useFactory: () => ({
        uri: 'mongodb://localhost/scrapper',
        connectionFactory: (connection) => {
            connection.on('connected', () => {
                console.log('MongoDB connected');
            });

            connection.on('error', (error) => {
                console.error('MongoDB connection error:', error);
            });

            // You can perform additional setup here
            connection._events.connected();
            return connection;
        },
    }),
});