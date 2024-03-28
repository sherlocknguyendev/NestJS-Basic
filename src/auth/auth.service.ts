
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService

    ) { }

    // username và pass là 2 tham số thư viện passport trả về
    // Dùng passport-local sẽ tự động chạy vào hàm này
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password)
            if (isValid) {
                return user;
            }
        }
        return null;
    }


    // Sau khi validate ng dùng thì sẽ đăng nhập và lấy ra access_token
    async login(user: any) {
        const payload = { username: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
