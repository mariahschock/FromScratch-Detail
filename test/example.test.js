import { renderCat } from '../utils.js';
import { cats } from '../cat-data.js';

const test = QUnit.test;

test('test cat render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="cat"><a href="./catStart/?id=1"><img src="./assets/Leo.png"><span class="name">Leo</span></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCat(cats[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});