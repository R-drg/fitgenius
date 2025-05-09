import { ConflictException, Injectable } from '@nestjs/common';
import { DbClient, PrismaClient, User } from '@fitgenius/db';
import { UserCreate } from './user.dto';
import md5 from 'md5';

@Injectable()
export class UserService {
  constructor(private readonly dbClient: PrismaClient) {
    this.dbClient = DbClient;
  }

  async createUser(data: UserCreate): Promise<User> {
    const existingUser = await this.dbClient.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (existingUser) {
      throw new ConflictException();
    }
    const { password, ...restData } = data;
    const encryptedPassword = md5(password);
    return this.dbClient.user.create({
      data: {
        password: encryptedPassword,
        ...restData,
      },
    });
  }
}
