import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left text-4xl font-bold text-blue-700">
        {type} Post
      </h1>
      <p className="desc text-left max-w-md text-gray-700">
        {type} and share amazing ideas with the world.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-6 p-8 bg-white border rounded-md shadow-md"
      >
        <label className="mb-4">
          <span className="block font-semibold text-base text-gray-700 mb-2">
            Your Startup Idea
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea resize-none rounded-md p-4 border focus:outline-none focus:border-blue-500 w-full"
          />
        </label>

        <label className="mb-4">
          <span className="block font-semibold text-base text-gray-700 mb-2">
            Startup Area{" "}
            <span className="font-normal text-sm">
              (#Artificial Intelligence, #Software, #Educational, #Ecommerce, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input rounded-md p-4 border focus:outline-none focus:border-blue-500 w-full"
          />
        </label>

        <div className="flex justify-end items-center gap-4">
          <Link href="/" passHref>
          Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white focus:outline-none hover:bg-opacity-80 transition-all"
          >
            {submitting ? `$Creating...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
