FOr dropdown

    .selectOptions() this only be applicable for select tag'

Drag and drop
    Dragelement.dragto(Dropelement)

Iframe concept
    If anything is under the frame first locate the frame location using framelocator and identify every element from that iframe.

Mouse Action:
    await page.mouse.click(100, 200, { button: 'right' });
    await page.mouse.dblclick(150, 250); 
    await page.hover('text=Apply Filters'); 

Enter from keyword
    await page.locator('#username').click();  // focus input
    await page.keyboard.type('sadikshya123'); // types each character
    await page.keyboard.press('Tab, Enter');

Date Picker
   1.  If the date picker is a plain HTML5 <input type="date">, you can directly fill() it:
        test('select date in date picker', async ({ page }) => {
    const dateInput = page.locator('input[type="date"]');
    await dateInput.fill('2025-09-14'); // yyyy-mm-dd format
    });
    2. test('select DOB from Material UI datepicker', async ({ page }) => {
    // Click DOB input (opens calendar)
    await page.getByLabel('DOB').click();

    // Navigate (if needed)
    await page.getByRole('button', { name: 'Next month' }).click();

    // Select a date (say 14th)
    await page.getByRole('gridcell', { name: '14' }).click();
    });

