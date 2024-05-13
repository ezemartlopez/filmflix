export function getStorageItem(identifier, defaultValue) {
    const stored = sessionStorage.getItem(identifier);
    if (stored === null) {
      return defaultValue; // O el modo predeterminado que prefieras si no hay ningún valor almacenado
    } else {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error("Error parsing store "+ identifier +":", error);
        return defaultValue;
      }
    }
}

export function setStorageItem(identifier, value){
    //console.log("Seteando a " + identifier + ": "+ value);
    sessionStorage.setItem(identifier, JSON.stringify(value));
}
