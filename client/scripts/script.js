const searchBox = document.getElementById("search");
const searchContainer = document.getElementById("suggestion-container");

const parentContainer = document.getElementById("parent-contaiiner");

let SearchResults = [];
//
const API_URL = "https://en.wikipedia.org";
searchContainer.style.visibility = "hidden";
let timer = null;
let showSearchOptions = false;

const handleSelect = (select) => {
  searchBox.value = select;
  searchContainer.innerHTML = "";
};
const displayResults = () => {
  SearchResults.forEach((search) => {
    const div = document.createElement("div");
    div.style.cursor = "pointer";
    div.textContent = search;
    div.addEventListener("click", () => {
      handleSelect(search);
    });
    searchContainer.appendChild(div);
  });
};

const handleSearch = async (search_query) => {
  searchContainer.innerHTML = "";
  // https://api.duckduckgo.com/?q=your+query&format=json
  const fetch_url = `${API_URL}/w/api.php?action=opensearch&search=${search_query}y&format=json&origin=*`;
  const res = await fetch(fetch_url);
  const data = await res.json();
  SearchResults = data?.[1] ?? [];
  displayResults();
};
const debounceSearch = (data) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    handleSearch(data);
  }, 500);
};

searchBox.addEventListener("input", (e) => {
  searchContainer.style.visibility = "";
  debounceSearch(e.target.value);
  searchResult = e.target.value;
});

parentContainer.addEventListener("mouseleave", () => {
  showSearchOptions = false;
  searchContainer.style.visibility = "hidden";
});
