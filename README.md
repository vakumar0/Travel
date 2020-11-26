# Travel
Travel is a static website catered towards travelling. It displays some extravagant places which are adventurous and luxurious. This is a fully responsive website and is hosted on netlify. 

Website can be viewed on the following link: https://vakumar-travel.netlify.app/ 

#### Note: This is test a website. Few links and clickable items are just for display and might now work as expected. This is done purposely to focus only on the key areas that I wanted to understand.

### Objectives
  - Travel was a weekend project developed to understand React.js workings.
  - This project helped me understand how the react interacts with other libraries, JSX syntax, how React integrates with npm module, components and routing. 
  
### Challenges Faced
#### Issue 
   - Images and videos were accessible in the react components when tested on the local environment but when hosted on 3rd party applications such as GitHub or Netlify, images wouldn't load and throw image not found error.
#### Fix
   - It appears that on localhost, react was able to access images present in the public folder. But when the application was deployed on the server, it wasn't able to the identity the path of the public folder or didn't had the access of the same. To fix this I had to use "process.env.PUBLIC_URL" to fetch the media items.
   
#### Issue
   - While accessing the website for the first time, no data would show, however, when the home button was click the application would work normally i.e. until it is refreshed. When the application was refreshed no page found error was thrown.
#### Fix
   - By default I was using "BrowserRouting". BrowserRouting wasn't able to identitfy the correct url and would often lead to incorrect navigation. To avoid this I used "HashRouting". I went through their pros and cons such as HashRouting incompatiblity with SEO and so called ugly url. But for my use case HashRouting was perfect.
   
### Technologies And Libaries Used
   - React.js
   - CSS
   - HTML
   - Font-awesome
   - Google fonts : PT Sans
   
### Editor Used For Development   
   - Visual Code
