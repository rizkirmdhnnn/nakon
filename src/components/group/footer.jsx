import Dashboard from "@/app/dashboard/page";
import Link from "next/link";

function CustomFooter() {
  return (
    <>
      <footer className="shadow bg-secondary dark:bg-secondary mt-20 sticky ">
        <div className="w-full mx-auto px-6 py-10 md:px-[100px] xl:px-[250px]">
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024{" "}
            <Link href={"/"} className="hover:underline">
              Nakon
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}

export default CustomFooter;
