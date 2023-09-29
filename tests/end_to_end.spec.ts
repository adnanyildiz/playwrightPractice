import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.setViewportSize({
        width:1536,
        height:824
    })
    await page.goto('https://www.sonos.com/en-us/home');
    await page.getByRole('link', { name: 'close dialog' }).click();
    await page.locator('li>a[href="/en-us/shop"]').hover()
    await page.locator('li>a[href="/en-us/shop"]').hover()
    await page.getByTestId('product-list').locator('li').filter({ hasText: 'Era 300' }).getByRole('link').click();
    //await page.locator('[data-testid="cta-backorder"]').scrollIntoViewIfNeeded()
    // await page.locator('[data-testid="cta-backorder"]').click();
    // await page.frameLocator('#extend-offers-modal-iframe').locator('button[name="close"]').click();
    // await page.getByRole('button', { name: 'Checkout' }).click();
    // await page.getByLabel('text.increment.line.item').click();
    // await page.getByRole('button', { name: 'Remove product Extend Product Protection' }).click();
    // await page.getByRole('button', { name: 'Checkout', exact: true }).click();
    // await page.getByPlaceholder('Email Address').click();
    // await page.getByPlaceholder('Email Address').fill('asfhfcd@gmail.com');
    // await page.getByRole('textbox', { name: 'First name' }).click();
    // await page.getByRole('textbox', { name: 'First name' }).fill('test');
    // await page.getByRole('textbox', { name: 'Last name' }).click();
    // await page.getByRole('textbox', { name: 'Last name' }).fill('twst');
    // await page.getByRole('textbox', { name: 'Address line 1' }).click();
    // await page.getByRole('textbox', { name: 'Address line 1' }).fill('345');
    // await page.getByText('345 W Washington AveMadison WI 53703 - 140 Addresses').click();
    // await page.getByTitle('345 W Washington Ave Ste 101').getByText('Madison WI 53703').click();
    // await page.getByPlaceholder('Mobile Phone').click();
    // await page.getByPlaceholder('Mobile Phone').fill('(517) 456-7896');
    // await page.getByText('Express Shipping').click();
    // await page.getByRole('button', { name: 'Continue to Payment' }).click();
    // await page.getByPlaceholder('Card Number').click();
    // await page.getByPlaceholder('Card Number').fill('4111 1111 1111 1111');
    // await page.getByLabel('Month').selectOption('7');
    // await page.getByLabel('Year').selectOption('2026');
    // await page.getByPlaceholder('Security Code').click();
    // await page.getByPlaceholder('Security Code').fill('675');
    // await page.getByText('Customer Customer Sign in Email i Your email address will be used for order rece').click();
    // await page.getByRole('button', { name: 'Credit Card' }).click();
    // await page.getByRole('button', { name: 'Review Order' }).click();
    // await page.getByRole('link', { name: 'Edit' }).click();
    // await page.getByRole('button', { name: 'Remove product Era 300' }).click();
    // await page.locator('#left').getByRole('link').click();
    // await page.getByTestId('effortless-listening content-module').getByRole('link', { name: 'Explore products' }).click();
});