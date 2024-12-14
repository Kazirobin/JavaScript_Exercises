let globalData = []; // Store the fetched data globally for reuse
let sortedData = []; // Store the sorted data globally

// Fetch API data and display
const fetchApi = async (seeAll = false) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const result = await res.json();
  globalData = result.data.tools; // Store the full dataset globally
  display(globalData, seeAll);
};

// Display data
const display = (data, seeAll = false) => {
  const hubID = document.getElementById("hubID");
  const seeMore = document.getElementById("seeMore");

  hubID.innerHTML = ""; // Clear previous content

  // Toggle "See More" button visibility
  if (data.length > 6 && !seeAll) {
    seeMore.classList.remove("hidden");
  } else {
    seeMore.classList.add("hidden");
  }

  // Limit displayed items if not showing all
  const displayData = seeAll ? data : data.slice(0, 6);

  // Create HTML for each item
  displayData.forEach((hub) => {
    const singleDiv = document.createElement("div");
    singleDiv.classList = `mx-auto p-5 sm:p-10 md:p-16 shadow-xl`;
    singleDiv.innerHTML = `
      <div class="rounded overflow-hidden flex flex-col mx-auto">
        <a href="w-full">
          <img class="w-full h-full" src="${hub.image}">
        </a>
        <div class="relative -mt-4 px-10 pt-5 pb-16 bg-white m-10 shadow-2xl shadow-pink-500">
          <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            ${hub.name}
          </a>
          <p class="text-gray-500 text-sm">${hub.description}</p>
          <ol class="mt-5 text-gray-600 flex flex-col list-decimal font-bold">
            Features:
            <li href="#" class="text-pink-800 transition duration-500 ease-in-out">${hub.features[0]}</li>
            <li href="#" class="text-indigo-600 transition duration-500 ease-in-out">${hub.features[1]}</li>
            <li href="#" class="text-pink-800 transition duration-500 ease-in-out">${hub.features[2]}</li>
          </ol>
          <p class="text-gray-500">Published in: ${hub.published_in}</p>
        </div>
      </div>
    `;
    hubID.appendChild(singleDiv);
  });
};

// Sort by date and display
const btnClickForSort = () => {
  sortedData = [...globalData].sort(
    (a, b) => new Date(a.published_in) - new Date(b.published_in)
  );
  display(sortedData, false); // Display sorted data
};

// Show more sorted data
const seeMoreClick = () => {
  display(sortedData.length > 0 ? sortedData : globalData, true); // Show all sorted or original data
};

// Initial data fetch
fetchApi();
