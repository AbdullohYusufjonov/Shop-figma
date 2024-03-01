const body = document.querySelector("body");
const loaderContainer = document.querySelector(".loader-container");

window.onload = async () => {
  loaderContainer.style.display="flex"
  await getFoxImg();
  loaderContainer.style.display="none"
};


// Tulki rasmlarini backendan olish
async function getFoxImg() {
  const data = await fetch("https://randomfox.ca/floof/").then((res) =>
    res.json()
  );
  setBodyImg(data.image);
}

function setBodyImg(img) {
  body.style.backgroundImage = `url(${img})`;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.height = "100vh";
}







//   window.onload = async () => {
//     await Promise.all([getFood(), getPosts()]);
//   };

// async function getFood() {
//   const food = await fetch("https://foodish-api.com/api/").then((res) =>
//     res.json()
//   );
//   body.style.minHeight = "100vh";
//   body.style.backgroundImage = `url(${food.image})`;
//   body.style.backgroundRepeat = `no-repeat`;
//   body.style.backgroundSize = `cover`;
//   body.style.backgroundPosition = `center`;
//   body.style.backgroundAttachment = `fixed`;
// }

// async function getPosts() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (res) => res.json()
//   );
//   posts.forEach((post) => {
//     postsList.innerHTML += `<div
//     class="max-w-sm p-6 bg-[#ffffff93] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//   >
//     <a href="#">
//       <h5
//         class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
//       >
//         ${post.title}
//       </h5>
//     </a>
//     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//       ${post.body}
//     </p>
//     <button
//       data-value=${post.id}
//       class="comment-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Comments
//       <svg
//         class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 14 10"
//       >
//         <path
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M1 5h12m0 0L9 1m4 4L9 9"
//         />
//       </svg>
//     </button>
//   </div>`;
//   });
//   getComment();
// }

// function getComment() {
//   const commentBtns = document.querySelectorAll(".comment-btn");
//   commentBtns.forEach((btn) => {
//     btn.addEventListener("click", async () => {
//       try {
//         const comments = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${btn.dataset.value}/comments`
//         );
//         if (comments.status == 200) {
//           const dataComment = await comments.json();
//           modal.style.display = "flex";
//           dataComment.forEach((comment, index) => {
//             commentsContainer.innerHTML += `<div class="p-4 md:p-5 space-y-4">
//             <p
//               class="text-lg text-bold leading-relaxed text-gray-900 dark:text-gray-400"
//             >
//             <span>${index + 1}</span>
//             ${comment.email}
//             </p>
//             <p
//             class="text-base text-gray-500 dark:text-gray-400"
//             >
//             ${comment.name}
//             </p>
//             <p
//               class="text-base text-gray-500 dark:text-gray-400"
//             >
//              ${comment.body}
//             </p>
//           </div>`;
//           });
//         }
//       } catch {
//         alert("Kamentarya olib bolmadi");
//       }
//     });
//   });
// }
