let courses = [
  {
    id: 1,
    name: "Web Development for Beginners",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4Cg3RDwPYXTNdGARlJ_1E-at0uaZA7kufQ&s",
    description:
      "This course is designed to introduce beginners to the world of web development...",
    price: "$49.99",
    discount_price: "$39.99",
    discount_percentage: 20,
    rate: 4.5,
    reviews: 120,
    key_features: [
      "HTML & CSS basics",
      "JavaScript fundamentals",
      "Responsive design techniques",
      "Build your first website",
    ],
    number_of_lessons: 30,
    course_hours: 40,
    number_of_participants: 500,
  },
  {
    id: 2,
    name: "Mastering Python Programming",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png",
    description:
      "This comprehensive course covers everything you need to know to become a Python programming expert...",
    price: "$79.99",
    discount_price: "$59.99",
    discount_percentage: 25,
    rate: 4.5,
    reviews: 250,
    key_features: [
      "Learn Python syntax",
      "Work with data structures",
      "Build Python applications",
      "Real-world projects",
    ],
    number_of_lessons: 35,
    course_hours: 50,
    number_of_participants: 750,
  },
  {
    id: 3,
    name: "Data Science with R",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/600px-R_logo.svg.png",
    description:
      "Data Science with R is a detailed course that introduces you to the world of data analysis...",
    price: "$99.99",
    discount_price: "$79.99",
    discount_percentage: 20,
    rate: 4,
    reviews: 200,
    key_features: [
      "Introduction to data science",
      "Statistical analysis",
      "Data visualization techniques",
      "Machine learning basics",
    ],
    number_of_lessons: 40,
    course_hours: 55,
    number_of_participants: 600,
  },
  {
    id: 4,
    name: "React for Frontend Development",
    image: "https://reactjs.org/logo-og.png",
    description:
      "This course will teach you how to use React, a powerful library for building dynamic and responsive web applications...",
    price: "$59.99",
    discount_price: "$49.99",
    discount_percentage: 17,
    rate: 4.5,
    reviews: 150,
    key_features: [
      "Learn React fundamentals",
      "State management",
      "Component-based architecture",
      "Build real-world apps",
    ],
    number_of_lessons: 25,
    course_hours: 35,
    number_of_participants: 450,
  },
  {
    id: 5,
    name: "Complete Guide to SQL Databases",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuXgdLKKeEngcdB6jzQDs__kFe5ZEcfbg6Q&s",
    description:
      "In this course, you will become an expert in SQL, the language used to manage relational databases...",
    price: "$49.99",
    discount_price: "$39.99",
    discount_percentage: 20,
    rate: 2.5,
    reviews: 130,
    key_features: [
      "Learn SQL commands",
      "Database design",
      "Data manipulation",
      "Build complex queries",
    ],
    number_of_lessons: 20,
    course_hours: 30,
    number_of_participants: 350,
  },
  {
    id: 6,
    name: "Introduction to Machine Learning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa4b8Q_qIbVfRnBkxb60UlUYuaVTpI7waSw&s",
    description:
      "Machine Learning is a rapidly growing field, and this course is designed to give you a solid foundation in the basics of machine learning...",
    price: "$119.99",
    discount_price: "$99.99",
    discount_percentage: 16.7,
    rate: 3,
    reviews: 300,
    key_features: [
      "Machine learning algorithms",
      "Data preprocessing",
      "Model evaluation",
      "Hands-on projects",
    ],
    number_of_lessons: 45,
    course_hours: 60,
    number_of_participants: 850,
  },
  {
    id: 7,
    name: "Full Stack Web Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UNyZR1cXLlGW-HUwKVy5GMZqcCOr9LrJSQ&s",
    description:
      "This course is perfect for those looking to become a Full Stack Web Developer...",
    price: "$199.99",
    discount_price: "$159.99",
    discount_percentage: 20,
    rate: 3.5,
    reviews: 400,
    key_features: [
      "HTML, CSS, JavaScript",
      "Backend development with Node.js",
      "Database integration with MongoDB",
      "Build full-stack applications",
    ],
    number_of_lessons: 50,
    course_hours: 70,
    number_of_participants: 1000,
  },
  {
    id: 8,
    name: "UI/UX Design for Beginners",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9p9g7frgHobZxjzhCJshykYom1Y4yFt-Lg&s",
    description:
      "This course introduces you to the basics of UI/UX design, including user research, design principles, prototyping, and wireframing...",
    price: "$39.99",
    discount_price: "$29.99",
    discount_percentage: 25,
    rate: 4,
    reviews: 80,
    key_features: [
      "Design principles",
      "User research",
      "Prototyping tools",
      "Wireframing",
    ],
    number_of_lessons: 15,
    course_hours: 20,
    number_of_participants: 200,
  },
  {
    id: 9,
    name: "Digital Marketing Essentials",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fK0UJfoKnRUTxt0sVwbdMMfZSKTvjgBVZg&s",
    description:
      "This comprehensive course covers the fundamentals of digital marketing, including SEO strategies, social media marketing, content marketing, and paid advertising campaigns...",
    price: "$89.99",
    discount_price: "$69.99",
    discount_percentage: 22.2,
    rate: 4.5,
    reviews: 220,
    key_features: [
      "SEO strategies",
      "Social media marketing",
      "Content marketing",
      "Paid advertising campaigns",
    ],
    number_of_lessons: 40,
    course_hours: 50,
    number_of_participants: 600,
  },
  {
    id: 10,
    name: "Introduction to Cybersecurity",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6DmoISH8Iandbf3I9Z_46rFcG0wNUskTNA&s",
    description:
      "This course introduces you to the basics of cybersecurity, covering essential topics like network security, cryptography, ethical hacking, and cyber threat analysis...",
    price: "$79.99",
    discount_price: "$59.99",
    discount_percentage: 25,
    rate: 5,
    reviews: 180,
    key_features: [
      "Network security",
      "Cryptography basics",
      "Ethical hacking",
      "Cyber threat analysis",
    ],
    number_of_lessons: 25,
    course_hours: 30,
    number_of_participants: 450,
  },
];

