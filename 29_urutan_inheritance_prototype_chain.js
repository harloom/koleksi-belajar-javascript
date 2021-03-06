/**
 * Javascript is about Object inheritance
 * 
 * Setiap Object, function yang kita buat..sebenarnya mereka
 * mewarisi dari Object-object bawaan
 */

  var config  = {
    number: 2,
    limit: 4
  };

  /** config --> Object.prototype --> null
  *
  * config -> mewarisi -> Object.prototype -> mewarisi-> null 
  * 
  * dimana null adalah ujung dari inheritance (prototype chain) 
  */

  var x = Object.create(config);
  /**
   * x --> config --> Object.prototype --> null 
   */

   var y = Object.create(null);
   /**
    * y --> null
    * 
    * kenapa y tidak mewarisi Object.prototype ? 
    * karena create() adalah peoperty langsung dari Object() 
    * dan bukanya property dari Object.prototype. 
    * Jadisebenarnya dalam Object() itu begini:
    */
    function Object() {
       
    }
    
    Object.create = function() {
        //
    }

    /**
     * Coba cek di console.log -> Object.hasOwnProperty('create'); // true
     * 
     * Lihatkan, create() adalah property langsung (dalam constructor function) dari Object(), 
     * jika bukan property langsung, maka mestinya dalam nya begini:
     */

     Object.prototype.create = function() {
        //
     };

     /**
      * di Javascript, Selalu gunakan method hasOwnProperty() untuk cek suatu properti exist atau tidak
      * jika gak pake method ini, maka javascript akan scan semua node Object.prototype 
      * (prototype chain) sampe ujung, ini gk bagus buat performance. 
      * Dengan kata lain..tidak cukup hanya mengandalkan if (my.property == undefined)
      */