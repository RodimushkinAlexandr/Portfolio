import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ToDoDocument = ToDo & Document;

@Schema()
export class ToDo {
    
  @Prop({ required: true})
  title: string;

  @Prop()
  description: string;

  @Prop({default: false})
  completed: boolean;

  @Prop({ required: true})
  userId: string;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);