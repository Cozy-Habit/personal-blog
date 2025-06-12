import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, "..", "src", "posts");
const publicPostsDir = path.join(
  __dirname,
  "..",
  "public",
  "_generated",
  "posts"
);

// Helper to delete a folder recursively
function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

// Copy post assets
function copyAssets() {
  // Clean up old public/posts folder
  if (fs.existsSync(publicPostsDir)) {
    deleteFolderRecursive(publicPostsDir);
  }
  fs.mkdirSync(publicPostsDir, { recursive: true });

  const postFolders = fs.readdirSync(postsDir);

  postFolders.forEach((postFolder) => {
    const assetSource = path.join(postsDir, postFolder, "assets");
    const assetDest = path.join(publicPostsDir, postFolder);

    if (fs.existsSync(assetSource)) {
      fs.mkdirSync(assetDest, { recursive: true });

      const files = fs.readdirSync(assetSource);
      files.forEach((file) => {
        const src = path.join(assetSource, file);
        const dest = path.join(assetDest, file);
        fs.copyFileSync(src, dest);
      });
    }
  });

  console.log("✅ Cleaned and copied post assets");
}

copyAssets();
