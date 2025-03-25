import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';


@Injectable()
export class SponsorService {
  private sponsors: CreateSponsorDto[] = [];

  create(createSponsorDto: CreateSponsorDto) {
    const { id, ...rest } = createSponsorDto;
    const newSponsor: CreateSponsorDto = {
      id: Date.now().toString(),
      ...rest,
    };
    this.sponsors.push(newSponsor);
    return newSponsor;
  }

  findAll() {
    return this.sponsors;
  }

  findOne(id: string) {
    const sponsor = this.sponsors.find((s) => s.id === id);
    if (!sponsor) throw new NotFoundException('Sponsor not found');
    return sponsor;
  }

  update(id: string, updateSponsorDto: UpdateSponsorDto) {
    const index = this.sponsors.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Sponsor not found');

    this.sponsors[index] = { ...this.sponsors[index], ...updateSponsorDto };
    return this.sponsors[index];
  }

  remove(id: string) {
    const index = this.sponsors.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Sponsor not found');

    this.sponsors.splice(index, 1);
  }
}