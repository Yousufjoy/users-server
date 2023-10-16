/**
 * 1. create a post api on the server side
 * 2. Client side send data via post
 * 3. set fetch method inside the fetch options(Second parameters) {https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch}
 * 4. options will have three things : method
 * 5. options will have headers: "content-type": "application/json"
 * 6. don't forget to send data by JSON.Stringify() in the body
 * 7. On the server side: dont forget to use express.json() middleware {cause server e eshe shei string object k parse kore normal object e convert kortesi!}
 */
