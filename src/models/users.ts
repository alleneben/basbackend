import { Entity, Column, PrimaryGeneratedColumn, getConnection, OneToMany } from "typeorm";

@Entity("users")
export class Users {
	@PrimaryGeneratedColumn("increment")
	user_id: number | undefined;

	@Column()
	username!: string;


	static repository() {
		return getConnection().getRepository(this)
	}
}