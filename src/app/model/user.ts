import {UserStatus} from './user-status';

export interface User{
 id: number;
 firstName: string;
 lastName: string;
 image: string;
 login: string;
 password: string;
 email: string;
 userStatus: UserStatus;
}
