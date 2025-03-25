import { IsUUID, IsBoolean, IsString, IsOptional } from 'class-validator';

export class CreateBattleDto {
  @IsUUID()
  id: string; // Unique battle ID

  @IsUUID()
  contestant_1: string; // First fighter

  @IsUUID()
  contestant_2: string; // Second fighter

  @IsUUID()
  @IsOptional()
  winner_id?: string; // Who won the fight

  @IsBoolean()
  death_occurred: boolean; // Did anyone die?

  @IsString()
  injuries: string; // Battle damage report

  @IsString()
  date: string; // When the fight happened
}
