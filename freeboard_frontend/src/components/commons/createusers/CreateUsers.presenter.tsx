import CreateUserButtonPage from "../buttons/createUserbutton/button";
import CreateUserInputsPage from "../inputs/createUsersInput/Input";
import { ICreateUsersUIProps } from "./CreateUsers.types";

export default function CreateUsersUI(props: ICreateUsersUIProps) {
  return (
    <>
      <form>
        이메일:{" "}
        <CreateUserInputsPage type="text" register={props.register("email")} />
        <div>{props.formState.errors.email?.message}</div>
        이름:{" "}
        <CreateUserInputsPage type="text" register={props.register("name")} />
        <div>{props.formState.errors.name?.message}</div>
        비밀번호:{" "}
        <CreateUserInputsPage
          type="password"
          register={props.register("password")}
        />
        <div>{props.formState.errors.password?.message}</div>
        <CreateUserButtonPage
          title={"회원가입하기"}
          handleSubmit={props.handleSubmit}
          onClickCreateUsers={props.onClickCreateUsers}
        ></CreateUserButtonPage>
      </form>{" "}
    </>
  );
}
