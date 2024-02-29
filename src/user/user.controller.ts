
import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user') // Controller sẽ phụ trách route xuất phát là '/user'
export class UserController {

    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Delete("/by-id") // Muốn test route trên browser phải dùng method get
    findById(): string {
        return 'This action will delete a user by id';
    }

}
