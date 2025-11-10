import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        // <-- Se quita 'async' si no hay 'await'

        // 1. Obtener las variables del .env
        const user = configService.get<string>('MONGO_ATLAS_USERNAME')!;
        const password = configService.get<string>('MONGO_ATLAS_PASSWORD')!;
        const host = configService.get<string>('MONGO_ATLAS_HOST')!;
        const database = configService.get<string>('MONGO_DATABASE_NAME')!;

        // CONSTRUCCIÓN SEGURA: Codificar usuario y contraseña para evitar errores de autenticación (bad auth)
        const encodedUser = encodeURIComponent(user);
        const encodedPassword = encodeURIComponent(password);

        // 2. Construir la URI completa (Connection String)
        const atlasUri = `mongodb+srv://${encodedUser}:${encodedPassword}@${host}/${database}?appName=HarcoCluster&retryWrites=true&w=majority`;

        // 3. Devolver la configuración a Mongoose
        return {
          uri: atlasUri,
        };
      },
      inject: [ConfigService],
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