const coursesContainer = document.getElementById("courses-container");

/*
=============================
Export Main functions
=============================
*/

//Fetch Courses
export async function getCourses() {
  let coursesContent = "";
  courses.forEach((course) => {
    coursesContent += courseComponent(course);
  });
  coursesContainer.innerHTML = coursesContent;

  // By clicking on the course, Go to its details
  coursesContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a.details")) {
      const card = event.target.closest(".card");
      window.location.href = `course-details.html?id=${card.id}`;
    }
  });
}

// Get Course details
export function getCourseDetail(id) {
  const courseContainer = document.getElementById("course-container");
  courses.forEach((course) => {
    if (id == course.id) {
      courseContainer.innerHTML = courseDetailComponent(course);
      return;
    }
  });

  // By clicking on the course, Go to payment page
  courseContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.buy")) {
      const course = event.target.closest("#course");
      const title = course.querySelector("#name").textContent;
      const price = course.querySelector("#price").textContent;
      window.location.href = `payment.html?name=${title}&price=${price}`;
    }
  });
}

/*
=============================
Helping functions
=============================
*/

//Course Component
function courseComponent(course) {
  return ` 
  <div class="col-12 col-md-4">
    <div id="${course.id}" class="card h-100 bg-transparent border-warning rounded-0 p-3">
    <img src="${course.image}" class="card-img-top" alt="Product Image" style="height: 200px; object-fit: fill;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${course.name}</h5>
      <div class=" d-flex ">
       <div class="col-4 text-left">
        <span>${course.number_of_lessons}</span> 
        <span>Lessons</span>
       </div>
       <div class="col-4 text-left">
        <i class="fa-regular fa-clock"></i> 
        <span>${course.course_hours} hours</span>
       </div>
       <div class="col-4 text-left">
        <i class="fa-solid fa-people-group"></i>
        <span>${course.number_of_participants}</span>   
      </div>
      </div>
      <a href="#" class="details fw-bold text-decoration-none link-warning mt-4">
      Learn more
      <i class="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>
   </div>
  </div>`;
}

//Detailed course component
function courseDetailComponent(course) {
  let featuresHtml = featureComponent(course.key_features);
  let rate = rateComponent(course.rate);

  return `
   <!-- Product Images -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <img
              src="${course.image}"
              class="card-img-top"
              alt="Product Image"
              style="height: 450px"
            />
          </div>
        </div>

        <!-- Product Details -->
        <div id="course" class="col-md-6">
          <h1 id="name" class="h2 mb-3">${course.name}</h1>
          <div class="mb-3">
            <span id="price" class="h4 me-2">${course.discount_price}</span>
            <span class="text-muted text-decoration-line-through">${course.price}</span>
            <span class="badge bg-danger ms-2">${course.discount_percentage}% OFF</span>
          </div>
          
          <div class="mb-3">
            <div class="d-flex align-items-center">
              <div class="text-warning me-2">
                ${rate}
              </div>
              <span class="text-muted">(${course.reviews} reviews)</span>
            </div>
          </div>

          <p class="mb-4">
             ${course.description}
          </p>

          <!-- Actions -->
          <div class="d-grid gap-2">
            <button class="btn btn-warning buy" type="button">Buy Now</button>
          </div>
          <div class=" d-flex mt-4 ">
                <div class="col-4 text-left">
                  <span>${course.number_of_lessons}</span> 
                  <span>Lessons</span>
                </div>
                <div class="col-4 text-left">
                  <i class="fa-regular fa-clock"></i> 
                  <span>${course.course_hours} hours</span>
                </div>
                <div class="col-4 text-left">
                  <i class="fa-solid fa-people-group"></i>
                  <span>${course.number_of_participants} participants</span>   
                </div>
          </div>    
          <!-- Additional Info -->
          <div class="mt-4">
            ${featuresHtml}
          </div>
  </div>`;
}

//Feature component
function featureComponent(courseFeature) {
  let featuresHtml = "";
  courseFeature.forEach((feature) => {
    featuresHtml += ` 
    <div class="d-flex align-items-center mb-2">
      <span>${feature}</span>
    </div>`;
  });
  return featuresHtml;
}

//Rate logic component
function rateComponent(courseRate) {
  let rate = "";
  let flooredRate = Math.floor(courseRate);
  let emptyRate = 5 - courseRate;
  let flooredEmptyStars = Math.floor(emptyRate);

  for (let i = 0; i < flooredRate; i++) {
    rate += `<i class="fas fa-star"></i>`;
  }
  if (!Number.isInteger(courseRate)) {
    rate += `<i class="fas fa-star-half-alt"></i>`;
  }
  for (let i = 0; i < flooredEmptyStars; i++) {
    rate += `<i class="fa-regular fa-star"></i>`;
  }

  return rate;
}
