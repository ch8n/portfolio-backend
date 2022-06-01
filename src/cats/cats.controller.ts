import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller(`cats`)
export class CatsController {
  @Get()
  getCats() {
    return `This action get all the cats`;
  }

  @Get(':id')
  getCat(@Param('id') id: number) {
    return `This action returns a cat with id${id}`;
  }

  @Post('createCat')
  createCat(@Body() cat: CreateCatDto) {
    return `This action adds a new cat ${cat.name}`;
  }

  @Put(`updateCat/:id`)
  updateCat(@Param(`id`) id: number, @Body() updatedCat: UpdateCatDto) {
    return `this will update cat with ${id} with ${updatedCat}`;
  }

  @Delete(`removeCat/:id`)
  removeCat(@Param(`id`) id: string) {
    return `this will remove cat with ${id}`;
  }

  @Get('gotoBlog')
  @Redirect('https://chetangupta.net', 301)
  gotoBlog() {}
}
