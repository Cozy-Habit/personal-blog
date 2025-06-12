import Link from "next/link";

const Socials = () => {
  return (
    <ul className="flex pl-0 list-none gap-4 mt-0 mb-0">
      <li>
        <Link href="https://www.linkedin.com/in/sophia-precker-678114241/">
          <img
            src={"./linkedin.svg"}
            alt=""
            height={24}
            width={24}
            className="btn btn-ghost p-0 m-0!"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Cozy-Habit">
          <img
            src={"./github.svg"}
            alt=""
            height={24}
            width={24}
            className="btn btn-ghost p-0 m-0!"
          />
        </Link>
      </li>
      <li>
        <Link href="mailto:sophia.precker77@gmail.com">
          <img
            src={"./email.svg"}
            alt=""
            height={24}
            width={24}
            className="btn btn-ghost p-0 m-0!"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
