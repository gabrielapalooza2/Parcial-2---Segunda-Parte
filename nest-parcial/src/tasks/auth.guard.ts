import {CanActivate, ExecutionContext, Injectable, ForbiddenException} from '@nestjs/common';

@Injectable()

export class AuthGuard implements CanActivate{

    canActivate(context: ExecutionContext){
        const req = context.switchToHttp().getRequest();
 
        const authHeader = req.headers['authorization'];
        if(authHeader !== 'admin-secret-token'){
            throw new ForbiddenException('Prohibido');
        }
        return true;
    }

}