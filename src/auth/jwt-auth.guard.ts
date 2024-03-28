
import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();

    }
    canActivate(context: ExecutionContext) {
        // Lấy ra metadata khi gửi kèm request để kiểm tra 
        // reflector để lấy ra metadata
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        // Nếu truyền metadata vào thì sẽ bỏ qua phần check guard -> public route (k bảo vệ route = jwt nữa)
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new UnauthorizedException("Token k hợp lệ hoặc k đúng định dạng");
        }
        return user;
    }
}