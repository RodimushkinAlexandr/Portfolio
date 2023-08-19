import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ToDoDocument = ToDo & Document;

@Schema()
export class ToDo {
    
  @Prop({ required: true})
  text: string;

  @Prop({default: false})
  complited: boolean;

  @Prop({default: false})
  selected: boolean

  @Prop({ required: true})
  userId: string;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);