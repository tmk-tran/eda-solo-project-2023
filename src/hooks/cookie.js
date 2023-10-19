// Utility function -- looks at all the cookies for this page and gives you the one requested
const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp("" + cookieName + "[^;]+").exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(
    !!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : ""
  );
};

export default getCookie;
