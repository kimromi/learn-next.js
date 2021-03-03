import { useDispatch, useSelector } from "react-redux";
import { TStores, TUser, changeId, changeName } from "../stores/redux";

export default function Redux() {
  const dispatch = useDispatch();
  console.log("render Home");

  return (
    <>
      <Id />
      <Name />
      <button onClick={() => dispatch(changeId("changedId"))}>changeId</button>
      <button onClick={() => dispatch(changeName("changedName"))}>
        changeName
      </button>
    </>
  );
}

const Id: React.FC = () => {
  const id = useSelector<TStores, TUser["id"]>((state) => state.user.id);
  console.log("render Id: ", id);

  return <div>{id}</div>;
};

const Name: React.FC = () => {
  const name = useSelector<TStores, TUser["name"]>((state) => state.user.name);
  console.log("render Name: ", name);

  return <div>{name}</div>;
};
