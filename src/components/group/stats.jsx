import { Card } from "@/components/ui/card";

function Stats() {
  return (
    <>
      <div className="px-6 py-3  md:px-[100px]  xl:px-[250px] mt-[200px]">
        <div className="flex flex-col justify-center text-center items-center">
          <div className="my-10">
            <h1 className="font-bold text-4xl mb-5 text-primary">Statistik</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 items">
            user statiscs on the nakon platform(wannabe)
            </p>
          </div>
        </div>
        <Card className="px-6 py-3 md:px-[100px] xl:px-[250px]">
          <dl className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 grid-cols-1 p-4 mx-auto ">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold  text-gray-500 dark:text-gray-400 ">
                73M+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">visitors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">
                10M+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Questions</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">
                10M+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Accounts</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">
                1B+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">
                90+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Sponsor</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">
                4M+
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Organisations</dd>
            </div>
          </dl>
        </Card>
      </div>
    </>
  );
}

export default Stats;
