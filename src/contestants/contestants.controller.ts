import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ContestantService } from './contestants.service';
import { CreateContestantDto } from './dto/create-contestant.dto';
import { UpdateContestantDto } from './dto/update-contestant.dto';

@Controller('contestants')
export class ContestantController {
  constructor(private readonly contestantService: ContestantService) {}

  @Post()
  create(@Body() createContestantDto: CreateContestantDto) {
    return this.contestantService.create(createContestantDto);
  }

  @Get()
  findAll() {
    return this.contestantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contestantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContestantDto: UpdateContestantDto) {
    return this.contestantService.update(id, updateContestantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contestantService.remove(id);
  }
}
