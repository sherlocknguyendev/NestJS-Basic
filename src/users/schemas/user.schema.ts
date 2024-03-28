
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


// Tạo Document -> tham chiếu xuống MongoDB để tạo ra các document
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    age: number;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedArt: Date;


}

export const UserSchema = SchemaFactory.createForClass(User);