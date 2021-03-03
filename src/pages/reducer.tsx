import {
  useUserId,
  useUserName,
  useSetUser,
  setId,
  setName,
} from "../stores/reducer";

export default function Reducer() {
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
  const id = useUserId();
  console.log("render Id: ", id);

  return <div>{id}</div>;
};

const Name: React.FC = () => {
  const name = useUserName();
  console.log("render Name: ", name);

  return <div>{name}</div>;
};

const ChangeId: React.FC = () => {
  const dispatch = useSetUser();
  console.log("render ChangeId");

  return <button onClick={() => dispatch(setId("changedId"))}>changeId</button>;
};

const ChangeName: React.FC = () => {
  const dispatch = useSetUser();
  console.log("render ChangeName");

  return (
    <button onClick={() => dispatch(setName("changedName"))}>changeName</button>
  );
};
