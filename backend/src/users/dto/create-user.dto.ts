// src/users/dto/create-user.dto.ts

export class CreateUserDto {
  // Los campos deben coincidir con tu esquema (UserSchema)
  // Nota: Al usar DTOs, es una buena práctica usar 'readonly'
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;

  // Si tu esquema tuviera otros campos que el usuario debe proveer,
  // como una contraseña, iría aquí:
  // readonly password: string;
}
