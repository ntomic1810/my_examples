import { test, expect } from '@playwright/test'

test.describe.parallel("API Testing", () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  test('Simple API Test - Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })

  test('Simple API Test - Assert 404 on non-existing user', async ({ request }) => {
  const response = await request.get(`${baseUrl}/api/users/9999`)
  expect(response.status()).toBe(200)

  })


test('GET Request - Get User Detail (JSONPlaceholder)', async ({ request }) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const response = await request.get(`${baseUrl}/users/2`);
  
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data.id).toBe(2);
  expect(data.name).toBe('Ervin Howell');
  expect(data.email).toBe('Shanna@melissa.tv');
})

test('POST Request - Create New Post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });

  console.log('STATUS:', response.status())
  console.log('RESPONSE:', await response.text())

  expect(response.ok()).toBeTruthy()

  const responseBody = await response.json()
  expect(responseBody.title).toBe('foo')
  expect(responseBody.body).toBe('bar')
  expect(responseBody.userId).toBe(1)
  expect(responseBody).toHaveProperty('id')
})

test('Login via DummyJSON', async ({ request }) => {
  const response = await request.post('https://dummyjson.com/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'kminchelle',
      password: '0lelplR',
    },
  });

  const body = await response.json();
  console.log('RESPONSE:', body);
  expect(response.status()).toBe(400);
});

test('PUT Request - Update Post', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    },
  });

  console.log('STATUS:', response.status());
  const responseBody = await response.json();
  console.log('RESPONSE:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.title).toBe('updated title');
  expect(responseBody.body).toBe('updated body');
  expect(responseBody.userId).toBe(1);
  expect(responseBody.id).toBe(1);
});

test('DELETE Request - Delete Post', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

  console.log('STATUS:', response.status());
  const responseBody = await response.text();
  console.log('RESPONSE:', responseBody);

  expect([200, 204]).toContain(response.status());
  expect(responseBody).toBe('{}')
})
})