function CustomFooter() {
  return (
    <>
      <footer className="shadow bg-secondary dark:bg-secondary mt-20 sticky ">
        <div className="w-full mx-auto px-6 py-10 md:px-[100px] xl:px-[250px]">
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
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
