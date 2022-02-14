const getImages = async (file: string) =>
  await (
    await fetch(
      (process.env.NODE_ENV === "production" ? "https://words-aas.vercel.app/db/" : "http://localhost:3000/db/") +
        file,
    )
  ).json();

export async function getImagesFromCategory(category: string) {
    let images = await getImages('images.json');

    if(category === "famille") {
        let imagesFiltered = images.filter(image => image.category === "famille");
        return imagesFiltered;
    }
    else if(category === "portrait") {
        let imagesFiltered = images.filter(image => image.category === "portrait");
        return imagesFiltered;
    }
    else if(category === "couple") {
        let imagesFiltered = images.filter(image => image.category === "couple");
        return imagesFiltered;
    }
  
    return images;
  }