import { getAllPosts } from "@/utils";

const estimateReadingTime = (text: string, wordsPerMinute = 200): number => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute); // in minutes
};

const Feed = () => {
  const { articles, projects } = getAllPosts();

  return (
    <>
      {articles && (
        <ul className="list pl-0 mt-0">
          <h2 className="p-8 pb-2 h-1 tracking-wide text-3xl mb-12 mt-0 k">
            Latest Articles...
          </h2>
          {articles.map(({ dir, content, metadata }, index) => {
            if (metadata) {
              const { title, date, descr, thumbnail, draft } =
                metadata.data as {
                  title: string;
                  date: string;
                  descr: string;
                  thumbnail: string;
                  draft: boolean;
                };
              const readingTime = estimateReadingTime(content);
              if (!draft)
                return (
                  <li key={index} className="list-row px-8">
                    <a href={`${dir}`} className="no-underline">
                      <div className="flex  gap-4">
                        <img
                          className="size-24 rounded-box m-0!"
                          src={thumbnail}
                        />
                        <div>
                          <h3 className="card-title mt-0 mb-0">{title}</h3>
                          <p className="font-normal">{descr}</p>
                          <div className="flex gap-4 items-center">
                            <p className=" font-light">{date}</p>
                            <div className="badge badge-soft badge-primary badge-sm">
                              {readingTime} min
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
            }
          })}
        </ul>
      )}
      {projects && (
        <ul className="list pl-0 mt-0">
          <h2 className="p-8 pb-2 h-1 tracking-wide text-3xl mb-12 mt-0 k">
            Latest Projects...
          </h2>
          {projects.map(({ dir, content, metadata }, index) => {
            if (metadata) {
              const { title, date, descr, thumbnail, draft, tags } =
                metadata.data as {
                  title: string;
                  date: string;
                  descr: string;
                  thumbnail: string;
                  draft: boolean;
                  tags: string;
                };
              const readingTime = estimateReadingTime(content);
              if (!draft)
                return (
                  <li key={index} className="list-row px-8">
                    <a href={`${dir}`} className="no-underline">
                      <div className="flex  gap-4">
                        <img
                          className="size-24 rounded-box m-0!"
                          src={thumbnail}
                        />
                        <div>
                          <h3 className="card-title mt-0 mb-0">{title}</h3>
                          <p className="font-normal">{descr}</p>
                          <p className=" font-light">{tags}</p>
                          <div className="flex gap-4 items-center">
                            <p className=" font-light">{date}</p>

                            <div className="badge badge-soft badge-primary badge-sm">
                              {readingTime} min
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
            }
          })}
        </ul>
      )}
    </>
  );
};

export default Feed;
