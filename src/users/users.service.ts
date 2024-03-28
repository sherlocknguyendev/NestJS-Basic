import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class UsersService {

  // InjectModel: Kết nối NestJS với MongoDB (tiêm Model từ Mongo vào Nest để sd)
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(createUserDto.password);
    const userAfterHashPass = {
      ...createUserDto,
      password: hashPassword
    }
    let user = await this.userModel.create(userAfterHashPass)
    return user;
  }



  findAll() {
    return `This action returns all users`;
  }



  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return 'Not Found User!';

    return this.userModel.findOne({
      _id: id
    })
  }


  findOneByUsername(username: string) {
    return this.userModel.findOne({
      email: username
    })
  }


  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash)
  }



  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto })
  }



  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return 'Not Found User!';

    return this.userModel.deleteOne({
      _id: id
    })
  }
}
