// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { ObjectId } from 'mongodb';
// import { Document } from 'mongoose';
// import * as mongoose from 'mongoose'
// import { User } from 'src/users/schema/users.schema';


// export type ToDoDocument = ToDo & Document;

// @Schema()
// export class ToDo {
    
//   @Prop()
//   title: string;

//   @Prop()
//   description: string;

//   @Prop({default: false})
//   completed: boolean;

//   @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
//   user: User;
// }

// export const ToDoSchema = SchemaFactory.createForClass(ToDo);