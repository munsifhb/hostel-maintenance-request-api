import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { HostelModule } from './hostel/hostel.module';
import { MaintanancerequestModule } from './maintanancerequest/maintanancerequest.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    HostelModule,
    MaintanancerequestModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
