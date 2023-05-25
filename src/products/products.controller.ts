import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { query } from 'express';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() CreateProductDto: CreateProductDto) {
    return this.productsService.create(CreateProductDto);
  }
  @Get()
  findAll(@Query('q') query: string) {
  return this.productsService.findAll(query);
}
@Get(':totalQty')
async groupBy(@Query('name') query: string) {
  return this.productsService.groupBy(query);
}
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    const productId = await this.productsService.findOne(id);
    if (!productId) {
      throw new NotFoundException(`product with ${id} does not exist.`);
    }
    return productId;
  }
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id', ParseIntPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.productsService.remove(id);
  }
}
