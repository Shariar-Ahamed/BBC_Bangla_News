// promise -> pinding, resolve(success), reject(error)

const categoryContainer = document.getElementById ("categoryContainer")

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories") // promise
    .then((res) => res.json()) // res -- promise
    .then((data) => {
      // console.log(data.categories);

      const categories = data.categories;
      // console.log(categories)
      showCategory(categories)
    })
    .catch((err) => {
      console.log(err);
    });
};

const showCategory = (categories) => {
      categories.forEach(cat => {
        // console.log(cat.title);

        categoryContainer.innerHTML += `
        <li id="${cat.id}" class="hover:border-b-4 hover:border-red-600 cursor-pointer">${cat.title}</li>       
        `
      });
}

//Todo--Another Way--
/*
const loadCategoryAsync = async () => {

  try {
    const res = await fetch("https://news-api-fs.vercel.app/api/categories");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

};
loadCategoryAsync();
*/

loadCategory();
