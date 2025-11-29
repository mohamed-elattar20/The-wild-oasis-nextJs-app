import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/account">account</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
