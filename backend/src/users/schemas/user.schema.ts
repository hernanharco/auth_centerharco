import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 1. Define el tipo de documento (Document es el tipo base de Mongoose)
export type UserDocument = User & Document;

// 2. Define la clase Schema usando el decorador @Schema
@Schema()
export class User {
  // Define el primer campo: 'email'
  @Prop({
    required: true, // Indica que el campo es obligatorio
    unique: true, // Indica que no puede haber dos emails iguales
    trim: true, // Elimina espacios en blanco al inicio y final
  })
  email: string;

  // Puedes añadir más campos, por ejemplo:
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: Date.now }) // Establece un valor por defecto si no se proporciona
  createdAt: Date;
}

// 3. Crea el Schema a partir de la clase (esto es lo que Mongoose usará)
export const UserSchema = SchemaFactory.createForClass(User);
