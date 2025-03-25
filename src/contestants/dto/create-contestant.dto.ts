import { IsUUID, IsString, IsInt, Min, Max, IsEnum } from 'class-validator';
import { ContestantStatus } from '../enums/contestant-status.enum';



export class CreateContestantDto {
  @IsUUID()
  id: string; // Unique contestant ID

  @IsString()
  name: string; // Contestant’s full name

  @IsString()
  nickname: string; // Battle name

  @IsString()
  origin: string; // Region or dictator who owns them

  @IsInt()
  @Min(1)
  @Max(100)
  strength: number; // Fighting ability score

  @IsInt()
  @Min(1)
  @Max(100)
  agility: number; // Speed and reflexes

  @IsInt()
  wins: number; // Number of fights won

  @IsInt()
  losses: number; // Number of fights lost

  @IsEnum(ContestantStatus)
  status: ContestantStatus; // Current state
}
