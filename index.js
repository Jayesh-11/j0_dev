async function main() {
  const res = await fetch("https://gist.githubusercontent.com/Jayesh-11/b2cc765f9d48dc9b0935141c0f429e53/raw/4d0e6fbc279e4c87fcc1703757e5022036b7b52c/blogs.json");
  const blogs = await res.json();
  const fuse = new Fuse(blogs, {
    keys: ["publishedDate", "tags", "title"],
    threshold: 0.4,
  });

  const blogListElement = document.getElementById("blog-list");
  for (let i = 0; i < (blogs ?? []).length; i++) {
    const blogElement = document.createElement("div");
    blogElement.className = "blog-element";

    const hyperlinkElement = document.createElement("a");
    // hyperlinkElement.href = blogs[i].link;
	hyperlinkElement.href = `blog.html/${blogs[i].ref}`;
	hyperlinkElement.target = "_blank";
    hyperlinkElement.innerText = blogs[i].title;
    hyperlinkElement.className = "blog-link";

    const dateElement = document.createElement("span");
    dateElement.innerText = blogs[i].publishedDate;

    blogListElement.appendChild(blogElement);
    blogElement.appendChild(hyperlinkElement);
    blogElement.appendChild(dateElement);
  }

  document
    .getElementById("blog-search")
    .addEventListener("input", function (e) {
      const value = e.target.value;
      if (value === "") {
        for (let i = 0; i < (blogs ?? []).length; i++) {
          const blogElement = document.createElement("div");
          blogElement.className = "blog-element";

          const hyperlinkElement = document.createElement("a");
          // hyperlinkElement.href = blogs[i].link;
          hyperlinkElement.href = `blog.html/${blogs[i].ref}`;
          hyperlinkElement.target = "_blank";
          hyperlinkElement.innerText = blogs[i].title;
          hyperlinkElement.className = "blog-link";

          const dateElement = document.createElement("span");
          dateElement.innerText = blogs[i].publishedDate;

          blogListElement.appendChild(blogElement);
          blogElement.appendChild(hyperlinkElement);
          blogElement.appendChild(dateElement);
        }
      }
      const searchResult = fuse.search(value);
      const blogListElement = document.getElementById("blog-list");

      blogListElement.replaceChildren();
      // we can also remove the elmemts that are not needed to be removed, expensive commit and all

      for (let i = 0; i < searchResult.length; i++) {
        const blogElement = document.createElement("div");
        blogElement.className = "blog-element";

        const hyperlinkElement = document.createElement("a");
        // hyperlinkElement.href = searchResult[i].item.link;
		hyperlinkElement.href = `blog.html/${blogs[i].ref}`;
		hyperlinkElement.target = "_blank";
        hyperlinkElement.innerText = searchResult[i].item.title;
        hyperlinkElement.className = "blog-link";

        const dateElement = document.createElement("span");
        dateElement.innerText = searchResult[i].item.publishedDate;

        blogListElement.appendChild(blogElement);
        blogElement.appendChild(hyperlinkElement);
        blogElement.appendChild(dateElement);
      }
    });
}
main();
