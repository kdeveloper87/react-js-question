export default class Store{
  constructor(name, callback) {
    // this.localStorage = window.localStorage;
    Store.getLocalStorage( name ) || Store.setLocalStorage( name, {} );

    callback && callback();
  }

  static getLocalStorage(name) {
    return JSON.parse( window.localStorage.getItem( name ) )
  }

  static setLocalStorage(name, item) {
    window.localStorage.setItem( name, JSON.stringify( item ) );
  }
};
