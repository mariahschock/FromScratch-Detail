import { renderCat } from '../utils.js';
import { cats } from '../cat.data.js';

const test = QUnit.test;

test('test cat render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="cat"><h1>Leo</h1><img src="./assets/Leo.png"><p>Leo is 5 year(s) old and likes aggressive cuddling</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCat(cats[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});