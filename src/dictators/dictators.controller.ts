import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { DictatorService } from './dictators.service';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';

@Controller('dictators')
export class DictatorController {
  constructor(private readonly dictatorService: DictatorService) {}

  @Post()
  create(@Body() createDictatorDto: CreateDictatorDto) {
    return this.dictatorService.create(createDictatorDto);
  }

  @Get()
  findAll() {
    return this.dictatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictatorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDictatorDto: UpdateDictatorDto) {
    return this.dictatorService.update(id, updateDictatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictatorService.remove(id);
  }
}
