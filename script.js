// all the api are paid so i cant use the api here

function loadLanguage(lang) {
  fetch(`lang_${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      langData = data;
      updateTextContent();
    });
}

function updateTextContent() {
  document.getElementById("searchInput").placeholder =
    langData.search_placeholder;
  document.querySelector("label[for='categorySelect']").textContent =
    langData.filter_label;
  // Additional text content updates
  document.getElementById("headerTitle").textContent = langData.header_title;
  document.getElementById("footerText").textContent = langData.footer_text;
}

document.getElementById("langEnBtn").addEventListener("click", () => {
  loadLanguage("en");
});

document.getElementById("langJaBtn").addEventListener("click", () => {
  loadLanguage("ja");
});

loadLanguage("en");

const jobData = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    location: "Tokyo, Japan",
    category: "Engineering",
    description: "Description of Software Engineer position.",
  },
  {
    title: "Product Manager",
    company: "InnovateX",
    location: "Tokyo, Japan",
    category: "Marketing",
    description: "Description of Product Manager position.",
  },
  {
    title: "Graphic Designer",
    company: "CreativeWorks",
    location: "Tokyo, Japan",
    category: "Design",
    description: "Description of Graphic Designer position.",
  },
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Tokyo, Japan",
    category: "Engineering",
    description: "Description of Frontend Developer position.",
  },
  {
    title: "Data Analyst",
    company: "InnovateX",
    location: "Tokyo, Japan",
    category: "Marketing",
    description: "Description of Data Analyst position.",
  },
  {
    title: "UX Designer",
    company: "CreativeWorks",
    location: "Tokyo, Japan",
    category: "Design",
    description: "Description of UX Designer position.",
  },
  {
    title: "Backend Developer",
    company: "TechCorp",
    location: "Tokyo, Japan",
    category: "Engineering",
    description: "Description of Backend Developer position.",
  },
  {
    title: "Product Owner",
    company: "InnovateX",
    location: "Tokyo, Japan",
    category: "Marketing",
    description: "Description of Product Owner position.",
  },
  {
    title: "UI Designer",
    company: "CreativeWorks",
    location: "Tokyo, Japan",
    category: "Design",
    description: "Description of UI Designer position.",
  },
];

function renderJobs(jobs) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add(
      "bg-white",
      "p-4",
      "border",
      "border-gray-300",
      "rounded",
      "cursor-pointer",
      "transition",
      "duration-300",
      "transform",
      "hover:shadow-lg"
    );

    const title = document.createElement("h2");
    title.textContent = job.title;
    title.classList.add("text-lg", "font-semibold", "mb-2");

    const company = document.createElement("p");
    company.textContent = job.company;
    company.classList.add("text-gray-600", "mb-1");

    const location = document.createElement("p");
    location.textContent = job.location;
    location.classList.add("text-gray-500");

    jobCard.appendChild(title);
    jobCard.appendChild(company);
    jobCard.appendChild(location);

    jobCard.addEventListener("click", () => showJobDetails(job));

    jobList.appendChild(jobCard);
  });
}

function showJobDetails(job) {
  const jobDetails = document.getElementById("jobDetails");
  jobDetails.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">${job.title}</h2>
      <p class="text-gray-600 mb-2">${job.company} - ${job.location}</p>
      <p class="mb-4">${job.description}</p>
      <p class="text-blue-500 cursor-pointer" onclick="hideJobDetails()">Back to listings</p>
    `;
  jobDetails.classList.remove("hidden");
}

function hideJobDetails() {
  const jobDetails = document.getElementById("jobDetails");
  jobDetails.classList.add("hidden");
}

function filterJobs(query, category) {
  let filteredJobs = jobData;

  if (query) {
    const searchTerm = query.toLowerCase();
    filteredJobs = filteredJobs.filter((job) => {
      const title = job.title.toLowerCase();
      const company = job.company.toLowerCase();
      const location = job.location.toLowerCase();
      return (
        title.includes(searchTerm) ||
        company.includes(searchTerm) ||
        location.includes(searchTerm)
      );
    });
  }

  if (category) {
    filteredJobs = filteredJobs.filter((job) => job.category === category);
  }

  renderJobs(filteredJobs);
}

renderJobs(jobData);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const categorySelect = document.getElementById("categorySelect");
  const category = categorySelect.value;
  filterJobs(searchInput.value, category);
});

const categorySelect = document.getElementById("categorySelect");
categorySelect.addEventListener("change", () => {
  filterJobs(searchInput.value, categorySelect.value);
});
