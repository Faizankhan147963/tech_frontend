import React from "react"
const NEWS = () => {
  const blogPosts = [
    {
      title: "Massa Vitae Toutor Condimentum Lacini.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "https://iamosahan.com/pillarix/demo/bank/img/blog/1.jpeg",
      categories: ["AGENCY", "NEWS"],
    },
    {
      title: "Venenatis Urna Cursus Eget Nunc Scelerisque",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "https://iamosahan.com/pillarix/demo/bank/img/blog/2.jpeg",
      categories: ["NEWS"],
    },
    {
      title: "Donec Adipiscing Tristique Risus Nec",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "https://iamosahan.com/pillarix/demo/bank/img/blog/3.jpeg",
      categories: ["NEWS"],
    },
  ]

  return (
    <div className="min-h-screen    px-4 py-16">
      

      {/* Top Banner */}
      <div className="mb-20 rounded-3xl bg-[#53CBFF] p-8 md:p-12 container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Have a Financial Project in Mind?</h2>
            <p className="mt-2 max-w-xl text-gray-800">
              Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi sagittis.
            </p>
          </div>
          <button className="w-fit rounded-full border-2 border-black bg-transparent px-6 py-3 font-semibold transition-colors hover:bg-black hover:text-white">
            Get in Touch
          </button>
        </div>
      </div>

      {/* News Section */}
      <div className="mx-auto container ">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">News</h3>
          <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            Latest from
            <br />
            <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">Client's</span> Blog
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est
            pulvinar non. Praesent tristique enim lorem.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex gap-2">
                  {post.categories.map((category, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NEWS

