
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService
    ) {
        super({
            // Lấy token từ header và decode
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Lấy token từ header đã truyền
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN'), // Lấy khóa từ .env để so sánh 
        });
    }

    // Trả lại dữ liệu sau khi decode 
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}