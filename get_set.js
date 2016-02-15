//http://habrahabr.ru/company/enterra/blog/153365/
var mikhail = {};
Object.defineProperty(mikhail, 'first_name', { value:    'Mikhail'
                                             , writable: true })

Object.defineProperty(mikhail, 'last_name', { value:    'Weiß'
                                            , writable: true })
                                            
// () → String
// Returns the full name of object.
function get_full_name() {
    return this.first_name + ' ' + this.last_name
}

// (new_name:String) → undefined
// Sets the name components of the object, from a full name.
function set_full_name(new_name) { 
    var names = new_name.trim().split(/\s+/);
    this.first_name = names['0'] || '';
    this.last_name  = names['1'] || '';
}

Object.defineProperty(mikhail, 'name', { get: get_full_name
                                       , set: set_full_name
                                       , configurable: true
                                       , enumerable:   true })

console.log(mikhail.name);
// => 'Mikhail Weiß'

console.log(mikhail.first_name);
// => 'Mikhail'

console.log(mikhail.last_name);
// => 'Weiß'

console.log(mikhail.last_name = 'White');
console.log(mikhail.name);
// => 'Mikhail White'
mikhail.name = 'Peter Schwarz';
console.log(mikhail.name);
