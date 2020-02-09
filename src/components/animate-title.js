const FUNNY_TITLES_ARRAY = [
  "Hello ?", "I'm a creative developper", "= I code and design",
  "Got a website project ?", "A friendly question ?", "An app to develop ?",
  "A website to design ?", "A remote mission ?", "... or a mission onsite ?",
  "Need a sexy static website ?", "Need a React.Js webapp ?",
]

export const animateTitle = () => {
  let i = 0;

  setInterval(() => {
    document.title = FUNNY_TITLES_ARRAY[i];
    i++;

    if (i === FUNNY_TITLES_ARRAY.length) {
      i = 0;
    }
  }, 5000);
}
