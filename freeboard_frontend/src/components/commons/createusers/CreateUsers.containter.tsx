import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { withAuthYes } from "../hocs/withAuth";
import CreateUsersUI from "./CreateUsers.presenter";
import { CREATE_USER } from "./CreateUsers.queries";

function CreateUsers() {
  const [emailSubmit, setEmailSubmit] = useState("");
  const [nameSubmit, setNamesubmit] = useState("");
  const [passwordSubmit, setPasswordSubmit] = useState("");
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmailSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailSubmit(event.target.value);
  };
  const onChangeNameSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setNamesubmit(event.target.value);
  };
  const onChangePasswordSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordSubmit(event.target.value);
  };
  const onClickCreateUsers = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: emailSubmit,
            name: nameSubmit,
            password: passwordSubmit,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다" });
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <CreateUsersUI
      onChangeEmailSubmit={onChangeEmailSubmit}
      onChangeNameSubmit={onChangeNameSubmit}
      onChangePasswordSubmit={onChangePasswordSubmit}
      onClickCreateUsers={onClickCreateUsers}
    />
  );
}
export default withAuthYes(CreateUsers);
