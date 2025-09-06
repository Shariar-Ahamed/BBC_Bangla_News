// promise -> pinding, resolve(success), reject(error)

const categoryContainer = document.getElementById("categoryContainer");

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories") // promise
    .then((res) => res.json()) // res -- promise
    .then((data) => {
      // console.log(data.categories);

      const categories = data.categories;
      // console.log(categories)
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};


const showCategory = (categories) => {
  categories.forEach((cat) => {
    // console.log(cat.title);

    categoryContainer.innerHTML += `
        <li id="${cat.id}" class="border-red-600 hover:border-b-4 hover:border-red-600 cursor-pointer">${cat.title}</li>       
        `;
  });


  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");

    allLi.forEach((li) => {
      li.classList.remove("border-b-4");
    });

    if (e.target.localName === "li") {
      console.log(e.target);
      e.target.classList.add("border-b-4");
    }
  });
};

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
