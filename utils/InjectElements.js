const rootURL = window.location.origin;

const concatURL = (path) => {
  return `${rootURL}/${path}`;
};

export const injectHTML = (id, path, images = [], style = null) => {
  const element = document.querySelector(`#${id}`);
  if (!element) return;
  try {
    fetch(`${concatURL(path)}`)
      .then((res) => res.text())
      .then((data) => {
        element.innerHTML = data;
        const oldScript = element.querySelector("script");
        if (oldScript) {
          const newScript = document.createElement("script");
          if (oldScript.text) {
            newScript.text = oldScript.text;
          }
          if (oldScript.src) {
            newScript.src = concatURL(oldScript.src);
          }
          if (oldScript.type) {
            newScript.type = oldScript.type;
          }
          element.removeChild(oldScript);
          element.appendChild(newScript);
        }
        if (images.length !== 0) {
          images.map((img, index) => {
            const currentIMG = document.getElementById(`img-${index}`);
            const newIMG = document.createElement("img");
            if (currentIMG) {
              newIMG.src = concatURL(img.src);
              newIMG.alt = img.alt;
              newIMG.style = img.style;
              newIMG.id = currentIMG.id;
              newIMG.className = currentIMG.className;
            }
            currentIMG.replaceWith(newIMG);
          });
        }
        if (style !== null) {
          const newStyle = document.createElement("link");
          newStyle.rel = "stylesheet";
          newStyle.href = style.href;
          const oldStyle = element.querySelector("link");
          if (oldStyle) {
            element.removeChild(oldStyle);
          }
          element.appendChild(newStyle);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

export const injectTagHTML = ( tag, src='', style='', className='', ) => {
  const element = document.createElement(`${tag}`);
  if (!element) return;
  document.body.appendChild(element)
  if (src) {
    element.src = `${concatURL(src)}`
  }
  if (className) {
    element.className = className
  }
  if (style) {
    element.style = style
  }

};
