import CardFeature from "@/components/group/cardFeature";

function Feature() {
  return (
    <div className="px-6 py-3  md:px-[100px]  xl:px-[250px] mt-[200px]">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="my-10">
          <h1 className="font-bold text-4xl mb-5 text-primary">
            Feature of Nakon
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 items">
            Features that you can get from the nakon platform
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <CardFeature
          title={"no ads"}
          description={"free and no ads, forever!"}
        />
        <CardFeature
          title={"easy to share"}
          description={
            "you can share the public page and questions to anyone you want quickly"
          }
        />
        <CardFeature
          title={"full privacy control"}
          description={
            "You can determine whether a question can be seen by others or not, can choose not to be seen on the explore page, can delete the account entirely"
          }
        />
        <CardFeature
          title={"read once, delete forever"}
          description={
            "No need to keep questions for a long time, after reading we will delete your question data entirely"
          }
        />
        <CardFeature
          title={"Easy Authentication"}
          description={"just fill in your personal data and you can use it"}
        />
        <CardFeature
          title={"Open Source Code"}
          description={
            "Curious how it works? Just check what's going on behind the scenes by looking directly at the source code"
          }
        />
      </div>
    </div>
  );
}

export default Feature;
