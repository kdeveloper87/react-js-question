export default class Store{
  constructor(name, callback) {
    this.localStorage = window.localStorage;
    this.getLocalStorage( name ) || this.setLocalStorage( name, {} );

    callback && callback();
  }

  getLocalStorage(name) {
    return JSON.parse( this.localStorage.getItem( name ) )
  }

  setLocalStorage(name, item) {
    this.localStorage.setItem( name, JSON.stringify( item ) );
  }
};
