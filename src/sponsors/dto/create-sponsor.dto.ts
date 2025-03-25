import { IsUUID, IsString } from 'class-validator';

export class CreateSponsorDto {
  @IsUUID()
  id: string; // Unique sponsor ID

  @IsString()
  company_name: string; // Evil corporation name

  @IsString()
  donated_items: string; // List of weapons, drugs, or armor donated

  @IsUUID()
  preferred_fighter: string; // Which contestant they support
}