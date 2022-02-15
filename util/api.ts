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
    else if(category === "mariage") {
        let imagesFiltered = images.filter(image => image.category === "mariage");
        return imagesFiltered;
    }
    else if(category === "bebe") {
        let imagesFiltered = images.filter(image => image.category === "bebe");
        return imagesFiltered;
    }
    else if(category === "grossesse") {
        let imagesFiltered = images.filter(image => image.category === "grossesse");
        return imagesFiltered;
    }
    else if(category === "bapteme") {
        let imagesFiltered = images.filter(image => image.category === "bapteme");
        return imagesFiltered;
    }
    else if(category === "couple") {
        let imagesFiltered = images.filter(image => image.category === "couple");
        return imagesFiltered;
    }
  
    return images;
  }