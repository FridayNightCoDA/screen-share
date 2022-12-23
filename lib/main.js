function countdownTimer(timerEl) {

  const now = new Date();

  // Meeting start @ Fri 6:00 PST, or Sat 1:00 UTC
  const START_DAY_UTC = 6;
  const START_HOUR_UTC = 2;//1;
  const START_MIN_UTC = 0;

  let meetingStart = new Date(now);
  meetingStart.setUTCHours(START_HOUR_UTC);
  meetingStart.setUTCMinutes(START_MIN_UTC);
  meetingStart.setUTCSeconds(0);
  meetingStart.setUTCMilliseconds(0);

  const counterEl = timerEl.querySelector(".counter");

  const todayUTC = now.getUTCDay();

  if (todayUTC < START_DAY_UTC || todayUTC == START_DAY_UTC && now.getUTCHours() < START_HOUR_UTC || todayUTC == START_DAY_UTC && now.getUTCHours() == START_HOUR_UTC && now.getUTCMinutes() < START_MIN_UTC) {
    console.log("meeting this week");
    meetingStart.setUTCDate(meetingStart.getUTCDate() + (START_DAY_UTC - todayUTC));
    // Start time is this week
    // meetingStart.setUTCDate(meetingStart.getUTCDate() - todayUTC + (todayUTC === 0 ? -6 : START_DAY_UTC));
  } else {
    // Start time is next week (already happened)
    console.log("meeting next week");
    meetingStart.setUTCDate(meetingStart.getUTCDate() + (todayUTC - START_DAY_UTC));
  }

  setInterval(() => {
    const now = new Date();

    if (now.getDate() != meetingStart.getDate()) {
      counterEl.innerText = meetingStart.toDateString();
    } else {
      const diffSeconds = Math.floor((meetingStart.getTime() - now.getTime()) / 1000);
      const [diffMinutes, remSeconds] = [Math.floor(diffSeconds / 60), Math.floor(diffSeconds % 60)];
      const [diffHours, remMinutes] = [Math.floor(diffMinutes / 60), Math.floor(diffMinutes % 60)];

      if (diffHours > 0) {
        counterEl.innerText = `${diffHours.toString().padStart(2, '0')}h ${remMinutes.toString().padStart(2, '0')}m ${remSeconds.toString().padStart(2, '0')}s`;
      } else if (diffMinutes > 0) {
        counterEl.innerText = `${diffMinutes.toString().padStart(2, '0')}m ${remSeconds.toString().padStart(2, '0')}s`;
      } else if (diffSeconds > 0) {
        counterEl.innerText = `${remSeconds.toString().padStart(2, '0')}s`;
      } else {
        counterEl.innerText = '';
      }
    }
  }, 100);
}

window.addEventListener("load", () => {
  document.addEventListener("keyup", e => {
    switch (e.key) {
      case '0':
        window.location.href = '/';
        break;
      case '1':
        window.location.href = '/preamble';
        break;
      case '2':
        window.location.href = '/welcome';
        break;
      case '3':
        window.location.href = '/steps';
        break;
      case '4':
        window.location.href = '/traditions';
        break;
      case '5':
        window.location.href = '/patterns';
        break;
      case '6':
        window.location.href = '/promises';
        break;
      case 'q':
        window.location.href = '/serenity-prayer';
        break;
      case 'w':
        window.location.href = '/opening-prayer';
        break;
      default:
        break;
    }
  });

  const timerEl = document.querySelector(".countdown-timer");
  if (timerEl) {
    countdownTimer(timerEl);
  }
});

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