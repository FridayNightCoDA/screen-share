// import Navigo from 'navigo';
// window.addEventListener("load", () => {
//   const router = new Navigo('/');

//   const pages = [
//     'countdown',
//     'preamble',
//     'welcome',
//     'steps',
//     'traditions',
//     'patterns',
//     'patterns-denial',
//     'patterns-low-self-esteem',
//     'patterns-compliance',
//     'patterns-control',
//     'patterns-avoidance',
//     'promises'
//   ];

//   const sections = document.querySelectorAll('.section');

//   router.on('/:section', (match) => {
//     const section = match.data.section;

//     for (let sect of sections) {
//       if (sect.classList.contains(section)) {
//         sect.style.display = '';
//       } else {
//         sect.style.display = 'none';
//       }
//     }
//   });

//   router.resolve();
// });