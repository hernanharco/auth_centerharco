import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Crea un nuevo usuario en la base de datos.
   */
  async create(userDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  /**
   * Busca y devuelve todos los usuarios.
   */
  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  /**
   * Busca un usuario por su ID de MongoDB (_id).
   */
  async findOne(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  /**
   * Busca un usuario por el campo 'email'.
   */
  async findOneByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Actualiza un usuario por ID, usando el DTO tipado.
   */
  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument | null> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  /**
   * Elimina un usuario por ID.
   */
  async remove(id: string): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
