export default class Store{

  static getLocalStorage(name) {
    return JSON.parse( window.localStorage.getItem( name ) )
  }

  static setLocalStorage(name, item) {
    window.localStorage.setItem( name, JSON.stringify( item ) );
  }
};
