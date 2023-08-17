import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CostsDocument = Cost & Document;

@Schema()
export class Cost {

  @Prop()
  comment: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, default: new Date() })
  date: Date;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true})
  userId: string;
}

export const CostsSchema = SchemaFactory.createForClass(Cost);