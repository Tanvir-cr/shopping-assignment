1. What is the difference between null and undefined ?

Ans:

null : khali man k bujai, iccha kore empty value assign kora hoy

undefined=kono value assign kora hoy nai ba kono variable declare kora hoy nai

2. What is the use of the map() function in JavaScript? How is it different from forEach()?

## Map(): array er sobgulo upadan pawa jonno, map() er kaj holo array er prottek upadan er upor ekta function apply kora, ar tar por ekta notun array return kora, jar modhe map() er kajer result thake.

## ForEach(): Map er moto kaj kore kintu result lagbe na, karon forEach() kono array return kore na, kintu map() ekta notun array return kore, jar modhe map() er kajer result thake. ForEach() sudhu loop chalate use hoy, kintu map() loop chalate ar notun array create korte use hoy.

3. What is the difference between == and ===?

## == bolte bojai value soman ki na

## === bolte bujai value plus type soman ki na, mane === use korle value ar type duita soman hote hobe, kintu == use korle sudhu value soman holei hobe.

4. What is the significance of async/await in fetching API data?

## Async/await JavaScript er ekta syntax sugar, jar maddhome asynchronous code ke synchronous moto lekha jay. Async function er moddhe await keyword use kore amra promise er result er jonno wait korte pari, jate code ta porer line e execute na hoy joto khon na promise resolve hoy. Ete code ta besh porishkar ar bujhte sohoj hoy, ar error handling o better hoy. Async/await use korle amra API theke data fetch korte parbo, ar code ta besh porishkar ar maintainable hobe.

5. Explain the concept of Scope in JavaScript (Global, Function, Block).

## Scope: JavaScript er scope bolte bojhai variable ar function gulo kothay access kora jabe. JavaScript er tin dhoroner scope ache: {Global Scope, Function Scope, ar Block Scope}.

## Global Scope: Jekono variable ba function jeta global scope e declare kora hoy, seta puro program e access kora jabe. Global scope e declare kora variable gulo window object er part hoy.

## Function Scope: Jekono variable ba function jeta function scope e declare kora hoy, seta sudhu oi function er moddhe access kora jabe. Function scope e declare kora variable gulo function er local variable hoy.

## Block Scope: Jekono variable ba function jeta block scope e declare kora hoy, seta sudhu oi block er moddhe access kora jabe. Block scope e declare kora variable gulo block er local variable hoy. Block scope er jonno amra let ar const use kori, karon var block scope support kore na.