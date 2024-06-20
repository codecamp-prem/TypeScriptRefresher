// In general you can always use the 'type' keyword that allows use to define other
// type as well as object type.

// 'interface' are usually to define object type
/* You can actually use 'interface' to also define function type but
CAN't use 'interface' to store  a union type (which you can with) type.*/

// 'interface' advantages

// implements keyword to implement Interface in Class
/*
interface InterFaceName{
    secretWord: string;
}
let cred : InterFaceName = {
    secretWord: 'you are typescript wizard, now'
};

class Auth implements InterFaceName{
    // this forces you
    // to at least add method, properties that are defined in InterFaceName object
    secretWord: string;

    otherProperty: string;
    ... otherMethod
}

function login(credentials : InterFaceName){}

Since login accepts InterFaceName type as parameter.
we can pass

// 1. new instance of Auth since it also 'implements InterFaceName'
login(new Auth()) 
or
// 2. with cred object because of it's InterFaceName type
login(cred) 
*/

// Another MAIN REASON to use interface
// Easily extensible

/*
You can redefine same interface with same name without getting error
and add more properties and methods to it. Also known 'DECLARAtioN MergING'

- useful for sharing a library that you can share with other people
- so they can easily extends your interface

interface streetCred{
    name: string;
    location: string;
}
interface streetCred{
    weapon: string;
}


*/
