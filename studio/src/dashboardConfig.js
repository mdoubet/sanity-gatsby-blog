export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605266cb909c01481666ee42",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bef6v5m1",
                  apiId: "254b0e02-12ef-4257-b124-83df0902a8bd",
                },
                {
                  buildHookId: "605266cba97c1c3c4b003811",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-um16c8c4",
                  apiId: "71d6c010-7bc8-4258-8b3e-4bf19729acf7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mdoubet/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-um16c8c4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
