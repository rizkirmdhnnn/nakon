function CustomFooter() {
  return (
    <>
      <footer className="shadow bg-secondary dark:bg-secondary mt-20 sticky ">
        <div className="w-full mx-auto px-6 py-10 md:px-[100px] xl:px-[250px]">
          {/* <div className="sm:flex sm:items-center sm:justify-between">
            <div
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <h1 className="text-2xl font-bold">
                {" "}
                <Link href="/">Nakon</Link>
              </h1>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className=" hover:underline me-4 md:me-6">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline me-4 md:me-6">
                  Source Code
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Keluar
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://localhost:8000" className="hover:underline">
              Nakon
            </a>
            . copyright
          </span>
        </div>
      </footer>
    </>
  );
}

export default CustomFooter;
