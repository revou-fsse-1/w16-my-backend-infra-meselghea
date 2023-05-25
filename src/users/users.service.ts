import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

 async update(id: number, updateUserDto: UpdateUserDto) {
   if (updateUserDto.password) {
      const salt = await bcrypt.genSalt(saltRounds);
      updateUserDto.password = await bcrypt.hash( updateUserDto.password, salt );
    }
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id }});
  }
  findByUsername(username: string, email: string) {
    return this.prisma.user.findUnique({ where: { username: username, email: email}});
  }
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
