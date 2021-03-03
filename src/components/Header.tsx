import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div>
      <Link href="/">Top</Link>
      &nbsp;
      <Link href="/redux">Redux</Link>
      &nbsp;
      <Link href="/context">useContext</Link>
      &nbsp;
      <Link href="/reducer">useReducer</Link>
    </div>
  );
};
