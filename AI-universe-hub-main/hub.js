const fetchApi = async (seeAll) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const result = await res.json();
  const mainData = result.data.tools;
  // console.log(mainData);
  display(mainData, seeAll);
};
const display = (mainData, seeAll) => {
  const hubID = document.getElementById("hubID");
  hubID.innerHTML = "";
  const seeMore = document.getElementById("seeMore");
  if (mainData.length > 6) {
    seeMore.classList.remove("hidden");
  } else {
    seeMore.classList.add("hidden");
  }
  if (seeAll) {
    seeMore.classList.add("hidden");
  }

  if (!seeAll) {
    mainData = mainData.slice(0, 6);
  }
  mainData.forEach((hub) => {
    // console.log(hub);
    const singleDiv = document.createElement("div");
    singleDiv.classList = `mx-auto p-5 sm:p-10 md:p-16 shadow-xl`;
    singleDiv.innerHTML = `
   <div class="rounded overflow-hidden flex flex-col mx-auto">
  
          <a href="w-full">
              <img class="w-full h-full" src="${hub.image}">
          </a>
          <div class="relative -mt-4 px-10 pt-5 pb-16 bg-white m-10 shadow-2xl shadow-pink-500">
              <a href="#"
                  class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  ${hub.name}
                  </a>
              <p class="text-gray-500 text-sm">
                  ${hub.description}
              </p>
              <ol class="mt-5 text-gray-600 flex flex-col list-decimal font-bold">
                 Features:
                  <li href="#" class=" text-pink-800 transition duration-500 ease-in-out">
                      ${hub.features[0]}
                  </li> 
                   <li href="#" class="text-indigo-600 transition duration-500 ease-in-out">
                     ${hub.features[1]}
                  </li>
                   <li href="#" class="text-pink-800 transition duration-500 ease-in-out">
                     ${hub.features[2]}
                  </li>
              </ol>
               <p class="text-gray-500"> published_in:
                  ${hub.published_in}
              </p>
          </div>
      </div>
  `;
    hubID.appendChild(singleDiv);
  });
};
//this function is work when i click on Sort by Date
const btnClickForSort = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const result = await res.json();
  const mainData = result.data.tools;
  // console.log(mainData);
  const sortedHub = mainData.sort(
    (a, b) => new Date(a.published_in) - new Date(b.published_in)
  );
  display(sortedHub);
  // seeMoreClick(sortedHub);
};
// this function is run when i click on see more
const seeMoreClick = () => {
  fetchApi(true);
  // display(sortPera);
};
fetchApi();
