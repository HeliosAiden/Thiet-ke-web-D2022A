export const injectHTML = (id, path) => {
  const element = document.querySelector(`#${id}`);
  try {
    fetch(`${path}`)
      .then((res) => res.text())
      .then((data) => {
        element.innerHTML = data;
        const oldScript = element.querySelector("script")
        if (oldScript) {
          const newScript = document.createElement('script')
          if (oldScript.text) {
            newScript.text = oldScript.text
          }
          if (oldScript.src) {
            newScript.src = oldScript.src
          }
          if (oldScript.type) {
            newScript.type = oldScript.type
          }
          element.removeChild(oldScript)
          element.appendChild(newScript)
        }
      });
  }
  catch(err) {
    console.log(err)
  }
};
