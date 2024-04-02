let explore = document.querySelector(".explore-jobs");
let jobTitle = document.querySelector(".explore-jobs .job-title input");
let jobType = document.querySelector(".explore-jobs .job-type select");
let searchBtn = document.querySelector(".explore-jobs .search-btn button");
let jobs = document.querySelector(".explore-jobs .jobs");
let jobsContent = document.querySelector(".explore-jobs .jobs .content");
let job = document.querySelector(".explore-jobs .jobs .content .job");
let jobsNum = document.querySelector(".explore-jobs .jobs h3 span");

searchBtn.addEventListener("click", () => {
  searchBtn.innerHTML = "";
  let span = document.createElement("span");
  searchBtn.appendChild(span);
  searchBtn.style.opacity = "0.5";

  setTimeout(() => {
    searchBtn.innerHTML = "Search";
    searchBtn.style.opacity = "1";

    jobs.classList.remove("hidden");

    // if (jobs.ch) {

    // }

    async function fetchData() {
      let data = await fetch("jobs.json");
      let jobs = await data.json();
      let jobsArr = Array.from(Object.values(jobs[0]));

      if (jobType.value === "") {
        jobsNum.innerHTML = jobsArr.length;
        for (let i = 0; i < jobsArr.length - 1; i++) {
          jobsContent.appendChild(job.cloneNode(true));
        }
      } else if (jobType.value === "full_time") {
        jobsNum.innerHTML = 6;
        for (let i = 0; i < 5; i++) {
          jobsContent.appendChild(job.cloneNode(true));
        }
      } else if (jobType.value === "part_time") {
        jobsNum.innerHTML = 3;
        for (let i = 0; i < 2; i++) {
          jobsContent.appendChild(job.cloneNode(true));
        }
      } else {
        jobsNum.innerHTML = 1;
        for (let i = 0; i < 1; i++) {
          jobsContent.appendChild(job.cloneNode(true));
        }
      }
      removeData();
    }
    fetchData();
    function removeData() {
      for (let j = 0; j < jobsContent.children.length; j++) {
        if (jobsContent.children[j].classList.contains("job")) {
          jobsContent.children[j].remove();
        }
      }
      console.log(jobsContent.children);
    }
  }, 1000);
});
