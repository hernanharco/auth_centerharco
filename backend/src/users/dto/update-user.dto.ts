import { PartialType } from '@nestjs/mapped-types';

// Creamos un DTO base con los campos obligatorios para tipificar
class CreateUserDto {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
}

// PartialType hace que todos los campos del DTO base sean opcionales.
export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Puedes dejarlo vacío ya que hereda y hace opcionales los campos
}
