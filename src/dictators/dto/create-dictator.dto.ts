import { IsUUID, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateDictatorDto {
  @IsUUID()
  id: string; // Unique dictator ID

  @IsString()
  name: string; // Full name

  @IsString()
  territory: string; // Region they rule

  @IsInt()
  number_of_slaves: number; // How many slaves they own

  @IsInt()
  @Min(1)
  @Max(100)
  loyalty_to_Carolina: number; // Risk level of betrayal
}
