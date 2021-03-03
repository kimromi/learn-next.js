import { useMemo } from "react";
import { useUserId, useUserName } from "../stores/context";

export default function Context() {
  console.log("render Home");

  return (
    <>
      <Id />
      <Name />
      <ChangeId />
      <ChangeName />
    </>
  );
}

const Id: React.FC = () => {
  const { id } = useUserId();

  return useMemo(() => {
    console.log("render Id: ", id);
    return <div>{id}</div>;
  }, [id]);
};

const Name: React.FC = () => {
  const { name } = useUserName();

  return useMemo(() => {
    console.log("render Name: ", name);
    return <div>{name}</div>;
  }, [name]);
};

const ChangeId: React.FC = () => {
  const { setId } = useUserId();

  return useMemo(() => {
    console.log("render ChangeId");
    return <button onClick={() => setId("changedId")}>changeId</button>;
  }, [setId]);
};

const ChangeName: React.FC = () => {
  const { setName } = useUserName();

  return useMemo(() => {
    console.log("render ChangeName");
    return <button onClick={() => setName("changedName")}>changeName</button>;
  }, [setName]);
};
