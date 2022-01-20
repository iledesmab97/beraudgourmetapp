import { ObjectType, InterfaceType, Field, ID } from "type-graphql";

@ObjectType()
export class IProducts {
    @Field(type => ID)
    id!: string;

    @Field(type => String)
    name!: string;
}

// @ObjectType({ implements: IProducts })
