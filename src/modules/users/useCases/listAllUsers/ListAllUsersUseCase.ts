import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id as string);

    if (!user) throw new Error("User not found!");

    if (!user.admin) throw new Error("You are not an admin");

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
