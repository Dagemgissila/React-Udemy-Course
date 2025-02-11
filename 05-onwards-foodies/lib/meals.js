import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import path from "path";
const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const image = meal.image;
  if (!image) {
    throw new Error("No image uploaded");
  }

  const extension = image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const imagePath = path.join(process.cwd(), "public", "images", filename);

  try {
    // Convert image to Buffer
    const imageBuffer = await image.arrayBuffer();
    fs.writeFileSync(imagePath, Buffer.from(imageBuffer)); // Save image file

    meal.image = `/images/${filename}`; // Correct the image path
  } catch (error) {
    throw new Error("Saving Image Failed: " + error.message);
  }

  db.prepare(
    `INSERT INTO meals (title, creator, slug, instructions, image, creator_email, summary)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(
    meal.title,
    meal.creator,
    meal.slug,
    meal.instructions,
    meal.image,
    meal.creator_email,
    meal.summary
  );
}
