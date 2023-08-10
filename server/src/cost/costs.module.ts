import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostsService } from './costs.service';
import { Cost, CostsSchema } from './schemas/costs.schemas';
import { CostsController } from './costs.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Cost.name, schema: CostsSchema}]),
        AuthModule
    ],
    providers: [CostsService],
    controllers: [CostsController]
})
export class CostModule {}
