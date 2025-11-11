import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    // 💡 Paso Clave: Importa MongooseModule.forFeature() para registrar el modelo
    MongooseModule.forFeature([
      {
        name: User.name, // El nombre que Mongoose usará para la colección (ej: 'users')
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService], // Exporta el servicio si otros módulos lo necesitan
})
export class UsersModule {}
