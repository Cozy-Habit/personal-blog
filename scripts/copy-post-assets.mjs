import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, "..", "src", "posts", "articles");
const projectsDir = path.join(__dirname, "..", "src", "posts", "projects");

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
function copyAssets(folderPath, publicFolderPath, subfolder) {
  const publicSubfolderPath = path.join(publicFolderPath, subfolder);

  if (fs.existsSync(publicSubfolderPath)) {
    deleteFolderRecursive(publicSubfolderPath);
    console.log(`✅ Cleaned assets for path ${publicSubfolderPath}`);
  }

  const folders = fs.readdirSync(folderPath);

  folders.forEach((folder) => {
    const assetSource = path.join(folderPath, folder, "assets");
    const assetDest = path.join(publicSubfolderPath, folder);

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

  console.log(
    `✅ Copied post assets for path ${folderPath} into ${publicSubfolderPath}`
  );
}

copyAssets(articlesDir, publicPostsDir, "articles");
copyAssets(projectsDir, publicPostsDir, "projects");
