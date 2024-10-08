import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UniversityModule } from './university/university.module';
import { DepartmentsModule } from './departments/departments.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, UniversityModule, DepartmentsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
